const apiKey = "2e91349e4b8e48e395575630252002";
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}`;

async function fetchWeather(searchedCity) {
  try {
    const response = await fetch(apiUrl + `&q=${searchedCity}`);
    var data = await response.json();

    function changeDateFormat(formatedDate) {
      const date = formatedDate.split(" ");
      const dateArray = date[0].split("-").reverse().join(".");

      return dateArray + " " + date[1];
    }

    document.querySelector("#condition-text").innerHTML =
      data.current?.condition?.text;
    document.querySelector("#city-name").innerHTML =
      data?.location?.name + ", " + data.location.country;
    document.querySelector("#date").innerHTML = changeDateFormat(
      data.current.last_updated
    );
    document.querySelector("#weather-temperature").innerHTML =
      Math.round(data.current.temp_c) + "°";
    document.querySelector("#humidity").innerHTML = data.current.humidity + "%";
    document.querySelector("#wind").innerHTML = data.current.wind_kph + "km/h";
    document.querySelector("#dew-point").innerHTML =
      data.current.dewpoint_c + "°";
    document.querySelector("#pressure").innerHTML =
      data.current.pressure_mb + "hPa";

    const weatherType = document.querySelector("#weather-type");

    let existingIcon = weatherType.querySelector("img");

    if (existingIcon) {
      existingIcon.src = `https:${data.current?.condition?.icon}`;
      existingIcon.alt = data.current?.condition?.text;
    } else {
      const icon = document.createElement("img");
      icon.src = `https:${data.current?.condition?.icon}`;
      icon.alt = data.current?.condition?.text;
      weatherType.appendChild(icon);
    }

    console.log(data);
  } catch (error) {
    console.log(error);
    alert("Failed to fetch weather data");
  }
}
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

searchButton.addEventListener("click", () => {
  if (searchInput.value.trim() === "") {
    alert("Type a city name");
  }
  fetchWeather(searchInput.value);
  searchInput.value = "";
});
