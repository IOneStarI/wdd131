// Dynamically set the copyright year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

document.addEventListener("DOMContentLoaded", function() {
    const productSelect = document.getElementById("product");
    const reviewCounter = document.getElementById("review-counter");
    const form = document.getElementById("review-form");

    const products = [
        { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
        { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
    ];

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCounter.textContent = `Reviews Submitted: ${reviewCount}`;

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
        reviewCounter.textContent = `Reviews Submitted: ${reviewCount}`;
        alert("Review submitted successfully!");
        form.reset();
    });
});