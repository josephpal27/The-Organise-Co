// Functionality For Nav Search Toggle

let searchBtn = document.querySelector('.fa-magnifying-glass');
let searchBox = document.querySelector('.nav-search');
let closeBtn = document.querySelector('.fa-xmark')

searchBtn.addEventListener('click', () => {
    if (searchBox.style.height == 'auto') {
        searchBox.style.height = '0';
    }
    else{
        searchBox.style.height = 'auto';
    } 
})

closeBtn.addEventListener('click', () => {
    searchBox.style.height = '0';
})



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
