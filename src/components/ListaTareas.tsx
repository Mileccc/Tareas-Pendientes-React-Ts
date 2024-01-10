import { Tarea } from "./Tarea" // Importa el componente Tarea desde otro archivo
// Define un tipo ListaTareas que especifica las propiedades esperadas por el componente ListaTareas
type ListaTareas = {
    listaTareas: string[] // Un arreglo de cadenas que representa la lista de tareas
    borrarTarea: (index: number) => void // Una función que toma un índice y no devuelve nada (void)
}
// Define el componente funcional ListaTareas que recibe las propiedades listaTareas y borrarTarea
export const ListaTareas = ({listaTareas, borrarTarea}: ListaTareas) => {
  return (
    <div className="taskList"> {/* Renderiza un div con la clase "taskList" para aplicar estilos */}
        {/* Mapea sobre la lista de tareas */}
        {listaTareas.map((tarea, index) => (
            // Renderiza el componente Tarea para cada tarea en la lista
            <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea> 
        ))}
    </div>
  )
}