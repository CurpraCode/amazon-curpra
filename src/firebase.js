import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLTQRC-ayqBBX98bFfaTc0xhGnR-yc7s4",
  authDomain: "clone-curpra.firebaseapp.com",
  databaseURL: "https://clone-curpra.firebaseio.com",
  projectId: "clone-curpra",
  storageBucket: "clone-curpra.appspot.com",
  messagingSenderId: "723598495851",
  appId: "1:723598495851:web:448702f7ce5af663ff212e",
  measurementId: "G-K2S8TTCGTW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
