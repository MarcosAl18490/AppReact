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
      <Item 
            id={data.id} 
            nombre={data.nombre} 
            precio={data.precio} 
            capacidad={data.capacidad} 
            imagen={data.imagen} 
            descripcion={data.descripcion}
      />
    </div>
  ) 
}

