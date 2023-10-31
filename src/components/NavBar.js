import Link from "./Link";
import Name from "./Name";

function NavBar() {
  const links = [
    { label: "Ellie Bridges", path: "/" },
    { label: "Colour", path: "/colour" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mx-2 sm:mx-5"
        activeClassName="font-bold text-hot-pink"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="fixed top-0 py-7 px-5 right-0 z-10 bg-white w-screen sm:p-10">
      <div className="grid grid-cols-4 items-center justify-items-end font-inter-400 text-sm font-bold bg-white overflow-y-scroll flex flex-row sm:justify-items-center sm:text-lg sm:font-normal sm:justify-evenly md:p-50 md:left-0">
        {renderedLinks}
      </div>
    </div>
  );
}

export default NavBar;
