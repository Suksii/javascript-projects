const apiKey = "2e91349e4b8e48e395575630252002";
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}`;

async function fetchWeather(searchedCity) {
  const response = await fetch(apiUrl + `&q=${searchedCity}`);
  var data = await response.json();

  if (response.status === 400) {
    document.querySelector(".error-message").style.display = "block";
    document.querySelector(".weather-data").style.display = "none";
  }

  if (searchedCity && response.status !== 400) {
    document.querySelector(".weather-data").style.display = "flex";
    document.querySelector(".error-message").style.display = "none";
  }

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
}
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

searchButton.addEventListener("click", () => {
  fetchWeather(searchInput.value);
  searchInput.value = "";
});
