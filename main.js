/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
window.addEventListener('load', console.log('poop'));

const searchBtn = document.querySelector('.search--btn');
const inputField = document.querySelector('.input--field');
let cityInput = '';

const cityName = document.querySelector('.city--name');
const cityDesc = document.querySelector('.city--description');
const cityTemperature = document.querySelector('.city--temperature');

let weatherData = '';

function renderWeather() {
  cityName.textContent = weatherData.name;
  cityDesc.textContent = weatherData.weather[0].description;
  cityTemperature.textContent = weatherData.main.temp;
}

async function getWeather(city) {
  const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9d40f9d1ec0bd1dd18689980d2b0bd30`;
  try {
    const response = await fetch(endpoint, { mode: 'cors' });
    weatherData = await response.json();
    console.log(weatherData);
    renderWeather();
  } catch (err) {
    console.log(err);
    // return null;
  }
}

window.addEventListener('load', getWeather('Paris'));

searchBtn.addEventListener('click', () => {
  cityInput = document.querySelector('.input--field').value;
  if (cityInput === '') {
    console.log('Please enter a city');
  } else {
    getWeather(cityInput);
    cityInput = '';
    inputField.value = '';
  }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVFQUF1RSxLQUFLO0FBQzVFO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY29uc29sZS5sb2coJ3Bvb3AnKSk7XG5cbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtLWJ0bicpO1xuY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC0tZmllbGQnKTtcbmxldCBjaXR5SW5wdXQgPSAnJztcblxuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS0tbmFtZScpO1xuY29uc3QgY2l0eURlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS0tZGVzY3JpcHRpb24nKTtcbmNvbnN0IGNpdHlUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LS10ZW1wZXJhdHVyZScpO1xuXG5sZXQgd2VhdGhlckRhdGEgPSAnJztcblxuZnVuY3Rpb24gcmVuZGVyV2VhdGhlcigpIHtcbiAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICBjaXR5RGVzYy50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGNpdHlUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLm1haW4udGVtcDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIGNvbnN0IGVuZHBvaW50ID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JkFQUElEPTlkNDBmOWQxZWMwYmQxZGQxODY4OTk4MGQyYjBiZDMwYDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgcmVuZGVyV2VhdGhlcigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIC8vIHJldHVybiBudWxsO1xuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZ2V0V2VhdGhlcignUGFyaXMnKSk7XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LS1maWVsZCcpLnZhbHVlO1xuICBpZiAoY2l0eUlucHV0ID09PSAnJykge1xuICAgIGNvbnNvbGUubG9nKCdQbGVhc2UgZW50ZXIgYSBjaXR5Jyk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0V2VhdGhlcihjaXR5SW5wdXQpO1xuICAgIGNpdHlJbnB1dCA9ICcnO1xuICAgIGlucHV0RmllbGQudmFsdWUgPSAnJztcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=