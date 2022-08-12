import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Boton from './componentes/Boton/Boton';
import BotonChildren from './componentes/Boton/BotonChildren';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  let userColor = "green";
  const styles = {marginTop:"20px", color: userColor};

 
  return (
    <div>
    <BrowserRouter>
          <h1 className="titulo">Resort "Altos de Simic"</h1>
          <NavBar/>
          <ItemCount initial={1} stock={5} />
          <p style={styles}>El mejor lugar para sus vacaciones</p>

      <Routes>
        
        <Route path='/' element={<ItemListContainer/>}/>
        
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>

        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

      </Routes>

        <Boton text="Apretar aqui"/>
        <BotonChildren type="alert">
            Borrar reserva
        </BotonChildren>

      </BrowserRouter>
    </div>
  );

  }
export default App;
