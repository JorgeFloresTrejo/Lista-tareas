import React from "react";
import './visibilidad.css'
function Visibilidad({setMostrarCompletas, eliminarTarea, isChecked}){

    const eliminar = () => {
        if(window.confirm('¿Estas seguro de elimar la tarea?')){
            eliminarTarea()
        }

    };

   return(
    <div>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={e => setMostrarCompletas(e.target.checked)}
    />{" "}
    <label>Mostrar tareas terminadas</label>
    <button onClick={eliminar}>
        Limpiar
    </button>
  </div>
   )
}

export default Visibilidad