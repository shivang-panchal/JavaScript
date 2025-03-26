const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const locationNotFound = document.querySelector('.location-not-found');
const weatherBody = document.querySelector('.weather-body');

async function checkWeather(city) {
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const apiKey = "c1b9c6125ed1810c0893c8ee53c08148";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        // Show loading state
        temperature.innerHTML = "Loading...";
        description.innerHTML = "";

        const response = await fetch(url);
        const weatherData = await response.json();

        if (weatherData.cod === "404") {
            locationNotFound.style.display = "flex";
            weatherBody.style.display = "none";
            return;
        }

        // Show weather data
        locationNotFound.style.display = "none";
        weatherBody.style.display = "flex";
        temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
        description.innerHTML = weatherData.weather[0].description;
        humidity.innerHTML = `${weatherData.main.humidity}%`;
        windSpeed.innerHTML = `${weatherData.wind.speed} Km/H`;

        // Weather icon selection
        const weatherCondition = weatherData.weather[0].main.toLowerCase();
        const weatherImages = {
            clouds: "cloud.png",
            haze: "haze.png",
            clear: "clear.png",
            rain: "rain.png",
            mist: "mist.png",
            snow: "snow.png",
            smoke: "smoke.png"
        };

        weatherImg.src = weatherImages[weatherCondition] || "default.png";

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Something went wrong. Please try again.");
    }
}

// Event Listeners
searchBtn.addEventListener('click', () => checkWeather(inputBox.value));
inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkWeather(inputBox.value);
});
