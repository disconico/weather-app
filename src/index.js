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
