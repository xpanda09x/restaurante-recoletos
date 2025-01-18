// Carrusel de imágenes infinito
document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const images = carouselTrack.querySelectorAll('img');

    // Duplicar imágenes para el efecto infinito
    images.forEach(img => {
        const clone = img.cloneNode(true);
        carouselTrack.appendChild(clone);
    });

    // Calcular el ancho total del carrusel y establecer animación
    const trackWidth = carouselTrack.offsetWidth;
    const animationDuration = 20; // Duración en segundos (ajustable)

    carouselTrack.style.width = `${images.length * 2 * 100}%`; // Duplicar ancho
    carouselTrack.style.animation = `scroll ${animationDuration}s linear infinite`;

    // Reiniciar animación en caso de saltos (opcional)
    carouselTrack.addEventListener('animationiteration', () => {
        carouselTrack.style.transition = 'none';
        carouselTrack.style.transform = `translateX(0)`;
        setTimeout(() => {
            carouselTrack.style.transition = `transform ${animationDuration}s linear infinite`;
        }, 50); // Tiempo mínimo para reinicio limpio
    });
});
