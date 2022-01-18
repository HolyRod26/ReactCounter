import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

/* 
  Props para cambiar el color de los botones
  State para cambiar el numero del contador
  Al darle click a BtnIncrease debe aumentar el contador por 1
  Al darle click a BtnDecrease debe disminuir el contador por 1
*/

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
