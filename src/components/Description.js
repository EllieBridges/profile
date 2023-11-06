function Description({ title, content, colour, accent }) {
  return (
    <div
      className={`relative mt-14 mx-auto mb-14 border border-0 rounded border-l-8 border-b-8 border-${accent} bg-${colour} p-10 font-inter z-2 sm:mt-0 md:mx-30 lg:w-4/5`}
    >
      <h1 className={`text-2xl text-${accent} my-4  md:text-4xl`}>{title}</h1>
      <p className="font-inter text-white text-sm text-justify md:text-lg">
        {content}
      </p>
    </div>
  );
}

export default Description;
