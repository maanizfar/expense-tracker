importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCJYjwSAy4cvabvSP5q1Qvyzf-UT25wKzA",
  authDomain: "expense-tracker-7a.firebaseapp.com",
  databaseURL: "https://expense-tracker-7a.firebaseio.com",
  projectId: "expense-tracker-7a",
  storageBucket: "expense-tracker-7a.appspot.com",
  messagingSenderId: "567496193405",
  appId: "1:567496193405:web:f6cc1bdf99a8d452ff0814",
  measurementId: "G-XMZC0DYBH7",
});

firebase.messaging();
