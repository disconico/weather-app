import swal from 'sweetalert';

const data = (() => {
  let cityLat = '';
  let cityLon = '';

  async function getCoordinates(city) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9d40f9d1ec0bd1dd18689980d2b0bd30`,
        { mode: 'cors' }
      );

      if (response.ok) {
        const APIData = await response.json();
        cityLat = await APIData.coord.lat;
        cityLon = await APIData.coord.lon;
        return APIData;
      }
      if (response.status === 404) {
        swal({
          text: 'Your city was not found, please try again.',
          icon: 'error',
          timer: 3000,
        });
        throw new Error('City not found');
      }
      throw new Error(`Other error: ${response.status}`);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function getData() {
    try {
      const rep = await fetch(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&APPID=9d40f9d1ec0bd1dd18689980d2b0bd30&units=metric`,
        { mode: 'cors' }
      );

      const cityData = await rep.json();
      console.log(cityData);
      return cityData;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async function getQuote() {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const myQuotes = await response.json();

      const randomQuote = parseInt(Math.random() * myQuotes.length, 10);
      const selectedQuote = myQuotes[randomQuote];

      return selectedQuote;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  getQuote();

  return { getCoordinates, getData, getQuote };
})();

export default data;
