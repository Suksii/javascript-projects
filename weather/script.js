const apiKey = "2e91349e4b8e48e395575630252002";
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}`;

async function fetchWeather(searchedCity) {
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
  document.querySelector("#humidity").innerHTML = data.current.humidity + " %";
  document.querySelector("#wind").innerHTML = data.current.wind_kph + " km/h";
  document.querySelector("#dew-point").innerHTML =
    data.current.dewpoint_c + " °";
  document.querySelector("#pressure").innerHTML =
    data.current.pressure_mb + "Mb";

  const weather = document.querySelector("#weather-type");
  const icon = document.createElement("img");
  icon.src = `https:${data.current?.condition?.icon}`;
  weather.appendChild(icon);

  console.log(data);
}
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
console.log(searchInput, searchButton);

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetchWeather(searchInput.value);
});
