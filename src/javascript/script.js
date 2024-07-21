import '../Css/normalize.css';
import '../css/style.css';

let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("-translate-y-[101%]");
    document.querySelector(".menu").classList.toggle("hidden");
    document.querySelector(".close").classList.toggle("hidden");
})

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

/* Goals Section Swiper configuration */
const swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2000,
        disableonInteraction: 'false',
    },
    spaceBetween: 20,
    freeMode: 'true',
    centerSlide: 'true',
    slidesPerView: '1.10',
    fade: 'true',
    grabCursor: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/* Features Section Swiper configuration */
const swiper2 = new Swiper(".mySwiper2", {
    autoplay: {
        delay: 2000,
        disableonInteraction: 'false',
    },
    spaceBetween: 32,
    freeMode: 'true',
    centerSlide: 'true',
    slidesPerView: 1,
    fade: 'true',
    grabCursor: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3
        }
    }
});


/*Equalize the height of Slides of Feature Section*/
window.addEventListener('load', function () {
    equalizeSlideHeights();
});

window.addEventListener('resize', function () {
    equalizeSlideHeights();
});

function equalizeSlideHeights() {
    const slides = document.querySelectorAll('#wrapper2 > .swiper-slide > div');
    let maxHeight = 0;

    slides.forEach(slide => {
        slide.style.height = 'auto';
        if (slide.clientHeight > maxHeight) {
            maxHeight = slide.clientHeight;
        }
    });

    slides.forEach(slide => {
        slide.style.height = `${maxHeight}px`;
    });
}
