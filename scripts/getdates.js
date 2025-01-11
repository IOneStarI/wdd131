// Dynamically set the copyright year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;