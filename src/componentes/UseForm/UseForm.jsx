import React, {useState} from "react";
import Boton from "../Boton/Boton";
import {getDocs, collection, addDoc, query} from "firebase/firestore";
import firestoreDB from "../../services/Firebase";
import {cartContext} from "../../services/Firebase";
import ItemDetail from "../ItemDetailContainer/ItemDetail";


function UserForm ({cart}){
    const [userData, setUserData] = useState({
        name: "",
        email:"",
        telefono:"",
    });

    let total = 0;
    cart.forEach(item=> total += item.precio * item.quantity);

    const ordenDeCompra = {
        buyer:{...userData},
        item:[...cart],
        total:total,
    }

    function handleSubmit(evt){
        evt.preventDefault();
        console.log(userData);
    }

}