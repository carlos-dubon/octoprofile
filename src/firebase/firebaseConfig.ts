import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";

const app: FirebaseApp = initializeApp({
  apiKey: "AIzaSyCzYWPRxZOXq4PKuIbiak8O88dWBbPldhM",
  authDomain: "octoprofile-api.firebaseapp.com",
  projectId: "octoprofile-api",
  storageBucket: "octoprofile-api.appspot.com",
  messagingSenderId: "921066872999",
  appId: "1:921066872999:web:64624c3271e9d800c6bb82",
});

const db: Firestore = getFirestore(app);

const auth: Auth = getAuth(app);

export { db, auth };
