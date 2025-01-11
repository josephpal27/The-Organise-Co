
// Functionality For Navbar Menu Button
document.addEventListener('click', function (event) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');

    // Check if the click is outside the navbar and it's open
    if (navbar.classList.contains('show') && !navbar.contains(event.target) && !toggler.contains(event.target)) {
        // Manually hide the navbar menu
        new bootstrap.Collapse(navbar).hide();
    }
});


// -------------------------------------------------------------------------------------------------------------------------------------------
// Functionlity For Navbar Slide Down While Scrolling

// document.addEventListener("DOMContentLoaded", () => {
//     const navbar = document.querySelector(".navbar");
//     let lastScrollY = window.scrollY;
  
//     window.addEventListener("scroll", () => {
//       const currentScrollY = window.scrollY;
  
//       // If scrolling down and past 50px, hide navbar
//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         navbar.classList.add("hidden");
//       } else {
//         // If scrolling up, show navbar
//         navbar.classList.remove("hidden");
//       }
  
//       // Update the last scroll position
//       lastScrollY = currentScrollY;
//     });
//   });
  
// -------------------------------------------------------------------------------------------------------------------------------------------


// Functionality For Back to Top Btn
let backToTopDiv = document.querySelector(".back-to-top");
let backToTopBtn = document.querySelector(".back-to-top .fa-arrow-up");

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        // Adjust the pixel value as needed
        backToTopDiv.classList.add("show");
    } else {
        backToTopDiv.classList.remove("show");
    }
});
// -------------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Slider 

let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const intervalTime = 3000; // 3 seconds

function updateSlidePosition() {
    const newTransform = -currentIndex * 100;
    slides.style.transform = `translateX(${newTransform}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Auto-slide functionality
let slideInterval = setInterval(nextSlide, intervalTime);

// Pause the auto-slide when hovering over the carousel
document.querySelector('.carousel').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume auto-slide when not hovering
document.querySelector('.carousel').addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, intervalTime);
});


// ---------------------------------------------------------------------------------------------------------------------------------------