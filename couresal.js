const carouselSlide = document.querySelector('.carousel-container');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Counter for current image
let counter = 0;
const size = carouselImages[0].clientWidth;

// Initial position
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Automatic sliding
let autoSlide = setInterval(() => {
    counter++;
    if (counter >= carouselImages.length) {
        counter = 0;
    }
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, 3000); // Change image every 3 seconds

// Pause on hover
carouselContainer.addEventListener('mouseover', () => {
    clearInterval(autoSlide);
});

carouselContainer.addEventListener('mouseout', () => {
    autoSlide = setInterval(() => {
        counter++;
        if (counter >= carouselImages.length) {
            counter = 0;
        }
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }, 3000);
});

// Handle window resize
window.addEventListener('resize', () => {
    const newSize = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
});