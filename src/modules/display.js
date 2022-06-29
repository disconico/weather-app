import { format } from 'date-fns';

const display = (() => {
  const cityName = document.querySelector('.weather-info_city');
  const cityDesc = document.querySelector('.weather-info_description');
  const cityTemperature = document.querySelector('.weather-info_temperature');
  const cityIcon = document.querySelector('.info-icon');
  const cityDate = document.querySelector('.weather-info_date');
  const cityTime = document.querySelector('.weather-info_time');

  function renderWeather(weatherData, city) {
    if (weatherData === null || city === null) return;
    cityName.textContent = `${city.name}`;
    cityDesc.textContent = `${weatherData.current.weather[0].description}`;
    cityTemperature.textContent = `${Math.round(weatherData.current.temp)} °C`;
    cityIcon.src = `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
    cityDate.textContent = `${format(new Date(), 'iii, do LLL yy')}`;
    cityTime.textContent = `${format(new Date(), 'p')}`;
  }

  return { renderWeather };
})();

export default display;
