import React, {useState} from "react";


function ItemCount(props){

    
    const [count, setCount] = useState(props.initial);

    function handleIncrementar (){
        if(count<props.capacidad){
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
        
        <button onClick={handleIncrementar}>Agregar</button>
        <button onClick={handleRestar}>Quitar</button>
        <button onClick={()=> props.onAdd(count)}>Finalizar reservar</button>
        <h5>¿Cuantos dias desea alquilar? {count}</h5>
        
        </>
    )
}

export default ItemCount;

 
