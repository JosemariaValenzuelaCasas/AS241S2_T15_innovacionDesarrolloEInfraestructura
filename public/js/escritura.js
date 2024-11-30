// JavaScript para la animación de escribir y borrar
document.addEventListener('DOMContentLoaded', function () {
    const texto = "17 Objetivos para Transformar Nuestro Mundo"; // El texto que se va a escribir
    let index = 0;  // Índice para escribir
    let borrar = false;  // Bandera para controlar el borrado
    const contenedorTitulo = document.querySelector('.titulods'); // Selecciona el contenedor del título

    // Función para escribir el texto
    function escribirTexto() {
        if (index < texto.length && !borrar) {
            contenedorTitulo.textContent += texto[index];  // Agrega un carácter al contenido
            index++;
            setTimeout(escribirTexto, 100);  // Llama a la función nuevamente con un retraso
        } else if (index === texto.length) {
            borrar = true;  // Inicia el borrado cuando se haya escrito todo el texto
            setTimeout(borrarTexto, 1000);  // Inicia el borrado después de 1 segundo
        }
    }

    // Función para borrar el texto
    function borrarTexto() {
        if (index > 0 && borrar) {
            contenedorTitulo.textContent = texto.substring(0, index - 1);  // Elimina un carácter
            index--;
            setTimeout(borrarTexto, 50);  // Llama a la función nuevamente con un retraso
        } else if (index === 0) {
            borrar = false;  // Termina el borrado y empieza a escribir de nuevo
            setTimeout(escribirTexto, 500);  // Comienza a escribir nuevamente
        }
    }

    // Inicia la animación de escribir
    escribirTexto();
});
