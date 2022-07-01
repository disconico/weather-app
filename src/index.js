import display from './modules/display';
import data from './modules/get_data';
import slider from './modules/slider';
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
  const inputData = document.querySelector('.input--field');
  inputData.value = '';
  const weatherData = await data.getData(cityCoordinates);
  display.renderWeather(weatherData, cityCoordinates);
});

window.addEventListener('load', async () => {
  const cityCoordinates = await data.getCoordinates('Paris');
  const weatherData = await data.getData(cityCoordinates);
  display.renderWeather(weatherData, cityCoordinates);
  slider.showBlock(1);
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    slider.currentBlock(e.target.id);
  }
});

window.addEventListener('click', (e) => {
  if (e.target.className === 'prev') {
    slider.plusBlock(-1);
  }
});

window.addEventListener('click', (e) => {
  if (e.target.className === 'next') {
    slider.plusBlock(1);
  }
});