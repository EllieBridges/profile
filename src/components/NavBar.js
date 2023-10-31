import Link from "./Link";

function NavBar() {
  const links = [
    { label: "Home", path: "/" },
    { label: "Colour", path: "/colour" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mx-5"
        activeClassName="font-bold text-hot-pink"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="fixed top-0 right-0 md:left-0 z-10 bg-white p-10 w-screen">
      <div className="font-inter-400 text-lg top-0 right-0 bg-white overflow-y-scroll flex flex-row content-center sm:justify-evenly md:p-50 md:left-0">
        {renderedLinks}
      </div>
    </div>
  );
}

export default NavBar;
