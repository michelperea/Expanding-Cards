// Selecciona todos los elementos con la clase 'panel'
const panels = document.querySelectorAll('.panel');

// Añade un evento de clic a cada panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Elimina las clases 'active' de todos los paneles
        removeActiveClasses();
        // Agrega la clase 'active' al panel clicado
        panel.classList.add('active');
    });
});

// Función para eliminar las clases 'active' de todos los paneles
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
