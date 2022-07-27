import './App.css';
import NavBar from './componentes/NavBar';

function App() {

  let userColor = "green";
  const styles = {marginTop:"20px", color: userColor};
  
  return (
    <div>
      <h1 className="titulo">Resort "Altos de Simic"</h1>
      <NavBar/>
        <p style={styles}>El mejor lugar para sus vacaciones</p>
        <button onClick={ ()=> alert("Su reserva fue realizada")}>Reserve</button>
    </div>
  );

  }
export default App;
