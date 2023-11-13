import classNames from "classnames";

function Paragraph({ content, colour, accent, className }) {
  const classes = classNames(
    "relative p-4 text-sm text-white text-sm text-justify font-sans z-2 md:text-lg lg:text-2xl ",
    className
  );
  return (
    <div
      className={classes}
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
