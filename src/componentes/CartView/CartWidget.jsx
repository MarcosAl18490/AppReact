import react from "react";
import { useCartContext } from "../../Store/cartContext";
import {Link} from "react-router-dom";
import ItemCart from "./ItemCartView";
import Item from "../Item/Item";


const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.lenght===0){
        return(
            <>
            <p>No hay elementos en el carrito</p>
            <Link to="/">Buscar alquiler</Link>
            </>
        );
        }
        return (
            <div>
                {
                    cart.map (producto => <ItemCart key={producto.id} producto={producto}/>)
                }
            </div>
        )
    }

    export default Cart;