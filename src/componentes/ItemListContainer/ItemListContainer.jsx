import React, {useEffect, useState} from "react";
import ItemList from "../ItemListContainer/ItemList.js";
import Item from "../Item/Item.jsx";
import { useParams } from "react-router-dom";


function getProductos(){
  return new Promise((resolve) => {
    setTimeout(() => resolve(ItemList),1500)
  })
};

export default function ItemListContainer(){

  const [data, setData] = useState([]); 

  const idCategoria = useParams().idCategoria

    useEffect(() => {
         getProductos()
         .then((respuesta) => {

          if(idCategoria === undefined) setData(respuesta)

         respuesta.filter(elemento => elemento.categoria === idCategoria )
         setData(respuesta);
        });
      }, []);

  return(
    <div>
      <h1>Habitaciones</h1>
        {
          data.map((tipoHabitacion) => <Item 
                                      key={tipoHabitacion.id} 
                                      id={tipoHabitacion.id} 
                                      categoria={tipoHabitacion.categoria} 
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

