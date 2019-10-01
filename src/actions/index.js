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
    const categories = [];

    db.collection("categories").orderBy("timestamp")
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(docSnapshot => {
          categories.push(docSnapshot.data().name);
        });
        console.log("categories: ", categories);
      })

    categories.forEach(categoryName => {
      console.log(categoryName);
      // db.collection("categories").doc(categoryName).collection("items")
      //   .onSnapshot(querySnapshot => {
      //     console.log("query snapshot: ", querySnapshot);
      //     let items = [];
      //     querySnapshot.forEach(docSnapshot => {
      //       console.log("docSnapshot: ", docSnapshot);
      //       console.log("docSnapshot.data(): ", docSnapshot.data());
      //       items.push(docSnapshot.data().name);
      //     });
      //     console.log("items: ", items.join(", "));
      //   });
    })

    // .on('child_added', data => {
    //   const newTicket = Object.assign({}, data.val(), {
    //     id: data.getKey(),
    //     formattedWaitTime: new Moment(data.val().timeOpen).from(new Moment())
    //   });
    //   dispatch(receiveTicket(newTicket));
    // });
  };
}

function getItem(itemFromFirebase) {
  return {
    type: c.GET_ITEM,
    item: itemFromFirebase
  };
}