    // let currentIndex = 0; // Índice inicial
    // const sliderTrack = document.querySelector('.slider-track');
    // const cards = document.querySelectorAll('.card');
    // const totalCards = cards.length;

    // function slide() {
    //     currentIndex++;
    //     if (currentIndex >= totalCards) {
    //         currentIndex = 0; // Reinicia el índice al alcanzar el final
    //     }
    //     sliderTrack.style.transform = `translateX(-${currentIndex * (cards[0].offsetWidth + 20)}px)`; // Desplaza el track
    // }

    // setInterval(slide, 3000); // Cambia la tarjeta cada 3 segundos

    // Selecciona el contenedor del track del slider
    const sliderTrack = document.querySelector('.slider-track');

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
