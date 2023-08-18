import React from "react";
import Fila from "./Fila";


function TablaTareas({ tareas, actualizarEstado, completadas = false }) {
  const tareasFiltradas = completadas
    ? tareas.filter(tarea => tarea.hecho)
    : tareas.filter(tarea => !tarea.hecho);

  return (
    <table>
      <thead>
        <tr>
          <th>Tarea</th>
        </tr>
      </thead>
      <tbody>
        {tareasFiltradas.map(tarea => (
          <Fila tarea={tarea} key={tarea.nombre} actualizarEstado={actualizarEstado} />
        ))}
      </tbody>
    </table>
  );
}


export default TablaTareas