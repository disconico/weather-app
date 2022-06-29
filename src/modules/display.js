import { format } from 'date-fns';

const display = (() => {
  const cityName = document.querySelector('.weather-info_city');
  const cityDesc = document.querySelector('.weather-info_description');
  const cityTemperature = document.querySelector('.weather-info_temperature');
  const cityIcon = document.querySelector('.info-icon');
  const cityDate = document.querySelector('.weather-info_date');
  const cityTime = document.querySelector('.weather-info_time');
  const cityFeels = document.getElementById('feels-like');
  const cityHumidity = document.getElementById('humidity');
  const cityRain = document.getElementById('rain');
  const cityWind = document.getElementById('wind');

  function renderWeather(weatherData, city) {
    if (weatherData === null || city === null) return;
    cityName.textContent = `${city.name}`;
    cityDesc.textContent = `${weatherData.current.weather[0].description}`;
    cityTemperature.textContent = `${Math.round(weatherData.current.temp)} °C`;
    cityIcon.src = `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
    cityDate.textContent = `${format(new Date(), 'iii, do LLL yy')}`;
    cityTime.textContent = `${format(new Date(), 'p')}`;
    cityFeels.textContent = `${Math.round(weatherData.current.feels_like)} °C`;
    cityHumidity.textContent = `${weatherData.current.humidity} %`;
    cityRain.textContent = `${weatherData.daily[0].rain} %`;
    cityWind.textContent = `${Math.round(
      weatherData.current.wind_speed * 3.6
    )} km/h`;

    const day1DayName = document.querySelector('.day-name1');
    const day1MaxTemp = document.querySelector('.max-temp1');
    const day1MinTemp = document.querySelector('.min-temp1');
    const day1Icon = document.querySelector('.weather-daily-img1');
    day1DayName.textContent = `${format(
      new Date(weatherData.daily[1].dt * 1000),
      'iiii'
    )}`;
    day1MaxTemp.textContent = `${Math.round(weatherData.daily[1].temp.max)} °C`;
    day1MinTemp.textContent = `${Math.round(weatherData.daily[1].temp.min)} °C`;
    day1Icon.src = `http://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}@2x.png`;

    const day2DayName = document.querySelector('.day-name2');
    const day2MaxTemp = document.querySelector('.max-temp2');
    const day2MinTemp = document.querySelector('.min-temp2');
    const day2Icon = document.querySelector('.weather-daily-img2');
    day2DayName.textContent = `${format(
      new Date(weatherData.daily[2].dt * 1000),
      'iiii'
    )}`;
    day2MaxTemp.textContent = `${Math.round(weatherData.daily[2].temp.max)} °C`;
    day2MinTemp.textContent = `${Math.round(weatherData.daily[2].temp.min)} °C`;
    day2Icon.src = `http://openweathermap.org/img/wn/${weatherData.daily[2].weather[0].icon}@2x.png`;
  }

  return { renderWeather };
})();

export default display;
