// Selecciona el elemento del menú desplegable
const menu = document.getElementById('menu');

// Detecta el desplazamiento de la página
window.addEventListener('scroll', () => {
  // Obtiene la posición del desplazamiento vertical
  const scrollTop = window.scrollY;

  // Verifica si la posición es mayor a 50 píxeles
  if (scrollTop > 100) {
    menu.classList.add('sticky'); // Agrega la clase 'sticky' si se desplaza hacia abajo
  } else {
    menu.classList.remove('sticky'); // Elimina la clase 'sticky' si se vuelve a la parte superior
  }
});
