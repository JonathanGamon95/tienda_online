let scrollAmount = 0;

function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery');
    const galleryWidth = gallery.scrollWidth;
    const containerWidth = document.querySelector('.gallery-container').offsetWidth;

    const maxScroll = galleryWidth - containerWidth;

    // Calculamos el nuevo desplazamiento según el tamaño del contenedor
    const imageWidth = document.querySelector('.gallery .cont_producto').offsetWidth + 10; // 10px de espacio entre imágenes
    scrollAmount += direction * imageWidth;

    // Restringimos el desplazamiento
    if (scrollAmount < 0) scrollAmount = 0;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;

    // Aplicamos el desplazamiento
    gallery.style.transform = `translateX(-${scrollAmount}px)`;
}