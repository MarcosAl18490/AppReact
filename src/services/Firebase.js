import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import ItemList from "../componentes/ItemListContainer/ItemList";

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

export async function saveProductsFirebase(){
        const collectionHabitaciones = collection(firestoreDB, "habitaciones")
        
        for(let item of ItemList){
          const docref = await addDoc(collectionHabitaciones, item);
          console.log("Documento creado con ID",docref.id)
        }
}

export default firestoreDB;