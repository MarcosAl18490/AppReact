import React, {useState} from "react";
import Boton from "../Boton/Boton";
import { collection, addDoc,} from "firebase/firestore";
import firestoreDB from "../../services/Firebase";
import "./UserForm.css";

import {useNavigate} from "react-router-dom";


function UserForm ({cart}){
    const [userData, setUserData] = useState({
        name: "",
        email:"",  
        telefono:"",
    });

    let navegacion = useNavigate();
    const [orderId, setOrderId] = useState(false);


    let total = 0;
    cart.forEach(item=> total += item.precio * item.quantity);

    const ordenDeCompra = {
        buyer:{...userData},
        item:[...cart],
        total:total,
        date: new Date(),
    }

    async function handleSubmit(evt){
        evt.preventDefault();
        
        const collectionRef = collection(firestoreDB, "ordenes");
        const docRef = await addDoc(collectionRef, ordenDeCompra);
        setOrderId(docRef.id);
        navegacion ("/gracias");
        console.log("Tu ID de compra es " + docRef.id);
    }

    function inputChangeHandler(evt){
        const input = evt.target;
        const value = input.value;
        const inputName = input.name;

        let copyUserData = {...userData};   

        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }

    function handleReset(evt) {
        setUserData({
          name: "",
          email: "",
          telefono: "",
        });
      }
    

      if (orderId){
        return(
            <div>
                <h1>Gracias por tu compra</h1>
                <p>Tu ID de seguimiento es: {orderId}</p>
            </div>
        );
        
      }

    return (
        <div className="form-container">
          <form onReset={handleReset} onSubmit={handleSubmit}>
            <div className="form-item">
              <label htmlFor="name">Nombre</label>
              <input
                value={userData.name}
                onChange={inputChangeHandler}
                name="name"
                type="text"
                placeholder="Nombre"
                required
              />
            </div>
    
            <div className="form-item">
              <label htmlFor="telefono">Telefono</label>
              <input
                value={userData.telefono}
                onChange={inputChangeHandler}
                name="telefono"
                type="text"
                placeholder="Telefono"
                required
              />
            </div>
    
            <div className="form-item">
              <label htmlFor="email">Email</label>
              <input
                value={userData.email}
                onChange={inputChangeHandler}
                name="email"
                type="text"
                placeholder="Correo"
                required
              />
            </div>
    
            <div>
              <Boton type="submit" onTouch={handleSubmit}>
                Finalizar Compra
              </Boton>
              <Boton type="reset">Borrar</Boton>
            </div>
          </form>
        </div>
      );
    
    };


export default UserForm;