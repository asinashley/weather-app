function getWeather(response) {
  let temperatureElemet = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let city = document.querySelector("#city");

  city.innerHTML = response.data.city;
  temperatureElemet = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "9ftcc7o8a93343aab7a08acbac525689";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(getWeather);
}

function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchInput");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", citySearch);
