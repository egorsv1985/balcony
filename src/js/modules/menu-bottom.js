import Swiper from './../libs/swiper-bundle.min.js';

export default function menuBottom() {
    if (document.querySelector('.banner')) {
        const swiper = new Swiper('.menu-bottom', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            // Переключение при клике на слайд
            slideToClickedSlide: true,
            // Управление клавиатурой
            Keyboard: {
                enabled: true, // вкл-выкл
                onlyInViewport: true, // в пределах вьюпорта
                pageUpDown: true,// управление клавиатурой
            },
            // Активный слайд по центру
            centerdSlides: true,
            // Бесконечный слайд
            loop: false,
            // Скорость прокрутки
            speed: 400,

            breakpoints: {
                // when window width is <= 320px
                320: {
                    autoHeight: true,
                    // Колличество слайдов для показа
                    centerdSlides: true,
                    slidesPerView: 1.5

                },
                // when window width is <= 480px
                414: {
                    centerdSlides: true,
                    slidesPerView: 2.2
                },
                768: {
                    centerdSlides: true,
                    slidesPerView: 3.2
                },
                1200: {
                    centerdSlides: true,
                    slidesPerView: 4
                }
            }
        });
    }
}