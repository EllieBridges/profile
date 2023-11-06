import axios from "axios";

const APIKEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const lat = 49.5335254;
const long = -115.7258244;

const getWeatherData = async () => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=49.53&lon=-115.72&appid=c27395740d77df0b35801503a159580a"
    );
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
