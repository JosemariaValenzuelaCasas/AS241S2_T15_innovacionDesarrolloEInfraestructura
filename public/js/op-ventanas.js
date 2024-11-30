document.querySelectorAll('.boton').forEach(boton => {
  boton.addEventListener('click', function () {
      // Resetear todos los botones a su color original
      document.querySelectorAll('.boton').forEach(b => {
          b.classList.remove('activo');
      });

      // Activar el botón actual
      this.classList.add('activo');

      // Mostrar la ventana emergente
      const ventana = document.querySelector('.ventana-emergente');
      const fondoOscuro = document.querySelector('.fondo-oscuro');
      const [titulo, descripcion, imagen] = this.dataset.info.split('|');

      ventana.querySelector('.texto-titulo').textContent = titulo;
      ventana.querySelector('.texto-descripcion').textContent = descripcion;
      ventana.querySelector('.imagen').src = imagen;

      ventana.classList.remove('oculto');
      fondoOscuro.classList.add('visible');
  });
});

// Cerrar la ventana emergente al hacer clic en el botón de cerrar
document.querySelector('.boton-cerrar').addEventListener('click', function () {
  const ventana = document.querySelector('.ventana-emergente');
  const fondoOscuro = document.querySelector('.fondo-oscuro');

  // Ocultar la ventana emergente y el fondo oscuro
  ventana.classList.add('oculto');
  fondoOscuro.classList.remove('visible');

  // Resetear todos los botones a su color original
  document.querySelectorAll('.boton').forEach(b => {
      b.classList.remove('activo');
  });
});

// Cerrar la ventana emergente al hacer clic fuera de ella
document.querySelector('.fondo-oscuro').addEventListener('click', function () {
  const ventana = document.querySelector('.ventana-emergente');
  const fondoOscuro = this;

  // Ocultar la ventana emergente y el fondo oscuro
  ventana.classList.add('oculto');
  fondoOscuro.classList.remove('visible');

  // Resetear todos los botones a su color original
  document.querySelectorAll('.boton').forEach(b => {
      b.classList.remove('activo');
  });
});
