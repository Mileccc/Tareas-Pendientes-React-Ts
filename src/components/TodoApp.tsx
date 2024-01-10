import { useState } from 'react'; // Importa la función useState de React para gestionar el estado
import { ListaTareas } from './ListaTareas';

export const TodoApp = () => {
    // Declaración de estado para la nueva tarea
    const [nuevaTarea, setNuevaTarea] = useState<string>(''); // Crea una variable de estado llamada nuevaTarea y su función de actualización setNuevaTarea. Inicializa nuevaTarea con una cadena vacía.
    const [listaTareas, setListaTareas] = useState<string[]>([])
    const handleAddTask = () => {
        if(nuevaTarea.trim() === '') return
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea]);
        setNuevaTarea('')
    }

    const handleBorrarTarea = (index:number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h1>Lista de Tareas</h1> {/* Renderiza un encabezado h1 */}
            <div>
                {/* Cuadro de entrada para la nueva tarea */}
                <input 
                    type="text" // Tipo de entrada de texto
                    value={nuevaTarea} // El valor del cuadro de entrada está vinculado al estado nuevaTarea
                    onChange={(e) => setNuevaTarea(e.target.value)} // Cuando se cambia el contenido del cuadro de entrada, se llama a setNuevaTarea para actualizar el estado con el nuevo valor
                    placeholder="Nueva Tarea" // Texto de marcador de posición dentro del cuadro de entrada
                />
                <button onClick={handleAddTask}>Agregar Tarea</button> 
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
    );
}
