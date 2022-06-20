import logo from './logo.svg';
import './App.scss';
import Eventos from './components/Eventos/Eventos';
import Estados from './components/Estados/Estados';
import Prueba from './components/Prueba/Prueba';

function App() {
  return (
    <div>
      <Eventos></Eventos>
      <Estados prop="valor de la prop"></Estados>
      <Prueba></Prueba>
    </div>
  );
}

export default App;
