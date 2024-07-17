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

const swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 1500,
        disableonInteraction: 'false',
    },
    spaceBetween: 25,
    freeMode: 'true',
    centerSlide: 'true',
    fade: 'true',
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});