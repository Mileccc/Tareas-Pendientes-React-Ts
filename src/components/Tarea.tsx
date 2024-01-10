// Define un tipo Tarea que especifica las propiedades esperadas por el componente Tarea
type TareaProps = {
    tarea: string; // Una cadena que representa la tarea
    borrarTarea: () => void; // Una función que no toma argumentos y no devuelve nada (void). Se utilizará para eliminar la tarea.
}

// Define el componente funcional Tarea que recibe las propiedades tarea y borrarTarea
export const Tarea = ({ tarea, borrarTarea }: TareaProps) => {
  return (
    <div className="task"> {/* Renderiza un div con la clase "task" para aplicar estilos */}
        <span>{tarea}</span> {/* Renderiza el texto de la tarea */}
        <button onClick={borrarTarea}>Borrar</button> {/* Renderiza un botón con el texto "Borrar" y llama a la función borrarTarea cuando se hace clic en el botón */}
    </div>
  );
}
