import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import Formulario from './componets/Formulario'
import TablaTareas from './componets/tablaTareas';
import Visibilidad from './componets/Visibilidad';

function App() {

  const[itemTarea, setItemTarea] = useState([]);
  const[mostrarCompletas, setMostrarCompletas] = useState(false);


  // Funcion para crear la tarea
  function crearTarea(nombreTarea){
   if(!itemTarea.find(tarea => tarea.nombre === nombreTarea)){
    setItemTarea([...itemTarea, {nombre: nombreTarea, hecho: false}])
   }
  }

  // Función para cambiar el estado de la tarea
  function actualizarEstado(tarea){
     setItemTarea( 
     itemTarea.map(task => (task.nombre === tarea.nombre) ? {...task, hecho: !task.hecho} : task)
     );
     
  }
  function eliminarTarea(){
    setItemTarea(itemTarea.filter(tarea => !tarea.hecho))
    setMostrarCompletas(false)
  }

  useEffect(() => {
   let datos = localStorage.getItem('tarea');
   if(datos){
    setItemTarea(JSON.parse(datos))
   }
  },[])

  useEffect(() => {
     localStorage.setItem('tarea', JSON.stringify(itemTarea));
  }, [itemTarea])

  return (
    <>
      <Formulario crearNuevaTarea={crearTarea} />

      <TablaTareas tareas={itemTarea} actualizarEstado={actualizarEstado} />

      <Visibilidad isChecked={mostrarCompletas} setMostrarCompletas={(checked) => setMostrarCompletas(checked)} eliminarTarea = {eliminarTarea}/> 

      {mostrarCompletas && (
        <TablaTareas
          tareas={itemTarea}
          actualizarEstado={actualizarEstado}
          completadas={true} 
        />
      )}
    </>
  );
}

export default App
