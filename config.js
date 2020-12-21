import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDVSozVEThKwh1bMkm2h_TelwMVM2iOm3g",
  authDomain: "bartersystem-c8ca9.firebaseapp.com",
  databaseURL: "https://bartersystem-c8ca9.firebaseio.com",
  projectId: "bartersystem-c8ca9",
  storageBucket: "bartersystem-c8ca9.appspot.com",
  messagingSenderId: "713896044668",
  appId: "1:713896044668:web:1eb86b3a85c02b882781f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
