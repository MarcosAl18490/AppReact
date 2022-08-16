import React, {useState} from "react";

function ItemCount(props){

    
    const [count, setCount] = useState(props.initial);

    function handleIncrementar (){
        if(count<props.stock){
           setCount(count+1) 
        }else{
            alert("Supero el número de huespedes permitidos")
        } 
    }


    function handleRestar () {
        if (count>props.initial){
          setCount(count-1)  
        } else{
            alert("No puede haber menos de un huesped")
        }
        
    }

    const handleCLick = () => {
        props.onAdd(count)
    }

    return(
        <>
        <h1>Item Counter</h1>
        <button onClick={handleIncrementar}>Agregar</button>
        <button onClick={handleRestar}>Quitar</button>
        <button onClick={handleCLick}>Finalizar reservar</button>
        <h3>Cantidad: {count}</h3>
        
        </>
    )
}

export default ItemCount;

 
// const [count, setCount] = useState(props.initial);

// function Incrementar (){
//     if(count<props.stock){
//       setCount(count+1)  
//     } else{
//         alert("Superó el numero de huespedes permitidos")
//     }
// }

// function Restar (){
//     if(count>props.initial){
//       setCount(count-1)  
//     } else{
//         alert("No puede haber menos de un huesped")
//     }
// }


// return(
//     <>
//     <h1>Item Counter</h1>
//     <button onClick={Incrementar}>Agregar</button>
//     <button onClick={Restar}>Quitar</button>
//     <h3>Huespedes: {count}</h3>
//     </>
// )

