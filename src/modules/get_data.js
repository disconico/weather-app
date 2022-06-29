const data = (() => {
  let cityLat = '';
  let cityLon = '';
  // eslint-disable-next-line consistent-return
  async function getCoordinates(city) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9d40f9d1ec0bd1dd18689980d2b0bd30`,
        { mode: 'cors' }
      );
      const APIData = await response.json();

      cityLat = await APIData.coord.lat;
      cityLon = await APIData.coord.lon;

      return APIData;
    } catch (error) {
      console.log(error);
      console.log('Break');
      return null;
    }
  }

  // eslint-disable-next-line consistent-return
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

  return { getCoordinates, getData };
})();

export default data;
