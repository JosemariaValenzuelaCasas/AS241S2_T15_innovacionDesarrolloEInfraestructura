document.querySelectorAll('.noticia').forEach(function(noticia) {
    const titular = noticia.querySelector('.titular');
    const desplegable = noticia.querySelector('.desplegable');

    titular.addEventListener('click', function() {
        const isVisible = desplegable.style.display === 'block';
        
        // Alternar entre mostrar y ocultar el contenido
        if (isVisible) {
            desplegable.style.display = 'none';
        } else {
            desplegable.style.display = 'block';
        }
    });
});
