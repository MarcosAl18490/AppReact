import React, {useState} from "react";
import  { Link } from "react-router-dom"

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

    
    return(
        <>
        <h1>Item Counter</h1>
        <button onClick={handleIncrementar}>Agregar</button>
        <button onClick={handleRestar}>Quitar</button>
        <Link to="/Cart"><button onClick={()=> props.onAdd(count)}>Finalizar reservar</button></Link>
        <h5>Cantidad de huespedes: {count}</h5>
        
        </>
    )
}

export default ItemCount;

 
