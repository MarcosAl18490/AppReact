import { useContext } from "react";
import { cartContext } from "../../Store/cartContext";
import CartItem from "./CartItem";
import "./CartView.css";

function CartView(){
    const {cart, clearCart} = useContext(cartContext);

    return (
        <>
        <div className="main container mx-auto mt-5">
            <h1>Tu carrito</h1>
            <table>
                <thead>
                    <tr>
                        <th>Miniatura</th>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
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
                                img={item.img}
                                quantity={item.quantity}
                                removeItem={() => clearCart(item.id)}
                                />
                        );
                    })}
                </tbody>
            </table>
        </div>
        <div></div>

        </>
    );
}

export default CartView;