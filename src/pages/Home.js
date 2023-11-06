import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import getWeatherData from "../api/weatherAPI";
import Description from "../components/Description";

function Home() {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    getWeatherData()
      .then((weatherType) => setWeather(weatherType))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("weather", weather);
  return (
    <div id="pageContainer" className="h-screen">
      <Hero weatherImage={weather} />
      <div className="bg-white my-10 w-full text-4xl text-center z-5 md:mb-28">
        <h1 className="pl-50 pr-24 text-orange font-['Sansita_Swashed'] md:pr-48 md:text-8xl">
          Hello,
        </h1>
        <h1 className="pl-50 pl-24 text-orange font-['Sansita_Swashed'] md:pl-48 md:text-8xl">
          I'm Ellie
        </h1>
      </div>
      <Description
        title="Hello!"
        content="Welcome to my front-end web development portfolio site. Please feel free
      to have a look around. This is a React Project, pulling together HTML,
      Javascript, CSS, Material UI, Tailwind CSS and data from a couple of
      external APIs. Creativity keeps me inspired, so I've combined ideas I've had with
      technical skills I've learnt in Udemy courses, RoadMap.sh and
      documentation."
        colour="light-blue"
        accent="blue"
      />

      <Description
        title="Why Frontend Development?"
        content="I've been in the Technical Industry for over 5 years, specialising in Geographic Information Systems. I loved the logic and the power it held to communicate with so many different audiences. I wanted to shift my career onto a path that would challenge my technical ability and creative problem-solving skills."
        colour="light-blue"
        accent="blue"
      />
    </div>
  );
}

export default Home;
