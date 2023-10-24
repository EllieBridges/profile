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
        className="mx-5"
        activeClassName="font-bold"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="fixed top-10 right-0 overflow-y-scroll flex flex-row sm:justify-evenly md:ml-10 md:left-0 z-10">
      {renderedLinks}
    </div>
  );
}

export default NavBar;
