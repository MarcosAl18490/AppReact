import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Card from './componentes/Card/Card';
import Boton from './componentes/Boton/Boton';
import BotonChildren from './componentes/Boton/BotonChildren';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';

function App() {

  let userColor = "green";
  const styles = {marginTop:"20px", color: userColor};

  // Creo un array de objetos para luego llamarlos en la funcion Card, segun el orden que ocupen en el mismo, mediante las propiedades.

  const infoHabitacion = [
    {
    nombre: "Standar",
    precio : 14000,
    imagen : "https://picsum.photos/300/200",
    descripcion : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum corrupti itaque sit dignissimos, ducimus dolor usdam facere aut sed! Vel officia voluptates laudantium odio odit",
},
    {
    nombre: "Premium",
    precio : 20000,
    imagen : "https://picsum.photos/300/200",
    descripcion : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum corrupti itaque sit dignissimos, ducimus   dolor usdam facere aut sed! Vel officia voluptates laudantium odio odit",
}

]
  return (
    <div>
      <h1 className="titulo">Resort "Altos de Simic"</h1>
      <NavBar/>
      <ItemCount initial={1} stock={5} />
      <ItemListContainer text="Habitaciones" />
      <Card info={infoHabitacion[0]}/>
      <Card info={infoHabitacion[1]}/>
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
