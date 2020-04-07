import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB9qQN4cR6LugyaPuq2oiHKEqd5nU9sAWU",
  authDomain: "shopper-db-619bb.firebaseapp.com",
  databaseURL: "https://shopper-db-619bb.firebaseio.com",
  projectId: "shopper-db-619bb",
  storageBucket: "shopper-db-619bb.appspot.com",
  messagingSenderId: "748564348072",
  appId: "1:748564348072:web:ca8855ea0c860b0d75169d",
  measurementId: "G-5XZHQE0PW7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
