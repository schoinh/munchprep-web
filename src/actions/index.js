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

    // This promise is not necesary for static categories but will be needed for custom categories
    const getCategoryNames = new Promise((resolve, reject) => {
      const categoryNames = [];
      db.collection("categories").orderBy("timestamp")
        .onSnapshot(querySnapshot => {
          querySnapshot.forEach(docSnapshot => {
            categoryNames.push(docSnapshot.data().name);
          });
          resolve(categoryNames);
          console.log("categoryNames: ", categoryNames);
        })
    });

    getCategoryNames.then(result => {
      result.forEach(categoryName => {
        db.collection("categories").doc(categoryName).collection("items").orderBy("timestamp", "desc")
          .onSnapshot(querySnapshot => {
            // console.log("query snapshot: ", querySnapshot);
            let items = {};
            querySnapshot.forEach(docSnapshot => {
              items[docSnapshot.id] = docSnapshot.data();
            });
            console.log("items: ", items);
          });
      })
    });

    // .on('child_added', data => {
    //   const newTicket = Object.assign({}, data.val(), {
    //     id: data.getKey(),
    //     formattedWaitTime: new Moment(data.val().timeOpen).from(new Moment())
    //   });
    //   dispatch(receiveTicket(newTicket));
    // });
  }
}

function receiveItems(itemsFromFirebase) {
  return {
    type: c.RECEIVE_ITEMS,
    items: itemsFromFirebase
  };
}