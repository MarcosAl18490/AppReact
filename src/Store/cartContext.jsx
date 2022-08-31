import { createContext, useState} from "react";


export const cartContext = createContext();

export function CartProvider  ({children})  {
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    
    function removeProducto(id) {
        let filter = cart.filter((item) => item.id !== id);
        setCart(filter);
      }

    const totalProductos = () => cart.reduce((acumulador,productoActual) => acumulador + productoActual.quantity,0);

    const totalPrice = () => {
        return cart.reduce ((prev,act) => prev + act.quantity * act.precio,0);
    }

    function addToCart(item, count){
        console.log("ok");
        
        if(isInCart(item.id)){

        }else{
            let copyCart = [...cart];
            copyCart.push({...item, quantity: count})
            setCart(copyCart)
        }
    }

    function isInCart(id){
        return(cart.some(itemInCart => itemInCart.id === id))
    }


   
    console.log("carrito", cart,);



    return (
        <cartContext.Provider value={{cart, addToCart, clearCart, removeProducto, totalPrice, totalProductos}}>
            {children}
        </cartContext.Provider>
    )
}


