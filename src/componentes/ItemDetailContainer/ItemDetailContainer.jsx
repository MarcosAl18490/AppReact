import React, {useState, useEffect} from 'react'
import ItemList from '../ItemListContainer/ItemList'
import ItemDetail from './ItemDetail'

function getHabitacion(){
    return new Promise((resolve) => {
      setTimeout(() => resolve(ItemList[0]),2000)
    })
  };
  
export default function ItemDetailContainer() {


const [producto, setProducto] = useState([]); 

useEffect(() => {
     getHabitacion().then((respuesta) => {
     setProducto(respuesta);
    });
  }, []);

return(
<div>
  <h2>Habitacione seleccionada</h2>
  <ItemDetail
  id={producto.id} nombre={producto.nombre} precio={producto.precio} capacidad={producto.capacidad} imagen={producto.imagen} descripcion={producto.descripcion}
  />
    
</div>
) 
}

