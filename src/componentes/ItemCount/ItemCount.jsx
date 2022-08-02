import React from "react";

function ItemCount(props){

    console.log( props.stock, props.initial );
    const [clicks, setClicks] = React.useState(1);

    function Incrementar (){
        if(clicks<props.stock){
          setClicks(clicks+1)  
        } else{
            alert("Superó el numero de huespedes permitidos")
        }
    }

    function Restar (){
        if(clicks>props.initial){
          setClicks(clicks-1)  
        } else{
            alert("No puede haber menos de un huesped")
        }
    }


    return(
        <>
        <h1>Item Counter</h1>
        <button onClick={Incrementar}>Agregar</button>
        <button onClick={Restar}>Quitar</button>
        <h3>Huespedes: {clicks}</h3>
        </>
    )
}

export default ItemCount;