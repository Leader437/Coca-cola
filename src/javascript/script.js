import '../Css/normalize.css';
import '../css/style.css';

let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("-translate-y-[101%]");
    document.querySelector(".menu").classList.toggle("hidden");
    document.querySelector(".close").classList.toggle("hidden");
})