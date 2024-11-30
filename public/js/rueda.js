document.addEventListener("DOMContentLoaded", function() {
    const odsImages = document.querySelectorAll('.ods-image');
    const odsText = document.getElementById('ods-text');
    const section = document.querySelector('.ods-section');  // Selecciona la sección donde cambiará el fondo
    
    let currentIndex = 0; // Índice inicial para la animación

    const updateText = () => {
        // Actualizamos el texto de acuerdo con la imagen activa
        const currentImage = odsImages[currentIndex];
        odsText.textContent = currentImage.getAttribute('data-text');
        
        // Cambiar el fondo de la sección según el color de fondo asociado
        const bgColor = currentImage.getAttribute('data-bg-color');
        section.style.backgroundColor = bgColor; // Cambia el color de fondo solo en la sección
    };

    // Función para actualizar el índice actual
    const updateIndex = () => {
        // Calculamos el índice basado en la animación circular de las imágenes
        currentIndex = (currentIndex + 1) % odsImages.length;
        updateText();  // Actualizamos el texto y fondo con la nueva imagen visible
    };

    // Configuramos un intervalo para cambiar el texto de acuerdo con la imagen
    setInterval(updateIndex, 5000);  // Cambiar el texto cada 5 segundos

    // También configuramos el evento de fin de animación
    const circle = document.querySelector('.circle');
    circle.addEventListener('animationiteration', updateIndex);
    
    // Llamar inicialmente para establecer el texto y fondo correcto
    updateText();
});
