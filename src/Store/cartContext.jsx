import { createContext, useState} from "react";

export const cartContext = createContext();

export function CartProvider  ({children})  {
    const [cart, setCart] = useState([]);

    function addToCart(item, count){
        if(isInCart(item.id)){

        }
        else{
            let copyCart= [...cart];
            copyCart.push({...item, quantity: count});
            setCart(copyCart);
    }
        }
        

        function isInCart(id){
            return (cart.some(itemInCart=>itemInCart.id===id))
        }


    return (
        <cartContext.Provider value={{cart, addToCart}}>
            {children}
        </cartContext.Provider>
    )

}