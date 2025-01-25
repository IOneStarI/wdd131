// Dynamically set the copyright year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const windchillElement = document.querySelector("#windchill");

    // Static values for temperature and wind speed
    const temperature = 5; // Celsius
    const windSpeed = 10; // km/h

    // Calculate and display windchill if applicable
    const calculateWindChill = (temp, wind) => {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(wind, 0.16) +
            0.3965 * temp * Math.pow(wind, 0.16)
        ).toFixed(1);
    };

    if (temperature <= 10 && windSpeed > 4.8) {
        windchillElement.textContent = `Windchill: ${calculateWindChill(
        temperature,
        windSpeed
      )} °C`;
    } else {
        windchillElement.textContent = "Windchill: N/A";
    }
});