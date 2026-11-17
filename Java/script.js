let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Show a particular slide
function showSlide(index) {

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active-dot");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active-dot");
}

// Move to next or previous slide
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Automatically change slide every 4 seconds
setInterval(function() {
    changeSlide(1);
}, 4000);