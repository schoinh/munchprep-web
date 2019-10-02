import constants from "./../constants";
const { firebaseConfig, c } = constants;
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

export function addItem(_name, _categoryId) {
  return function () {
    db.collection("categories").doc(_categoryId).collection("items").add({
      name: _name,
      checked: false,
      timestamp: new Date().getTime()
    });
  }
}

export function watchFirebaseItems() {
  return function (dispatch) {
    db.collection("categories").orderBy("timestamp")
      .onSnapshot(categoryCollectionSnapshot => {
        categoryCollectionSnapshot.forEach(categorySnapshot => {
          let categoryId = categorySnapshot.id;
          let category = categorySnapshot.data();
          db.collection("categories").doc(categoryId).collection("items").orderBy("timestamp", "desc").onSnapshot(
            itemsCollectionSnapshot => {
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
    var itemRef = db.collection("categories").doc(categoryId).collection("items").doc(itemId);
    console.log("itemRef: ", itemRef);
    itemRef.get().then(item => {
      console.log("item.data(): ", item.data());
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
    db.collection("categories").get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          db.collection("categories").doc(doc.id).collection("items").get()
            .then(querySnapshot => {
              console.log(querySnapshot);
              querySnapshot.forEach(item => {
                console.log(item);
                db.collection("categories").doc(item.ref.parent.parent.id).collection("items").doc(item.id).delete();
              })
            })
        })
      })
  }
}