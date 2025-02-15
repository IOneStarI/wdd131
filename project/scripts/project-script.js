// Dynamically set the copyright year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;
    let currentIndex = 0;

    function moveSlide(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Add event listeners to buttons
    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));

    // Auto-slide every 5 seconds
    let autoSlide = setInterval(() => moveSlide(1), 5000);

    // Pause auto-slide on hover
    document.querySelector(".slider").addEventListener("mouseover", () => {
        clearInterval(autoSlide);
    });

    // Resume auto-slide when mouse leaves
    document.querySelector(".slider").addEventListener("mouseleave", () => {
        autoSlide = setInterval(() => moveSlide(1), 5000);
    });
});