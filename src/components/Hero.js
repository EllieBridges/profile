import { useState, useEffect } from "react";
import getWeatherData from "../api/weatherAPI";
import classNames from "classnames";
import useScroll from "../hooks/useScroll";
import useWindowSize from "../hooks/useWindowSize";
import WeatherCard from "./WeatherCard";

function Hero({ getUserLocation, latitude, longitude }) {
  const [weather, setWeather] = useState(null);
  const [description, setDescription] = useState(null);
  const [dayNight, setDayNight] = useState("day");

  // hooks
  const position = useScroll();
  const windowSize = useWindowSize();

  useEffect(() => {
    getWeatherData(latitude, longitude)
      .then((weatherData) => {
        const { weatherType, weatherDescription, timeOfDay } = weatherData;
        setWeather(weatherType);
        setDescription(weatherDescription);
        setDayNight(timeOfDay);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [latitude, longitude]);

  const classes = classNames("absolute bg-cover bg-right-top w-full");

  return (
    <div className="relative h-1/2 w-full mx-auto z-2 md:h-2/3 md:h-5/6 lg:w-4/5 z-2">
      {windowSize < 800 ? (
        <div className="flex items-center justify-center mx-auto bg-[url('../public/img/hero-still.jpg')] bg-cover bg-right-top h-full w-full sm:bg-center-top sm:w-full sm:h-full sm:mt-40"></div>
      ) : (
        <div className="mt-72 relative w-full h-full">
          <div
            className={`${classes} bottom-0 h-[950px] 2xl:bg-top lg:h-[925px] xl:h-[925px] 2xl:h-[950px]`}
            style={{ backgroundImage: `url('./img/${dayNight}.png')` }}
          ></div>
          <div
            className={`${classes} bg-[url('../public/img/mountains.png')] bottom-0 h-[900px] transition-transform transform translate-y-0 ease-in-out duration-1000 2xl:bg-top lg:h-[800px] xl:h-[850px] 2xl:h-[900px]`}
            style={{ transform: `translateY(${position}px)` }}
          ></div>
          <div
            className="absolute bg-[url('../public/img/pink-hills.png')] bottom-0 bg-cover bg-top w-full h-[625px] transition-transform transform translate-y-0 ease-in-out duration-1000 lg:h-[600px] xl:h-[650px] 2xl:h-[700px]"
            style={{ transform: `translateY(${-position * 1.5}px)` }}
          ></div>
          {weather !== "sun" && (
            <div
              className={`${classes} bottom-0 h-[950px] 2xl:bg-top lg:h-[925px] xl:h-[925px] 2xl:h-[950px]`}
              style={{ backgroundImage: `url('./img/${weather}.png')` }}
            ></div>
          )}
          <div className="absolute bottom-[-60px] h-[150px] w-full bg-white z-2 items-center">
            {windowSize > 800 && (
              <WeatherCard
                getUserLocation={getUserLocation}
                weatherDescription={description}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
