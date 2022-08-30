import Widget from "../CardWidget/CardWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        
        <div>
            <ul>
            <Link to="/">Principal</Link>
            <br />
            <Link to="/Contacto">Contacto</Link>
            <br />
            <Link to="/Categoria/standar">Standar</Link>
            <br />
            <Link to="/Categoria/premium">Premium</Link>
            <br />
            <Link to="/Categoria/super">Super</Link>
            <br />
            
            <Widget/>
            </ul>
        </div>
    );
}

export default NavBar;

