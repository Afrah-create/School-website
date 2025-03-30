document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    const carouselContainer = document.querySelector('.carousel-container');

    // Counter for current image
    let counter = 0;
    const size = carouselImages[0].clientWidth;

    // Initial position
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    updateDots();

    // Function to update the active dot
    function updateDots() {
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === counter);
        });
    }

    // Button listeners
    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return;
        counter++;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--;
        updateCarousel();
    });

    // Function to update carousel position
    function updateCarousel() {
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        updateDots();
    }

    // Add dot click functionality
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            counter = idx;
            updateCarousel();
        });
    });

    // Automatic sliding
    let autoSlide = setInterval(autoSlideFunction, 3000);

    function autoSlideFunction() {
        counter++;
        if (counter >= carouselImages.length) {
            counter = 0;
        }
        updateCarousel();
    }

    // Pause on hover
    carouselContainer.addEventListener('mouseover', () => {
        clearInterval(autoSlide);
    });

    carouselContainer.addEventListener('mouseout', () => {
        autoSlide = setInterval(autoSlideFunction, 3000);
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        const newSize = carouselImages[0].clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
    });

    // Menu functionality
    const menuIcon = document.querySelector('.menu_icon');
    const mainMenu = document.getElementById('mainmenu');
    
    // Function to set menu display based on screen size
    function adjustMenuDisplay() {
        if (window.innerWidth > 768) {
            // On larger screens, display menu as flex and hide the menu icon
            mainMenu.style.display = 'flex';
            menuIcon.style.display = 'none';
        } else {
            // On smaller screens, hide the menu and show the menu icon
            mainMenu.style.display = 'none';
            menuIcon.style.display = 'block';
        }
    }
    
    // Initial menu setup based on screen size
    adjustMenuDisplay();
    
    // Add click event listener to the menu icon
    menuIcon.addEventListener('click', function(event) {
        // Prevent the event from bubbling up
        event.stopPropagation();
        
        // Toggle the dropdown menu on smaller screens
        if (mainMenu.style.display === 'block' || mainMenu.style.display === 'flex') {
            mainMenu.style.display = 'none';
        } else {
            mainMenu.style.display = 'block';
        }
    });
    
    // Handle window resize for menu
    window.addEventListener('resize', function() {
        adjustMenuDisplay();
    });
    
    // Close menu when clicking outside (only on smaller screens)
    document.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            mainMenu.style.display = 'none';
        }
    });
    
    // Prevent menu from closing when clicking on menu items
    mainMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});