import constants from "./../constants";
const { firebaseConfig, c } = constants;
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

//--------------------//
// INITIATION ACTIONS //
//--------------------//

export function toggleAuth(newAuthStatus) {
  return {
    type: c.TOGGLE_AUTH,
    newAuthStatus: newAuthStatus
  };
}

export function startFirebaseComm(userId, userName) {
  return function (dispatch) {
    db.collection("users").doc(userId).get().then((user) => {
      // If existing user, set up Firestore listener
      if (user.exists) {
        dispatch(setFirestoreListener(userId));

        // If first-time login, set up default data in Firestore and then set up listener
      } else {
        const categoriesRef = db.collection("users").doc(userId).collection("categories");
        const defaultCategories = ["Produce", "Proteins", "Other Foods", "Non-Foods"];

        const addDefaultCategories = () => {
          defaultCategories.forEach(category => {
            categoriesRef.add({
              name: category,
              timestamp: Date.now() + defaultCategories.indexOf(category)
            });
          });
        };

        const menuRef = db.collection("users").doc(userId).collection("menu");
        const defaultDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const addDefaultDayNames = () => {
          defaultDayNames.forEach(dayName => {
            menuRef.doc(defaultDayNames.indexOf(dayName).toString()).set({
              dayName: dayName,
              meals: {
                breakfast: "...",
                lunch: "...",
                dinner: "..."
              }
            });
          });
        };

        db.collection("users").doc(userId).set({
          name: userName,
          snacks: "..."
        })
          .then(addDefaultDayNames())
          .then(addDefaultCategories())
          .then(dispatch(setFirestoreListener(userId)));
      }
    });
  };
}

function setFirestoreListener(userId) {
  return function (dispatch) {
    db.collection("users").doc(userId).onSnapshot(userSnapshot => {
      let snacks = userSnapshot.data().snacks;
      dispatch(receiveSnacks(snacks));
    });

    const categoriesRef = db.collection("users").doc(userId).collection("categories");
    categoriesRef.orderBy("timestamp")
      .onSnapshot(categoryCollectionSnapshot => {
        categoryCollectionSnapshot.forEach(categorySnapshot => {
          let categoryId = categorySnapshot.id;
          let category = categorySnapshot.data();
          categoriesRef.doc(categoryId).collection("items").orderBy("timestamp", "desc")
            .onSnapshot(itemsCollectionSnapshot => {
              let items = {};
              itemsCollectionSnapshot.forEach(itemSnapshot => {
                items[itemSnapshot.id] = itemSnapshot.data();
              });
              dispatch(receiveCategory(categoryId, category, items));
            }
            );
        });
      });
  };
}

function receiveSnacks(snacksFromFirebase) {
  return {
    type: c.RECEIVE_SNACKS,
    snacks: snacksFromFirebase
  };
}

function receiveCategory(categoryIdFromFirebase, categoryFromFirebase, itemsFromFirebase) {
  return {
    type: c.RECEIVE_CATEGORY,
    categoryId: categoryIdFromFirebase,
    category: categoryFromFirebase,
    items: itemsFromFirebase
  };
}

//-----------------------//
// SHOPPING LIST ACTIONS //
//-----------------------//

export function addGroceryItem(_name, _categoryId) {
  return function () {
    const userId = firebase.auth().currentUser.uid;
    const categoriesRef = db.collection("users").doc(userId).collection("categories");
    categoriesRef.doc(_categoryId).collection("items").add({
      name: _name,
      checked: false,
      timestamp: Date.now()
    });
  };
}

export function toggleChecked(categoryId, itemId) {
  return function () {
    const userId = firebase.auth().currentUser.uid;
    var itemRef = db.collection("users").doc(userId).collection("categories").doc(categoryId).collection("items").doc(itemId);
    itemRef.get().then(item => {
      if (item.data().checked == true) {
        itemRef.update({
          "checked": false
        });
      } else {
        itemRef.update({
          "checked": true
        });
      }
    });
  };
}

export function clearShoppingList() {
  return function () {
    const userId = firebase.auth().currentUser.uid;
    const categoriesRef = db.collection("users").doc(userId).collection("categories");
    categoriesRef.get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let categoryId = doc.id;
          categoriesRef.doc(categoryId).collection("items").get()
            .then(querySnapshot => {
              querySnapshot.forEach(item => {
                categoriesRef.doc(categoryId).collection("items").doc(item.id).delete();
              });
            });
        });
      });
  };
}

//------------------------------//
// MEAL PLANNING (MENU) ACTIONS //
//------------------------------//

export function updateSnacks(snacksKeyValue) {
  return function () {
    const userId = firebase.auth().currentUser.uid;
    db.collection("users").doc(userId).update(snacksKeyValue);
  };
}