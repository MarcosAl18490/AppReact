import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Card from './componentes/Item/Item';
import Boton from './componentes/Boton/Boton';
import BotonChildren from './componentes/Boton/BotonChildren';
// import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';


function App() {

  let userColor = "green";
  const styles = {marginTop:"20px", color: userColor};

 
  return (
    <div>
      <h1 className="titulo">Resort "Altos de Simic"</h1>
      <NavBar/>
      <ItemCount initial={1} stock={5} />
      {/* <ItemListContainer/> */}
      <br />
        <p style={styles}>El mejor lugar para sus vacaciones</p>
        
        <Boton text="Apretar aqui"/>
        <BotonChildren type="alert">
          Borrar reserva
        </BotonChildren>  

    </div>
  );

  }
export default App;
