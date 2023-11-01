import classNames from "classnames";
import useScroll from "../hooks/useScroll";
import useWindowSize from "../hooks/useWindowSize";

function Hero() {
  const position = useScroll();
  const windowSize = useWindowSize();

  const classes = classNames("absolute bg-cover bg-right-top w-full");

  return (
    <div className="h-1/2 w-full mx-auto z-2 md:h-2/3 md:h-5/6 lg:w-4/5">
      {windowSize < 800 ? (
        <div className="mt-24 flex items-center justify-center mx-auto bg-[url('../public/img/hero-still.jpg')] bg-cover bg-right-top h-full w-full sm:bg-center-top sm:w-full sm:h-full sm:mt-40">
          {/* <h1 className="font-['Sansita_Swashed'] text-black text-8xl">
            Welcome
          </h1> */}
        </div>
      ) : (
        <div className="mt-64 relative w-full h-full">
          <div
            className={`${classes} bg-[url('../public/img/sun.png')] h-[900px] bg-pink-400 2xl:bg-top lg:h-[800px] xl:h-[850px] 2xl:h-[900px]`}
          ></div>
          <div
            className="absolute bg-[url('../public/img/mountains.png')] bg-cover bg-right-top bottom-0 w-full h-[900px] bg-pink-400 transition-transform transform translate-y-0 ease-in-out duration-1000 2xl:bg-top lg:h-[800px] xl:h-[850px] 2xl:h-[900px]"
            style={{ transform: `translateY(${position}px)` }}
          ></div>
          <div
            className="absolute bg-[url('../public/img/pink-hills.png')] bottom-0 bg-cover bg-top w-full h-[625px] transition-transform transform translate-y-0 ease-in-out duration-1000 lg:h-[600px] xl:h-[650px] 2xl:h-[700px]"
            style={{ transform: `translateY(${-position * 1.5}px)` }}
          ></div>
          <div className="absolute bottom-0 h-[100px] w-full bg-white"></div>
        </div>
      )}
    </div>
  );
}

export default Hero;
