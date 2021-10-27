import firebase from "firebase"
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyAJhZS9AoOHaZdbNA9B1K5JdyPG5IjdXgg",
  authDomain: "senai-ps.firebaseapp.com",
  projectId: "senai-ps",
  storageBucket: "senai-ps.appspot.com",
  messagingSenderId: "24055399137",
  appId: "1:24055399137:web:0e67e798d9befb19972da0",
  measurementId: "G-08C6VTF60V"
};



firebase.initializeApp(firebaseConfig);

export default firebase      