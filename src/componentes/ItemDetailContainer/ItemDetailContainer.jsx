import React, {useState, useEffect} from 'react'
import ItemList from '../ItemListContainer/ItemList'
import ItemDetail from './ItemDetail'
import {useParams} from "react-router-dom"

export default function ItemDetailContainer({itemid}) {

const [producto, setProducto] = useState({}); 

const idURL = useParams().id;

function getHabitacion(){
  return new Promise((resolve,reject) => {
    let itemRequerido = ItemList.find (elemento => elemento.id == idURL );

    if(itemRequerido === undefined)
      reject("Item no encontrado")
    else
      resolve(itemRequerido)
  });
}

  
useEffect(() => {
     getHabitacion()
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

