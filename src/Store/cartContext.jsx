// import React, { useContext, useState} from "react";

// const cartContext = React.createContext();

// export const useCartContext = () => useContext(cartContext);

// export function CartProvider  ({children})  {
//     const [cart, setCart] = useState([]);

 // const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false;
    


 // function addToCart (item,quantity)  {
    //     if(isInCart(item.id)){
    //         setCart(cart.map(producto => {
    //             return producto.id = item.id ? {...producto, quantity : producto.quantity + quantity} : producto
    //         }));
    //     } else {
    //         setCart([...cart, {...item,quantity}]);
    //     }
    // }

    

//     return (
//         <cartContext.Provider value={{
//             clearCart,
//             isInCart,
//             removeProduct,
//             addToCart,
//             totalPrice,
//             totalProductos,
//         }}>
//             {children}
//         </cartContext.Provider>
//     )
// }



import { createContext, useState} from "react";


export const cartContext = createContext();

export function CartProvider  ({children})  {
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const removeProduct = (id) => setCart(cart.filter(producto => producto.id !==id));

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
        <cartContext.Provider value={{cart, addToCart, clearCart, removeProduct, totalPrice, totalProductos}}>
            {children}
        </cartContext.Provider>
    )
}


