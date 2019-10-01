import constants from "./../constants";
const { firebaseConfig, c } = constants;
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

export function addItem(_name, _categoryId) {
  return () => db.collection("categories").doc(_categoryId).collection("items").add({
    name: _name,
    checked: false,
    timestamp: new Date().getTime()
  });
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