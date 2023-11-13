import Link from "./Link";

function NavBar() {
  const links = [
    { label: "Ellie Bridges", path: "/" },
    { label: "Colour", path: "/colour" },
    { label: "Map", path: "/map" },
    { label: "Gallery", path: "/gallery" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mx-2 sm:mx-5"
        activeClassName="font-bold italic"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="fixed top-0 px-5 right-0 z-10 bg-white w-full sm:py-5">
      <div className="grid grid-cols-4 h-24 items-center justify-items-center font-inter-400 text-sm font-bold bg-white overflow-y-scroll flex flex-row sm:justify-items-center sm:text-lg sm:font-normal sm:justify-evenly md:p-50 md:left-0 md:text-2xl">
        {renderedLinks}
      </div>
    </div>
  );
}

export default NavBar;
