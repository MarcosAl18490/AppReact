
import "./ItemDetail.css"
import  { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount";
import {  useContext, useState } from "react";
import { cartContext } from "../../Store/cartContext";


function ItemDetail( {id , categoria, precio, capacidad, imagen, descripcion,} ) {
    const {addToCart} = useContext(cartContext);
    const [quantityInCart, setQuantityInCart] = useState (0);
    
    
   
 
    function handleAdd(quantity){
        setQuantityInCart(quantity);
        const itemToCart = {id, categoria, precio, capacidad, imagen, descripcion,};
        addToCart(itemToCart,quantity);
    }


    return(
        <div className="main">
            <div className="item">
                <div className="item-img">
                    <img src={imagen} alt="imagen de habitacion doble" />
                </div>
                <div className="item-info">
                    
                    <h3>Categoria: {categoria}</h3>
                    <h3> Precio por dia:  {precio}  </h3>
                    <p>Caracteristicas: {descripcion}</p>
                    <h5>Dias maximos disponibles: {capacidad}</h5>
                    
                </div>

                 {quantityInCart === 0?
                <ItemCount 
                    initial={1} 
                    capacidad={capacidad} 
                    onAdd={handleAdd}
                     /> 
                     : <Link to="/cart">Ir al carrito</Link>
                     }
                     <br />
                <Link to="/">Volver al inicio</Link>

            </div>
        </div>
    )
} 

export default ItemDetail;