import React from 'react'; // Importa la librería React
import ReactDOM from 'react-dom/client'; // Importa la función ReactDOM específica para el cliente
import './styles.css'; // Importa un archivo CSS llamado styles.css para aplicar estilos a la aplicación
import { TodoApp } from './components/TodoApp'; // Importa el componente TodoApp definido en otro archivo

// Crear un punto de entrada y renderizar el componente TodoApp
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode> {/* Utiliza React.StrictMode, una herramienta para verificar y advertir sobre prácticas peligrosas en la aplicación */}
        <TodoApp></TodoApp> {/* Renderiza el componente TodoApp dentro de StrictMode */}
    </React.StrictMode>,
);
