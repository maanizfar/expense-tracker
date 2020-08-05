import firebase from "firebase/app";
import "firebase/messaging";

var config = {
  apiKey: "AIzaSyCJYjwSAy4cvabvSP5q1Qvyzf-UT25wKzA",
  authDomain: "expense-tracker-7a.firebaseapp.com",
  // databaseURL: "https://expense-tracker-7a.firebaseio.com",
  projectId: "expense-tracker-7a",
  // storageBucket: "expense-tracker-7a.appspot.com",
  messagingSenderId: "567496193405",
  appId: "1:567496193405:web:f6cc1bdf99a8d452ff0814",
  measurementId: "G-XMZC0DYBH7",
};

if (firebase.messaging.isSupported()) {
  // Initialize Firebase
  firebase.initializeApp(config);
}

export default firebase;
