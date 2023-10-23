import Link from "./Link";

function NavBar() {
  const links = [
    { label: "Home", path: "/" },
    { label: "Read", path: "/articles" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mr-3"
        activeClassName="font-bold"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="m-2 sticky top-0 overflow-y-scroll flex flex-row justify-evenly">
      {renderedLinks}
    </div>
  );
}

export default NavBar;
