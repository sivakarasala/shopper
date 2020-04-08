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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
