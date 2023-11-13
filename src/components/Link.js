import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({ to, children, className, activeClassName }) {
  const { currentPath, navigate } = useNavigation();

  //if user holding command(meta) or ctrl key allow new window to be opened, else prevent default refresh
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  const classes = classNames(
    "text-black",
    className,
    currentPath === to && activeClassName,
    children === "Ellie Bridges" &&
      "font-['Sansita_Swashed'] italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange text-left"
  );

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
