    const apiKey = "56583a94f85c62c729c607dca2675c87";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search-bar");
    const searchBtn = document.querySelector(".search-img");
    const weatherIcon = document.getElementById("weather-icon");
    
    
async function checkWeather(city) {

    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if (response.status == 404) {
            throw new error('city not found');
        }
        var data = await response.json();

        console.log(data);
        

        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "% <br> humidity";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h <br> wind speed";

        if (data.weather[0].main === "Clear") {
            weatherIcon.src = "clear.png";
        }
        else if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "clouds.png";
        }
        else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "mist.png";
        }
        else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "snow.png";
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "drizzle.png";
        }
        else if (data.weather[0].main === "Smoke") {
            weatherIcon.src = "smoke.png";
        }
        else if (data.weather[0].main === "Haze") {
            weatherIcon.src = "haze.png";
        }
    }

    catch (error) {
        console.log(error);
        document.querySelector(".error-msg").style.display = "block";
        document.querySelector(".temperature-details").style.display = "none";
        document.querySelector(".extra-details").style.display = "none";

        searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
        })
        document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
        checkWeather(searchBox.value);
        }
        })
    }
    }

searchBtn.addEventListener("click", () => {
checkWeather(searchBox.value);
})
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
checkWeather(searchBox.value);
}
})