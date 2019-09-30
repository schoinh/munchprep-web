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
    db.collection("categories")
      .onSnapshot(querySnapshot => {
        var categories = [];
        querySnapshot.forEach(doc => {
          categories.push(doc.data().name);
        });
        console.log("categories: ", categories.join(", "));
      });

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