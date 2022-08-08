import React, {useEffect, useState} from "react";
import ItemList from "../ItemListContainer/ItemList.js";
import Item from "../Item/Item.jsx";


function getProductos(){
  return new Promise((resolve) => {
    setTimeout(() => resolve(ItemList),2000)
  })
};

export default function ItemListContainer(){

  const [data, setData] = useState([]); 

    useEffect(() => {
         getProductos().then((respuesta) => {
         setData(respuesta);
        });
      }, []);

  return(
    <div>
      <h1>Habitaciones</h1>
        {
          data.map((tipoHabitacion) => <Item 
                                      key={tipoHabitacion.id} 
                                      nombre={tipoHabitacion.nombre} 
                                      precio={tipoHabitacion.precio} 
                                      capacidad={tipoHabitacion.capacidad} 
                                      imagen={tipoHabitacion.imagen} 
                                      descripcion={tipoHabitacion.descripcion}
                                      />
          )
        }
    </div>
  ) 
}

