import { useContext } from "react";
import { cartContext } from "../../Store/cartContext";
import CartItem from "./CartItem";
import "./CartView.css";
import {Link} from "react-router-dom";

function CartView(){
    const {cart, removeProducto} = useContext(cartContext);

   return (
    cart.length === 0 ? <div><h1>No hay elementos</h1> <Link to="/">Ver habitaciones</Link></div> :
        <>
        <div className="main container mx-auto mt-5">
            <h1>Tu carrito</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>Miniatura</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Dias reservados</th>
                        <th>Remover</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return (
                            
                            <CartItem
                                key={item.id}
                                categoria={item.categoria}
                                precio={item.precio}
                                total={item.precio * item.quantity}
                                imagen={item.imagen}
                                quantity={item.quantity}
                                removeItem={() => removeProducto(item.id)}
                                
                                />
                                
                        );
                    })}
                    
                </tbody>
            </table>
        </div>
        </>
            
     )
    
   };

export default CartView;
