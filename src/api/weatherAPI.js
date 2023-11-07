import axios from "axios";

const APIKEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

const getWeatherData = async (lat, long) => {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c27395740d77df0b35801503a159580a`;
  console.log(apiURL);
  try {
    const response = await axios.get(apiURL);
    const weatherData = response.data;
    const weatherType = getWeatherType(weatherData);
    return weatherType;
  } catch (err) {
    console.log(err);
  }
};

const getWeatherType = (weatherData) => {
  const currentTime = Math.floor(new Date().getTime() / 1000);
  const sunrise = weatherData.sys.sunrise;
  const sunset = weatherData.sys.sunset;
  if (currentTime > sunrise && currentTime < sunset) {
    console.log("day");
    const weather = sortType(weatherData);
    return weather;
  } else {
    return "night";
  }
};

const sortType = (weatherData) => {
  const main = weatherData.weather[0].main.toLowerCase();
  const typeMap = {
    clear: "sun",
    clouds: "clouds",
    drizzle: "rain",
    rain: "rain",
    thunderstorm: "storm",
    snow: "snow",
    mist: "mist",
  };
  return undefined ? "sun" : typeMap[main];
};

export default getWeatherData;
