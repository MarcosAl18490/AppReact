
import "./ItemDetail.css"
import  { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../Store/cartContext";


function ItemDetail( {id , categoria, precio, capacidad, imagen, descripcion, stock} ) {
    const {addToCart} = useContext(cartContext);
    const [cantWidget, setCantWidget] = useState(0);
    
   

    function handleAdd(quantity){
        setCantWidget(quantity)
        const itemToCart = {id, categoria, precio, capacidad, imagen, descripcion, stock};
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
                    <p>{capacidad}</p>
                    <h3>{descripcion}</h3>
                    <Link to="/">Volver al inicio</Link>
                </div>

                 {cantWidget === 0?
                <ItemCount 
                    initial={1} 
                    stock={6} 
                    onAdd={handleAdd}
                     /> 
                     : <a href="/cart">Ir al carrito</a>
                     }
                

            </div>
        </div>
    )
} 

export default ItemDetail;