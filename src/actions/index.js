import constants from "./../constants";
const { firebaseConfig, c } = constants;
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

export function addItem(_name, _category) {
  return () => db.collection("categories").doc(_category).collection("items").add({
    name: _name,
    checked: false,
    timestamp: new Date().getTime()
  });
}

export function watchFirebaseItems() {
  return function (dispatch) {
    db.collection("categories").orderBy("timestamp")
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(docSnapshot => {
          let category = docSnapshot.data();
          db.collection("categories").doc(category.name).collection("items").orderBy("timestamp", "desc").get()
            .then(
              querySnapshot => {
                // console.log("query snapshot: ", querySnapshot);
                let items = {};
                querySnapshot.forEach(docSnapshot => {
                  items[docSnapshot.id] = docSnapshot.data();
                });
                console.log("items: ", items);
                dispatch(receiveCategory(category, items));
              }
            )
        });
      })
  }
}

function receiveCategory(categoryFromFirebase, itemsFromFirebase) {
  return {
    type: c.RECEIVE_CATEGORY,
    category: categoryFromFirebase,
    items: itemsFromFirebase
  }
}