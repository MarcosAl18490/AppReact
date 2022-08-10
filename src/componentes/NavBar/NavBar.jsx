import Widget from "../CardWidget/CardWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        
        <div>
            <Link to="/">Principal</Link>
            <br />
            <Link to="/Habitaciones">Habitaciones</Link>
            <br />
            <Link to="/Detalle">Detalle</Link>
            <br />
            <Link to="/Contacto">Contacto</Link>
            <br />
            <Widget/>
        </div>
    );
}

export default NavBar;

{/* <ul className="Menu"> 
            <Link to="/"><li>Principal</li></Link>
            <Link to="/"><li>Habitaciones</li></Link>
            <Link to="/Detalle"><li>Detalle</li></Link>
            <Link to="/"><li>Contacto</li></Link>
            <Widget/>
        </ul> */}