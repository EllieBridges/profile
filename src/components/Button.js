import classNames from "classnames";

function Button({ children, className, handleClick }) {
  const classes = classNames(
    "p-3 text-white text-center rounded w-fit",
    className
  );
  return (
    <button onClick={handleClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
