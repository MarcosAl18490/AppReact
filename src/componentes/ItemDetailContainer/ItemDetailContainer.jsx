import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from "react-router-dom"
import firestoreDB from '../../services/Firebase'
import {collection, doc, getDoc} from "firebase/firestore"


function getHabitacionById (id){
  return new Promise((resolve,reject) => {
    const habitacionesCollectionRef = collection(firestoreDB, "habitaciones");
    const docRef = doc(habitacionesCollectionRef,id);

      getDoc(docRef).then(snapshot => {
        resolve(
          {...snapshot.data(), id:snapshot.id}
        )
      });
  })
  }


export default function ItemDetailContainer({itemid}) {

const [producto, setProducto] = useState({}); 

const idURL = useParams().id;


useEffect(() => {
     getHabitacionById(idURL)
     .then((respuesta) => setProducto(respuesta))
     .catch((error) => alert(error));
  }, []);

return(
<div>
  <h2>Habitacion seleccionada</h2>
  <ItemDetail
  id={producto.id} categoria={producto.categoria} precio={producto.precio} capacidad={producto.capacidad} imagen={producto.imagen} descripcion={producto.descripcion}
  />
    
</div>
) 
}

