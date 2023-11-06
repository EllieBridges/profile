function Paragraph({ content, colour, accent }) {
  return (
    <div
      className="relative mx-auto p-4 text-sm text-white text-sm text-justify rounded font-inter z-2 sm:text-lg lg:w-4/5"
      style={{
        backgroundColor: `${accent}`,
        color: `${colour}`,
        borderColor: `${accent}`,
      }}
    >
      <p>{content}</p>
    </div>
  );
}
export default Paragraph;
