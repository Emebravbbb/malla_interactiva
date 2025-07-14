document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((item, index) => {
        // Opcional: añadir un número a cada item para distinguirlos
        item.textContent = index + 1;

        // Ejemplo de interactividad más compleja (clic)
        item.addEventListener('click', () => {
            alert(`Has hecho clic en el elemento ${index + 1}`);
            item.style.backgroundColor = '#f44336'; // Cambia de color al hacer clic
            setTimeout(() => {
                item.style.backgroundColor = '#ff9800'; // Vuelve al color de hover
            }, 500);
        });
    });
});
