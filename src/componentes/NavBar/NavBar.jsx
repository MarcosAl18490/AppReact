import Widget from "../CardWidget/CardWidget";
import "./NavBar.css";

function NavBar(){
    return(
        
        <ul className="Menu"> 
            <a href="http://"><li>Principal</li></a>
            <a href="http://"><li>Habitaciones</li></a>
            <a href="http://"><li>Servicios</li></a>
            <a href="http://"><li>Contacto</li></a>
            <Widget/>
        </ul>
    )
}

export default NavBar;