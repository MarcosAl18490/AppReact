
import "./ItemDetail.css"
import  { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount";
import {  useState } from "react";
import { useCartContext } from "../../Store/cartContext";


function ItemDetail( {id , categoria, precio, capacidad, imagen, descripcion,} ) {
    
    const [cantWidget, setCantWidget] = useState(0);
    const {addToCart} = useCartContext();
    
   

    function handleAdd(quantity){
        setCantWidget(quantity)
        const itemToCart = {id, categoria, precio, capacidad, imagen, descripcion, quantity};
        addToCart(itemToCart, quantity);
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
                    <p> {precio}  </p>
                    <p>"Capacidad Maxima: "{capacidad}</p>
                    <h3>{descripcion}</h3>
                    <Link to="/">Volver al inicio</Link>
                </div>

                 {cantWidget === 0?
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