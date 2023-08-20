import { useState} from 'react'
import React from "react";
import './formulario.css'

function Formulario({crearNuevaTarea}){
    const [nuevaTarea, setNuevaTarea] = useState('');

    function handleSubmit(e){
      e.preventDefault();
      crearNuevaTarea(nuevaTarea);
      setNuevaTarea('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Ingrese una nueva tarea' value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} />
            <button>Guardar</button>
        </form>
    )
}

export default Formulario