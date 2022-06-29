import display from './modules/display';
import data from './modules/get_data';
import './style.css';

let cityInput = '';

const searchBtn = document.querySelector('.search--btn');

searchBtn.addEventListener('click', async () => {
  cityInput = document.querySelector('.input--field').value;
  if (cityInput === '') {
    console.log('Please enter a city');
    return;
  }
  const cityCoordinates = await data.getCoordinates(cityInput);
  const weatherData = await data.getData(cityCoordinates);
  display.renderWeather(weatherData, cityCoordinates);
});

window.addEventListener('load', async () => {
  const cityCoordinates = await data.getCoordinates('Paris');
  const weatherData = await data.getData(cityCoordinates);
  display.renderWeather(weatherData, cityCoordinates);
});
