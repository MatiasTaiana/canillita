
AOS.init();

 // Selecciona el contenedor del track del slider
const sliderTrack = document.querySelector('.slider-track');

// Clona el contenido del slider para un bucle continuo
const sliderContent = sliderTrack.innerHTML;
sliderTrack.innerHTML += sliderContent;

// Variable para controlar el estado de la animación
let isPaused = false;

// Añade un evento de clic a cada tarjeta para pausar/reanudar la animación
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        if (isPaused) {
            sliderTrack.classList.remove('paused');
            isPaused = false;
        } else {
            sliderTrack.classList.add('paused');
            isPaused = true;
        }
    });
});

// Selecciona el contenedor del logo
const logoContainer = document.querySelector('.contenedorLogo');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        // Cuando se hace scroll hacia abajo
        logo.classList.add('shrink-logo');
        logoContainer.classList.add('shrink-logo');
    } else {
        // Cuando se vuelve al principio de la página
        logo.classList.remove('shrink-logo');
        logoContainer.classList.remove('shrink-logo');
    }
});
document.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const titulo = document.getElementById('titulo');

    if (scrollTop > 0) { // Ajusta este valor según tus preferencias
        titulo.classList.add('titulo-fixed');
        document.querySelector('.titulo').style.marginTop = '10px'; // Ajusta según el espacio necesario
    } else {
        titulo.classList.remove('titulo-fixed');
        document.querySelector('.titulo').style.marginTop = '120px'; // Ajusta según el espacio necesario
    }
});
document.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const titulo = document.getElementById('titulo');
    const contenedorTitulos = document.querySelector('.contenedorTitulos');

    if (scrollTop > 50) { // Ajusta este valor según tus preferencias
        titulo.classList.add('titulo-fixed');
        contenedorTitulos.style.marginTop = '10px'; // Ajusta según el espacio necesario
        contenedorTitulos.style.paddingTop = '0px'; // Reduce el padding-top en 120px al hacer scroll
    } else {
        titulo.classList.remove('titulo-fixed');
        contenedorTitulos.style.marginTop = '0px'; // Ajusta según el espacio necesario
        contenedorTitulos.style.paddingTop = '20px'; // Restaura el padding-top original
    }
});