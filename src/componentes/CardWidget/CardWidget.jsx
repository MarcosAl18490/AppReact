import "./CardWidget.css"
import {Link} from "react-router-dom";

function Widget() {
    return (
      <Link to="/Cart"><img className="carrito" src="imagenes/carrito.png" alt="Carrito" /></Link>
    )
  }
  
  export default Widget