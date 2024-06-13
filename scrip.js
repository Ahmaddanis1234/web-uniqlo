document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for contacting us!");
    });
});
    
let currentSlide = 0;

        function moveSlide(direction, sidesId) {
            const slides = document.querySelector(sidesId);
            const totalSlides = slides.children.length;
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        