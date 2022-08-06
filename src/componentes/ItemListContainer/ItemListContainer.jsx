import React, {useEffect, useState } from "react";
import ItemList from '././Itemlist/ItemList.js';
 
function getProductos(){
  return new Promise ((resolve) => {
    setTimeout(() => resolve (ItemList), 3000);
  })
};

export default function ItemListContainer([]) {
 
 
  const[data, setData] = useState();

  useEffect(() => {
    getProductos().then((respuesta)=> {
      setData(respuesta);
    }); 
  }, [])

  return (
    <div> 
      <h1>Item List</h1>
      <p>{data.nombre}</p>
      <p>{data.capacidad}</p>
    </div>
  );
}


