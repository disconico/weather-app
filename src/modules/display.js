import { format } from 'date-fns';
import slider from './slider';

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

    // Main display
    cityName.textContent = `${city.name}`;
    cityDesc.textContent = `${weatherData.current.weather[0].description}`;
    cityTemperature.textContent = `${Math.round(weatherData.current.temp)} °C`;
    cityIcon.src = `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
    cityDate.textContent = `${format(new Date(), 'iii, do LLL yy')}`;
    cityTime.textContent = `${format(new Date(), 'p')}`;

    // Side display
    cityFeels.textContent = `${Math.round(weatherData.current.feels_like)} °C`;
    cityHumidity.textContent = `${weatherData.current.humidity} %`;
    if (`${weatherData.daily[0].rain}` === 'undefined') {
      cityRain.textContent = 'n.a.';
    } else {
      cityRain.textContent = `${weatherData.daily[0].rain} %`;
    }
    cityWind.textContent = `${Math.round(
      weatherData.current.wind_speed * 3.6
    )} km/h`;

    // Daily display
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

    const day3DayName = document.querySelector('.day-name3');
    const day3MaxTemp = document.querySelector('.max-temp3');
    const day3MinTemp = document.querySelector('.min-temp3');
    const day3Icon = document.querySelector('.weather-daily-img3');
    day3DayName.textContent = `${format(
      new Date(weatherData.daily[3].dt * 1000),
      'iiii'
    )}`;
    day3MaxTemp.textContent = `${Math.round(weatherData.daily[3].temp.max)} °C`;
    day3MinTemp.textContent = `${Math.round(weatherData.daily[3].temp.min)} °C`;
    day3Icon.src = `http://openweathermap.org/img/wn/${weatherData.daily[3].weather[0].icon}@2x.png`;

    const day4DayName = document.querySelector('.day-name4');
    const day4MaxTemp = document.querySelector('.max-temp4');
    const day4MinTemp = document.querySelector('.min-temp4');
    const day4Icon = document.querySelector('.weather-daily-img4');
    day4DayName.textContent = `${format(
      new Date(weatherData.daily[4].dt * 1000),
      'iiii'
    )}`;
    day4MaxTemp.textContent = `${Math.round(weatherData.daily[4].temp.max)} °C`;
    day4MinTemp.textContent = `${Math.round(weatherData.daily[4].temp.min)} °C`;
    day4Icon.src = `http://openweathermap.org/img/wn/${weatherData.daily[4].weather[0].icon}@2x.png`;

    const day5DayName = document.querySelector('.day-name5');
    const day5MaxTemp = document.querySelector('.max-temp5');
    const day5MinTemp = document.querySelector('.min-temp5');
    const day5Icon = document.querySelector('.weather-daily-img5');
    day5DayName.textContent = `${format(
      new Date(weatherData.daily[5].dt * 1000),
      'iiii'
    )}`;
    day5MaxTemp.textContent = `${Math.round(weatherData.daily[5].temp.max)} °C`;
    day5MinTemp.textContent = `${Math.round(weatherData.daily[5].temp.min)} °C`;
    day5Icon.src = `http://openweathermap.org/img/wn/${weatherData.daily[5].weather[0].icon}@2x.png`;

    const day6DayName = document.querySelector('.day-name6');
    const day6MaxTemp = document.querySelector('.max-temp6');
    const day6MinTemp = document.querySelector('.min-temp6');
    const day6Icon = document.querySelector('.weather-daily-img6');
    day6DayName.textContent = `${format(
      new Date(weatherData.daily[6].dt * 1000),
      'iiii'
    )}`;
    day6MaxTemp.textContent = `${Math.round(weatherData.daily[6].temp.max)} °C`;
    day6MinTemp.textContent = `${Math.round(weatherData.daily[6].temp.min)} °C`;
    day6Icon.src = `http://openweathermap.org/img/wn/${weatherData.daily[6].weather[0].icon}@2x.png`;

    const day7DayName = document.querySelector('.day-name7');
    const day7MaxTemp = document.querySelector('.max-temp7');
    const day7MinTemp = document.querySelector('.min-temp7');
    const day7Icon = document.querySelector('.weather-daily-img7');
    day7DayName.textContent = `${format(
      new Date(weatherData.daily[7].dt * 1000),
      'iiii'
    )}`;
    day7MaxTemp.textContent = `${Math.round(weatherData.daily[7].temp.max)} °C`;
    day7MinTemp.textContent = `${Math.round(weatherData.daily[7].temp.min)} °C`;
    day7Icon.src = `http://openweathermap.org/img/wn/${weatherData.daily[7].weather[0].icon}@2x.png`;

    // Hourly display
    const hoursGrp = document.querySelector('.hours');
    hoursGrp.textContent = '';
    for (let x = 1; x <= 3; x += 1) {
      const hoursSection = document.createElement('div');
      hoursSection.classList.add('hours-grp');
      hoursSection.setAttribute('id', `${x}`);
      hoursGrp.appendChild(hoursSection);

      const loopArray = [1, 9, 17, 25];
      for (let i = loopArray[x - 1]; i < loopArray[x]; i += 1) {
        const hoursBlock = document.createElement('div');
        hoursBlock.classList.add(`hour-${i}`);
        hoursSection.appendChild(hoursBlock);

        const hourTime = document.createElement('div');
        hourTime.classList.add(`hour-time${i}`);
        hourTime.textContent = `${format(
          new Date(weatherData.hourly[i].dt * 1000),
          'h aaa'
        )}`;
        hoursBlock.appendChild(hourTime);

        const hourTemp = document.createElement('div');
        hourTemp.classList.add(`hour-temp${i}`);
        hourTemp.textContent = `${Math.round(weatherData.hourly[i].temp)} °C`;
        hoursBlock.appendChild(hourTemp);

        const hourIcon = document.createElement('div');
        hourIcon.classList.add(`hour-icon-${i}`);
        hoursBlock.appendChild(hourIcon);
        const hourImg = document.createElement('img');
        hourImg.classList.add(`hour-img${i}`);
        hourImg.src = `http://openweathermap.org/img/wn/${weatherData.hourly[i].weather[0].icon}@2x.png`;
        hourIcon.appendChild(hourImg);
      }
    }

    slider.showBlock(1);
    slider.currentBlock(1);
  }

  return { renderWeather };
})();

export default display;
