import Hero from "../components/Hero";
import Description from "../components/Description";
import Sites from "../components/Sites";
import Paragraph from "../components/Paragraph";
import Footer from "../components/Footer";

function Home({ getUserLocation, latitude, longitude }) {
  return (
    <div id="pageContainer" className="relative mx-auto h-screen p-0 m-0">
      <Hero
        getUserLocation={getUserLocation}
        latitude={latitude}
        longitude={longitude}
      />

      <section className="text-lg italic sm:text-2xl md:text-4xl bg-white my-16 w-full text-5xl text-center z-5 md:py-52">
        <h2 className="text-hot-pink">
          <span className="font-black bg-hot-pink text-white">
            “I&apos;m a greater believer in luck,
          </span>
          <br />
          and I find the harder I work the more I have of it.”
          <span className="text-base not-italic sm:text-2xl">
            — Thomas Jefferson
          </span>
        </h2>
      </section>

      <section className="mx-auto text-white bg-orange items-center py-16 md:pb-32">
        <div className="relative px-10 pb-10 text-6xl w-full h-fit font-['Sansita_Swashed'] md:text-8xl md:pt-32 md:pb-40">
          <h1 className="md:pr-48">Hello,</h1>
          <h1 className="md:pl-32">I'm Ellie.</h1>
        </div>

        <Paragraph
          content="Welcome to my front-end web development portfolio site. Please feel free
        to have a look around. This is a React Project, pulling together HTML,
        Javascript, CSS, Material UI, Tailwind CSS and data from a couple of
        external APIs. Creativity keeps me inspired, so I've combined ideas with the technical skills I've learnt in Udemy courses, RoadMap.sh and
        documentation."
          colour="#ffffff"
          accent="#f6926d"
          className="mx-5 md:mx-32"
        />

        <Paragraph
          content=" I've been in the Technical Industry for over 5 years, specialising in
      Geographical Information Systems (GIS). I love the logic and the power it holds
      to communicate with so many different audiences. I wanted to shift my
      career path that will further challenge my technical ability and
      creative problem-solving skills."
          colour="#ffffff"
          accent="#f6926d"
          className="mx-5 md:mx-32"
        />
      </section>

      <Sites />
      <Description
        title="Main Website and Homepage"
        content="This site has been built with React, in combination with Tailwind CSS 
        and the ClassNames library for quick CSS styling. The aim was to utilise as many
        skills as I could and push my understanding further. In the past, I've used React Router DOM's
        Browser Router, however I wanted to reach down to the foundations to fully understand what's happening behind the scenes with pop and pushstate. I had an idea for a 'live' hero image that I wanted to achieve and feel that it's close to what I'd been hoping for. I created 2 custom hooks to support this for scroll events and screen width changes."
        colour="#f3b5bd"
        accent="#f6727e"
        softwares={[
          "React",
          "Javascript",
          "CSS",
          "NPM",
          "Open Weather API",
          "Procreate",
          "Tailwind CSS",
          "Axios",
          "ChatGPT",
          "ClassNames library",
          "GitHub",
          "Visual Studio Code",
        ]}
        skills={[
          "Custom hooks",
          "Custom navigation",
          "Context",
          "PopState and pushState",
          "UseState",
          "UseEffect",
          "Async/ await",
          "Array Mapping",
          "Tailwind CSS - Transform",
          "Responsiveness - screen breakpoints",
          "Props",
        ]}
      />
      <Footer
        title="Have you tried the Colour Game yet?"
        path={"/colour"}
        label={"Try now!"}
      />
    </div>
  );
}

export default Home;
