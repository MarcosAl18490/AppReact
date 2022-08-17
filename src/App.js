import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './componentes/Cart/Cart';


function App() {

  let userColor = "green";
  const styles = {marginTop:"20px", color: userColor};

 
  return (
    <div>
    <BrowserRouter>
          <h1 className="titulo">Resort "Altos de Simic"</h1>
          <NavBar/>
          <p style={styles}>El mejor lugar para sus vacaciones</p>

      <Routes>
        
        <Route path='/' element={<ItemListContainer/>}/>
        
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>

        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

        <Route path='/cart/:idCart' element={<Cart/>}/>

      </Routes>


      </BrowserRouter>
    </div>
  );

  }
export default App;
