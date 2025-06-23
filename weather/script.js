const api = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const api_key = "20b5585b37889f2ef7815be8bece94e4";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(city = "Dhaka") {
  const res = await fetch(api + city + `&appid=${api_key}`);
  const data = await res.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

window.onload = function (e) {
  checkWeather();
};
