import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartView from './componentes/CartView/CartView';
import  {CartProvider}  from './Store/cartContext';
// import {saveProductsFirebase} from  "./services/Firebase.js";



function App() {

  let userColor = "green";
  const styles = {marginTop:"20px", color: userColor};
  

 
  return (
    <div>
  <BrowserRouter>
      {/* <button onClick={saveProductsFirebase}>Enviar Datos</button> */}
      <CartProvider>
          <h1 className="titulo">Resort "Altos de Simic"</h1>
          <p style={styles}>El mejor lugar para sus vacaciones</p>
          <NavBar/>
          
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>

        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

        <Route path='/Cart/' element={<CartView/>}/>

        <Route path="/gracias" element={<h1>Gracias por su compra</h1>}/>

      </Routes>

    </CartProvider>
  </BrowserRouter>
    </div>
  );

  }
export default App;
