function Sites() {
  const links = {
    github: "https://github.com/EllieBridges",
    linkedin: "https://www.linkedin.com/in/ellie-bridges-244b7582",
    instagram:
      "https://www.instagram.com/wewentexploringig/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
  };
  return (
    <section className="flex flex-col py-8 mx-auto sm:my-20 sm:py-32 lg:w-4/5">
      <h2 className="font-inter mb-5 text-2xl font-bold text-blue p-2 sm:mb-10 sm:text-4xl">
        Get to know me
      </h2>
      <ul className="flex flex-row mx-auto justify-evenly bg-light-blue rounded-xl">
        {Object.keys(links).map((key, id) => (
          <li
            key={id}
            className="flex flex-col m-2 h-20 w-20 bg-green rounded items-center justify-center hover:bg-blue hover:border-solid hover:border-white sm:h-32 sm:w-32 md:w-48 md:h-48"
          >
            <a href={links[key]}>
              <img
                className="md:scale-150"
                src={`./img/logos/${key}.png`}
                alt={`${links[key]} logo`}
                width={50}
                height={50}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Sites;
