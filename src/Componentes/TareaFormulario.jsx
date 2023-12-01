import React, { useState } from "react";
import '../Hojas de estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props){

  const [input, setInput] = useState('');

  const manejarCambio = e =>{
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const manejarEnvio = e =>{
    e.preventDefault();

    const tareanueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    
    props.onSubmit(tareanueva);

  }
  
    return(
        <form onSubmit={manejarEnvio} className="tarea-formulario">
          <input onChange={manejarCambio} type="text" placeholder="Escribe una Tarea" name="texto" className="tarea-input" />          
          <button className="tarea-boton">
            Agregar Tarea
          </button>
        </form>
    );
}
export default TareaFormulario;