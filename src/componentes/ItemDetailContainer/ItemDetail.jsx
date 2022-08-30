
import "./ItemDetail.css"
import  { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount";
import {  useContext, useState } from "react";
import { cartContext } from "../../Store/cartContext";


function ItemDetail( {id , categoria, precio, capacidad, imagen, descripcion,quantity} ) {
    const {addToCart} = useContext(cartContext);
    const [quantityInCart, setQuantityInCart] = useState (0);
    
    
   
 
    function handleAdd(quantity){
        setQuantityInCart(quantity);
        const itemToCart = {id, categoria, precio, capacidad, imagen, descripcion,quantity};
        addToCart(itemToCart,quantity);
    }


    return(
        <div className="main">
            <div className="item">
                <div className="item-img">
                    <img src={imagen} alt="imagen de habitacion doble" />
                </div>
                <div className="item-info">
                    <h2>{id}</h2>
                    <h3>{categoria}</h3>
                    <p> Precio por dia:  {precio}  </p>
                    <p>Capacidad Maxima: {capacidad}</p>
                    <h3>{descripcion}</h3>
                    <Link to="/">Volver al inicio</Link>
                </div>

                 {quantityInCart === 0?
                <ItemCount 
                    initial={1} 
                    capacidad={capacidad} 
                    onAdd={handleAdd}
                     /> 
                     : <Link to="/cart">Ir al carrito</Link>
                     }
                

            </div>
        </div>
    )
} 

export default ItemDetail;