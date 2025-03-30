
function showmenu(){
    const menu = document.getElementById("menu");
    if(menu.style.display == "flex"){
        menu.style.display = "none";
    } else{
        menu.style.display = "flex";
    }
}

// Carousel functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    const Slides = document.querySelector('.slides');
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    Slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Initialize the carousel
showSlide(slideIndex);
