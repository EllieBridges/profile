import classNames from "classnames";

function Button({ children, className, handleClick }) {
  const classes = classNames("p-3 text-white rounded", className);
  return (
    <button onClick={handleClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
