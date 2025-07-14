document.addEventListener('DOMContentLoaded', () => {
    const materias = document.querySelectorAll('.materia');
    const STORAGE_KEY = 'materiasCompletadas';

    // Cargar el estado guardado al cargar la página
    function cargarEstadoMaterias() {
        const estadoGuardado = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        materias.forEach(materia => {
            // Usamos textContent.trim() para obtener el texto de la materia sin espacios extra
            // y sin el texto de la prelación, lo que ayuda a una clave de almacenamiento más limpia.
            const nombreMateria = materia.textContent.split('(')[0].trim(); 
            if (estadoGuardado[nombreMateria]) {
                materia.classList.add('completada');
            }
        });
    }

    // Guardar el estado actual en el almacenamiento local
    function guardarEstadoMaterias() {
        const estadoActual = {};
        materias.forEach(materia => {
            const nombreMateria = materia.textContent.split('(')[0].trim();
            estadoActual[nombreMateria] = materia.classList.contains('completada');
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(estadoActual));
    }

    // Inicializar el estado de las materias
    cargarEstadoMaterias();

    materias.forEach(materia => {
        materia.addEventListener('click', () => {
            // Alternar la clase 'completada'
            materia.classList.toggle('completada');
            // Guardar el nuevo estado
            guardarEstadoMaterias();
        });
    });
});
