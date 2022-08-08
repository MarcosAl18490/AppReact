import Boton from "../Boton/Boton";
import "./Item.css"


function Item( {id , nombre, precio, capacidad, imagen, descripcion} ) {


    return(
        <div className="main">
            <div className="item">
                <div className="item-img">
                    <img src={imagen} alt="imagen de habitacion doble" />
                </div>
                <div className="item-info">
                    <h2>{id}</h2>
                    <h3>{nombre}</h3>
                    <p> {precio}  </p>
                    <p>{capacidad}</p>
                    <h3>{descripcion}</h3>
                    <Boton text={"ver mas"}></Boton>
                </div>
            </div>
        </div>
    )
}

export default Item;