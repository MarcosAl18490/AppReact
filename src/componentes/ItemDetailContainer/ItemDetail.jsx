
import "./ItemDetail.css"
import  { Link } from "react-router-dom"


function ItemDetail( {id , categoria, precio, capacidad, imagen, descripcion} ) {


    return(
        <div className="main">
            <div className="item">
                <div className="item-img">
                    <img src={imagen} alt="imagen de habitacion doble" />
                </div>
                <div className="item-info">
                    <h2>{id}</h2>
                    <h3>{categoria}</h3>
                    <p> {precio}  </p>
                    <p>{capacidad}</p>
                    <h3>{descripcion}</h3>
                    <Link to={`/detalle/${id}`}>Ver mas</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;