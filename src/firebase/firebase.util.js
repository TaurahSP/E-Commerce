import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA99zW4wEJg8wY6sUTiyn0wrsM7zAqnnM8",
  authDomain: "react-commerce-932a7.firebaseapp.com",
  databaseURL: "https://react-commerce-932a7.firebaseio.com",
  projectId: "react-commerce-932a7",
  storageBucket: "react-commerce-932a7.appspot.com",
  messagingSenderId: "885928021981",
  appId: "1:885928021981:web:043a9745d007c26a227034",
  measurementId: "G-5FYDST2Y1C"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
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
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promp: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
