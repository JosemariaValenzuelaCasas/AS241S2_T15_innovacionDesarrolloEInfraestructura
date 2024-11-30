// Cambiar imágenes y puntos
setInterval(() => {
    document.querySelectorAll('.titular').forEach(t => {
        const imgs = t.querySelectorAll('.imagen-titular');
        const idx = [...imgs].findIndex(i => !i.classList.contains('oculto'));
        imgs.forEach((i, n) => i.classList.toggle('oculto', n === idx));
        t.querySelectorAll('.punto').forEach((p, n) => p.classList.toggle('activo', n === idx));
    });
}, 3000);
