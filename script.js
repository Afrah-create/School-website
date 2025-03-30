function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show"); // Toggle the "show" class to display or hide the menu
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#logo')) { // Check if the click is outside the logo
        var menu = document.getElementById("menu");
        if (menu.classList.contains('show')) {
            menu.classList.remove('show'); // Remove the "show" class to hide the menu
        }
    }
};

// Carousel functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.activities-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    const activitiesSlide = document.querySelector('.activities-slide');
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    activitiesSlide.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Initialize the carousel
showSlide(slideIndex);