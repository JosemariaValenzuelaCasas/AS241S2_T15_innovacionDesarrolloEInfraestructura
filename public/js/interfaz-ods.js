// Selecciona todos los elementos interactivos
const textos = document.querySelectorAll('.texto-item');
const imagenes = document.querySelectorAll('.ods-item');
const imagenDinamica = document.querySelector('#sticker');
const seccion = document.querySelector('.seccion-ods');
const sex=document.getElementById('sticker')
// Activa el texto predeterminado y la imagen inicial
document.querySelector('#texto-predeterminado').classList.add('activo');

seccion.classList.add('fondo-predeterminado');
// Agrega un evento de clic a cada imagen
imagenes.forEach((imagen, index) => {
    console.log(index)
    imagen.addEventListener('click', () => {
        // Oculta todos los textos
        textos.forEach(texto => texto.classList.remove('activo'));

        // Muestra el texto correspondiente a la imagen seleccionada
        document.querySelector(`#texto${index + 1}`).classList.add('activo');

        // Cambia la clase de la imagen dinámica
        const nuevaClaseImagen = `ODS${index + 1}`;
        console.log(nuevaClaseImagen)
        imagenDinamica.setAttribute('src', `./image/stickerOds/sticker${nuevaClaseImagen}.png`);

        // Cambia el fondo de la sección
        const nuevaClaseFondo = `fondo-ods${index + 1}`;
        seccion.className = `seccion-ods ${nuevaClaseFondo}`;
    });
});
