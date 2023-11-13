import { useState } from "react";
import GrantAccess from "./GrantAccess";

function WeatherCard({ weatherDescription, getUserLocation }) {
  const [weather, setWeather] = useState(false);

  const toSentence = (string) => {
    if (!string) return;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const description = toSentence(weatherDescription);

  const handleClick = () => {
    getUserLocation();
    setWeather(true);
  };

  return (
    <div className="flex flex-col w-1/4 mt-5 font-sans m-auto">
      {!weather ? (
        <GrantAccess
          className="bg-blue m-auto hover:bg-pink"
          handleClick={handleClick}
        >
          Add Local Weather
        </GrantAccess>
      ) : weatherDescription ? (
        <div>
          <h3>Weather today:</h3>
          <h2>{description}</h2>
        </div>
      ) : (
        <h3>Weather data not found</h3>
      )}
    </div>
  );
}

export default WeatherCard;
