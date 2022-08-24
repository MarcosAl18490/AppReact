import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCQuFCEFg-DPkDjlpTUAjoodGDk8eZ7kSQ",
  authDomain: "react-f5e39.firebaseapp.com",
  projectId: "react-f5e39",
  storageBucket: "react-f5e39.appspot.com",
  messagingSenderId: "91858096995",
  appId: "1:91858096995:web:68bd729aff3712582eb956"
};


const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;