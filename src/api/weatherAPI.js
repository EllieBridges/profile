import axios from "axios";

const APIKEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

const getWeatherData = async (lat, long) => {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`;
  console.log(apiURL);
  try {
    const response = await axios.get(apiURL);
    const weatherData = response.data;
    return getWeatherType(weatherData);
  } catch (err) {
    console.log(err);
  }
};

const getWeatherType = (weatherData) => {
  const weatherType = weatherData.weather[0].main.toLowerCase();
  const weatherDescription = weatherData.weather[0].description;
  const currentTime = Math.floor(new Date().getTime() / 1000);
  const sunrise = weatherData.sys.sunrise;
  const sunset = weatherData.sys.sunset;
  const timeOfDay =
    currentTime > sunrise && currentTime < sunset ? "day" : "night";
  return { weatherType, weatherDescription, timeOfDay };
};

export default getWeatherData;
