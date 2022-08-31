import React, {useEffect, useState} from "react";
import Item from "../Item/Item.jsx";
import { useParams } from "react-router-dom";
import firestoreDB from "../../services/Firebase.js";
import {getDocs, collection, query, where} from "firebase/firestore";


function getItemsFromDB(){
  return new Promise((resolve) => {
    const habitacionesCollection = collection (firestoreDB, "habitaciones");

    getDocs (habitacionesCollection).then (snapshot => {
      const docsData = snapshot.docs.map (doc =>{
        return {...doc.data(), id: doc.id}

      });
      resolve(docsData);
    });

  })
};

function getItemsFromDBbycategoria(categoriaParam){
  return new Promise((resolve) => {
    const habitacionesCollectionRef = collection (firestoreDB, "habitaciones");

    const q = query(habitacionesCollectionRef, where("categoria", "==", categoriaParam))

    getDocs (q).then (snapshot => { 
      const docsData = snapshot.docs.map (doc =>{
        return {...doc.data(), id: doc.id}

      });
      resolve(docsData);  
    });

  })
};

export default function ItemListContainer(){

  const [data, setData] = useState([]); 

  const idCategoria = useParams().idCategoria;
  const categoriaFromParams = undefined;

    useEffect(() => {

        if (categoriaFromParams===undefined)
         getItemsFromDB()
         .then((respuesta) => {

          if(idCategoria === undefined) setData(respuesta)

         respuesta.filter(elemento => elemento.categoria === idCategoria )
         setData(respuesta);
        });
        else{
          getItemsFromDBbycategoria(categoriaFromParams).then((response) => {
          setData(response);
          })
        }
      }, []);

  return(
    <div>
      <h1>Habitaciones</h1>
        {
          data.map((tipoHabitacion) => <Item 
                                      key={tipoHabitacion.id} 
                                      id={tipoHabitacion.id} 
                                      categoria={"Categoria: " + tipoHabitacion.categoria} 
                                      precio={"Valor por dia: " + tipoHabitacion.precio} 
                                      capacidad={"Dias maximos disponibles: " + tipoHabitacion.capacidad}
                                      imagen={tipoHabitacion.imagen} 
                                    
                                      />
          )
        }
    </div>
  ) 
}

