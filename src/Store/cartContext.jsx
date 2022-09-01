import { createContext, useState} from "react";


export const cartContext = createContext();

export function CartProvider  ({children})  {
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    
    function removeProducto(id) {
        let filter = cart.filter((item) => item.id !== id);
        setCart(filter);
      }

    

    const totalPrice = () => {
        return cart.reduce ((prev,act) => prev + act.quantity * act.precio,0);
    }

    // function addToCart(item, count){
        
        
    //     if(isInCart(item.id)){

    //     }else{
    //         let copyCart = [...cart];
    //         copyCart.push({...item, quantity: count})
    //         setCart(copyCart)
    //     }
    // }

    // function isInCart(id){
    //     return(cart.some(itemInCart => itemInCart.id === id))
    // }

    function addToCart(item, count) {
        if (cart.some((itemInCart) => itemInCart.id === item.id)) {
         
        } else {
          let copyCart = [...cart];
          copyCart.push({ ...item, quantity: count });
          setCart(copyCart);
        }
      }
    

   
    console.log("carrito", cart,);



    return (
        <cartContext.Provider value={{cart, addToCart, clearCart, removeProducto, totalPrice, }}>
            {children}
        </cartContext.Provider>
    )
}


