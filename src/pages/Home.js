import Hero from "../components/Hero";
import Description from "../components/Description";
import Sites from "../components/Sites";
import Paragraph from "../components/Paragraph";

function Home() {
  return (
    <div id="pageContainer" className="relative h-screen m-5">
      <Hero />
      <div className="bg-white my-10 w-full text-5xl text-center z-5 md:mb-28">
        <section className="text-lg italic sm:text-2xl md:text-4xl">
          <h2 className="text-hot-pink py-10 sm:py-5 md:mb-32">
            <span className="font-black bg-hot-pink text-white">
              “I&apos;m a greater believer in luck,
            </span>
            <br />
            and I find the harder I work the more I have of it.”{" "}
            <span className="text-base not-italic sm:text-2xl">
              — Thomas Jefferson
            </span>
          </h2>
        </section>
        <section>
          <h1 className="pl-50 pr-24 text-orange font-['Sansita_Swashed'] md:pr-48 md:text-8xl">
            Hello,
          </h1>
          <h1 className="pl-50 pl-24 text-orange font-['Sansita_Swashed'] md:pl-48 md:text-8xl">
            I'm Ellie
          </h1>
        </section>
      </div>

      <section className="bg-orange p-2 m-2 w-screen mx-auto rounded lg:w-4/5">
        <Paragraph
          content="Welcome to my front-end web development portfolio site. Please feel free
        to have a look around. This is a React Project, pulling together HTML,
        Javascript, CSS, Material UI, Tailwind CSS and data from a couple of
        external APIs. Creativity keeps me inspired, so I've combined ideas I've
        had with technical skills I've learnt in Udemy courses, RoadMap.sh and
        documentation."
          colour="#ffffff"
          accent="#f6926d"
        />

        <Paragraph
          content=" I've been in the Technical Industry for over 5 years, specialising in
      Geographical Information Systems (GIS). I loved the logic and the power it held
      to communicate with so many different audiences. I wanted to shift my
      career onto a path that would challenge my technical ability and
      creative problem-solving skills."
          colour="#ffffff"
          accent="#f6926d"
        />
      </section>

      <Sites />
      <Description
        title="Main Website and Homepage"
        content="This site has been built with React, in combination with Tailwind CSS 
        and the ClassNames library for quick CSS styling. The aim was to utilise as many
        skills as I could and push my understanding further. In the past, I've React Router DOM's
        Browser Router, however I wanted to reach down to the foundations to fully understand what's happening behind the scenes. I had an idea for a 'live' hero image that I wanted to achieve and feel that it's close to what I'd been hoping for. I created 2 custom hooks to support the scroll events and screen width changes."
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
    </div>
  );
}

export default Home;
