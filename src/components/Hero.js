import classNames from "classnames";
import useScroll from "../hooks/useScroll";
import useWindowSize from "../hooks/useWindowSize";

function Hero({ weatherImage }) {
  console.log("weatherImage", weatherImage);
  const position = useScroll();
  const windowSize = useWindowSize();

  const classes = classNames("absolute bg-cover bg-right-top w-full");
  const imageSrc = `/public/img/mist.png`;

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
            style={{ backgroundImage: `url('../public/img/clouds.png')` }}
          ></div>
          <div className="absolute bottom-[-60px] h-[150px] w-full bg-white"></div>
        </div>
      )}
    </div>
  );
}

export default Hero;
