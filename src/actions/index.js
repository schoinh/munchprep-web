import constants from "./../constants";
const { firebaseConfig, c } = constants;
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBSoHxj5zny3Z-H6LgLjkz4cgezKKK_vUQ",
  authDomain: "munchprep.firebaseapp.com",
  projectId: "munchprep"
});
// firebase.analytics();

const db = firebase.firestore();

export function addItem(_name, _category) {
  return () => db.collection("categories").add({
    category: _category,
    name: _name
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