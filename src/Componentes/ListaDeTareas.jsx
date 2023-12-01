import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../Hojas de estilo/ListaDeTareas.css';
import Tarea from "./Tarea";

function ListaDeTareas(){

const [Tareas, setTareas] = useState([]);

const agregarTarea = tarea => {
  if(tarea.texto.trim()){
    tarea.texto = tarea.texto.trim();
    const tareasActualizadas = [tarea, ...Tareas];
    setTareas(tareasActualizadas);
  }
}

const eliminarTarea = id => {
  const tareasActualizadas = Tareas.filter(tarea => tarea.id !== id);
  setTareas(tareasActualizadas);
}

const completarTarea = id => {
  const tareasActualizadas = Tareas.map(tarea => {
    if (tarea.id == id){
      tarea.completada = !tarea.completada;
    }
    return tarea;
  });
  setTareas(tareasActualizadas);
}

    return(
        <>
          <TareaFormulario onSubmit = {agregarTarea} />
          <div className="tarea-lista-contenedor">
            {
              Tareas.map((tarea) =>
                <Tarea
                  key = {tarea.id}
                  id = {tarea.id} 
                  texto = {tarea.texto}
                  completada ={tarea.completada}
                  completarTarea={completarTarea}
                  eliminarTarea={eliminarTarea}
                />
              )
            }
          </div>
        </>
    );
}
export default ListaDeTareas;