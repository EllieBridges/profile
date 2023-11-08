import Button from "./Button";
import classNames from "classnames";

function GrantAccess({ handleClick, children, className }) {
  const classes = classNames("m-2 p-2 rounded font-inter", className);
  return (
    <Button className={classes} handleClick={handleClick}>
      {children}
    </Button>
  );
}
export default GrantAccess;
