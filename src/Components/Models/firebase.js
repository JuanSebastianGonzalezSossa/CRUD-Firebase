import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDIW7VmIKloC8GwybGue6Cq8OeOznXn5sw",
  authDomain: "colegio-cambridge-c73c9.firebaseapp.com",
  databaseURL: "https://colegio-cambridge-c73c9-default-rtdb.firebaseio.com",
  projectId: "colegio-cambridge-c73c9",
  storageBucket: "colegio-cambridge-c73c9.appspot.com",
  messagingSenderId: "263261046555",
  appId: "1:263261046555:web:74638e7a1bbbbd436af5be"
};
// Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();