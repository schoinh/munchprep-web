import constants from "./../constants";
const { firebaseConfig, c } = constants;
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

export function addItem(_name, _categoryId) {
  return function () {
    const userId = firebase.auth().currentUser.uid;
    db.collection("users").doc(userId).collection("categories").doc(_categoryId).collection("items").add({
      name: _name,
      checked: false,
      timestamp: Date.now()
    });
  };
}

export function startFirebaseComm(userId, userName) {
  return function (dispatch) {
    db.collection("users").doc(userId).get().then((user) => {
      if (user.exists) {
        dispatch(setFirebaseListener(userId));
      } else {
        var collectionRef = db.collection("users").doc(userId).collection("categories");
        db.collection("users").doc(userId).set({
          name: userName,
          snacks: ""
        })
          .then(() => {
            collectionRef.add({
              name: "Produce",
              timestamp: Date.now()
            });
          })
          .then(() => {
            collectionRef.add({
              name: "Proteins",
              timestamp: Date.now() + 1
            });
          })
          .then(() => {
            collectionRef.add({
              name: "Other Foods",
              timestamp: Date.now() + 2
            });
          })
          .then(() => {
            collectionRef.add({
              name: "Non-Foods",
              timestamp: Date.now() + 3
            });
          })
          .then(() => {
            dispatch(setFirebaseListener(userId));
          });
      }
    });
  };
}

function setFirebaseListener(userId) {
  return function (dispatch) {
    db.collection("users").doc(userId).onSnapshot(userSnapshot => {
      let snacks = userSnapshot.data().snacks;
      dispatch()
    });

    db.collection("users").doc(userId).collection("categories").orderBy("timestamp")
      .onSnapshot(categoryCollectionSnapshot => {
        categoryCollectionSnapshot.forEach(categorySnapshot => {
          let categoryId = categorySnapshot.id;
          let category = categorySnapshot.data();
          db.collection("users").doc(userId).collection("categories").doc(categoryId).collection("items").orderBy("timestamp", "desc")
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

function receiveCategory(categoryIdFromFirebase, categoryFromFirebase, itemsFromFirebase) {
  return {
    type: c.RECEIVE_CATEGORY,
    categoryId: categoryIdFromFirebase,
    category: categoryFromFirebase,
    items: itemsFromFirebase
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
    db.collection("users").doc(userId).collection("categories").get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let categoryId = doc.id;
          db.collection("users").doc(userId).collection("categories").doc(categoryId).collection("items").get()
            .then(querySnapshot => {
              querySnapshot.forEach(item => {
                db.collection("users").doc(userId).collection("categories").doc(categoryId).collection("items").doc(item.id).delete();
              });
            });
        });
      });
  };
}

export function toggleAuth(newAuthStatus) {
  return {
    type: c.TOGGLE_AUTH,
    newAuthStatus: newAuthStatus
  };
}