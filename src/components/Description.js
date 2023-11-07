function Description({ title, content, colour, accent, softwares, skills }) {
  return (
    <div
      className={`relative mt-24 text-white text-sm mx-auto mb-14 border border-0 rounded border-l-8 border-b-8 p-4 font-inter z-2 sm:text-lg sm:mt-32 md:mx-30 lg:w-4/5`}
      style={{ borderColor: `${accent}`, backgroundColor: `${colour}` }}
    >
      <h1
        className={`text-2xl font-bold my-4 md:text-4xl`}
        style={{ color: `${accent}` }}
      >
        {title}
      </h1>
      <p className="font-inter my-4 text-justify md:text-lg">{content}</p>
      <h2
        className="font-bold text-2xl text-center mt-10"
        style={{ color: `${accent}` }}
      >
        Technical Skills
      </h2>
      <div className="place-items-center flex flex-col sm:flex-row sm:justify-evenly">
        <div className="m-3 sm:self-start">
          <h2 className="font-bold text-lg sm:text-xl">Software</h2>
          <ul className="w-[200px] sm:w-fit">
            {softwares.map((software) => {
              return (
                <li key={software} className="list-disc text-left">
                  {software}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="m-3 sm:self-start">
          <h2 className="font-bold text-lg sm:text-xl">Skills</h2>
          <ul className="w-[200px] sm:w-fit">
            {skills.map((skill) => {
              return (
                <li key={skill} className="list-disc text-left">
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Description;
