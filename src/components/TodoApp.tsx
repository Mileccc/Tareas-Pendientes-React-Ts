import { useState } from 'react'; // Importa la función useState de React para gestionar el estado
import { ListaTareas } from './ListaTareas'; // Importa el componente ListaTareas desde otro archivo

export const TodoApp = () => {
    // Declaración de estado para la nueva tarea
    const [nuevaTarea, setNuevaTarea] = useState<string>(''); // Crea una variable de estado llamada nuevaTarea y su función de actualización setNuevaTarea. Inicializa nuevaTarea con una cadena vacía.
    const [listaTareas, setListaTareas] = useState<string[]>([]); // Crea una variable de estado llamada listaTareas para almacenar la lista de tareas y su función de actualización setListaTareas.

    // Función para agregar una nueva tarea a la lista
    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') return; // Verifica que la nueva tarea no esté vacía o solo contenga espacios en blanco
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea]); // Agrega la nueva tarea a la lista utilizando el operador spread (...).
        setNuevaTarea(''); // Limpia el cuadro de entrada de la nueva tarea.
    }

    // Función para eliminar una tarea de la lista por su índice
    const handleBorrarTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index)); // Filtra la lista de tareas y excluye la tarea con el índice especificado.
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
                <button onClick={handleAddTask}>Agregar Tarea</button> {/* Botón para agregar una nueva tarea, al hacer clic se llama a la función handleAddTask */}
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas> {/* Renderiza el componente ListaTareas y pasa la lista de tareas y la función para borrar tareas como propiedades */}
        </div>
    );
}
