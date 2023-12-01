import './App.css';
import Logo from './IMG/Logo ._..png';
import Tarea from './Componentes/Tarea';
import ListaDeTareas from './Componentes/ListaDeTareas';

function App() {
  return (
    <div className="Aplicacion-tareas">
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas  />
      </div>
    </div>
  );
}

export default App;
