import { useState, useEffect } from "react";
import getWeatherData from "../api/weatherAPI";
import classNames from "classnames";
import useScroll from "../hooks/useScroll";
import useWindowSize from "../hooks/useWindowSize";
import GrantAccess from "./GrantAccess";

function Hero({ weatherImage }) {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [weather, setWeather] = useState("");

  // hooks
  const position = useScroll();
  const windowSize = useWindowSize();

  const success = (position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      console.log("Geolocation is not supported by your browser");
    } else {
      // status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, (data) => {
        console.log(data);
      });
    }
  };

  useEffect(() => {
    getWeatherData(lat, long)
      .then((weatherType) => setWeather(weatherType))
      .catch((err) => {
        console.log(err);
      });
  }, [lat, long]);

  console.log(weather, "WEATHER");
  const classes = classNames("absolute bg-cover bg-right-top w-full");

  return (
    <div className="relative h-1/2 w-full mx-auto z-2 md:h-2/3 md:h-5/6 lg:w-4/5 z-2">
      {windowSize < 800 ? (
        <div className="mt-24 pb-12 flex items-center justify-center mx-auto bg-[url('../public/img/hero-still.jpg')] bg-cover bg-right-top h-full w-full sm:bg-center-top sm:w-full sm:h-full sm:mt-40"></div>
      ) : (
        <div className="mt-64 relative w-full h-full">
          <div
            className={`${classes} bg-[url('../public/img/sun.png')] h-[900px] 2xl:bg-top lg:h-[800px] xl:h-[850px] 2xl:h-[900px]`}
          ></div>
          <div
            className={`${classes} bg-[url('../public/img/mountains.png')] bottom-0 h-[900px] transition-transform transform translate-y-0 ease-in-out duration-1000 2xl:bg-top lg:h-[800px] xl:h-[850px] 2xl:h-[900px]`}
            style={{ transform: `translateY(${position}px)` }}
          ></div>
          <div
            className="absolute bg-[url('../public/img/pink-hills.png')] bottom-0 bg-cover bg-top w-full h-[625px] transition-transform transform translate-y-0 ease-in-out duration-1000 lg:h-[600px] xl:h-[650px] 2xl:h-[700px]"
            style={{ transform: `translateY(${-position * 1.5}px)` }}
          ></div>
          <div
            className={`${classes} h-[900px] 2xl:bg-top lg:h-[800px] xl:h-[850px] 2xl:h-[900px] z-3`}
            style={{ backgroundImage: `url('./img/clouds.png')` }}
          ></div>
          <div className="absolute bottom-[-60px] h-[150px] w-full bg-white z-2 items-center">
            <GrantAccess handleClick={getUserLocation} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
