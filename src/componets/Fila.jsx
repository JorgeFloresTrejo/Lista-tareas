import React from "react";

function Fila({tarea, actualizarEstado}){
    
    return(
       <tr>
          <td> {tarea.nombre} 
          <input type="checkbox" checked={tarea.hecho} onChange={() => actualizarEstado(tarea)}/></td>
        </tr>
    )
}

export default Fila