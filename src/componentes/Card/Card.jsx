import Boton from "../Boton/Boton";
import "./Card.css"

function Card( props ) {

console.log(props.info)

    return(
        <div className="main">
            <div className="card">
                <div className="card-img">
                    <img src={props.info.imagen} alt="imagen de habitacion doble" />
                </div>
                <div className="card-info">
                    <h2>{props.info.nombre}</h2>
                    <p> {props.info.precio}  </p>
                    <h3>{props.info.descripcion}</h3>
                    <Boton text={"ver mas"}></Boton>
                </div>
            </div>
        </div>
    )
}

export default Card;