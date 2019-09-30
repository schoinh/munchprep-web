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

// export function watchFirebaseTicketsRef() {
//   return function (dispatch) {
//     tickets.on('child_added', data => {
//       const newTicket = Object.assign({}, data.val(), {
//         id: data.getKey(),
//         formattedWaitTime: new Moment(data.val().timeOpen).from(new Moment())
//       });
//       dispatch(receiveTicket(newTicket));
//     });
//   };
// }

// function receiveTicket(ticketFromFirebase) {
//   return {
//     type: c.RECEIVE_TICKET,
//     ticket: ticketFromFirebase
//   };
// }