import Link from "./Link";

function Footer({ title, content, link, label, path }) {
  return (
    <footer className="grid grid-cols-3 h-fit m-auto items-center text-white text-sm w-full bg-orange font-inter sm:text-lg">
      <div className="col-span-2 ml-3">
        <h2 className="justify-center font-['Sansita_Swashed'] mx-auto">
          {title}
        </h2>
        <h3>{content}</h3>
        <div>
          {link ? (
            <a href={link}>Go to LinkedIn</a>
          ) : (
            <Link
              to={path}
              className="mx-2 sm:mx-5"
              activeClassName="font-bold italic"
            >
              {label}
            </Link>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          className=""
          src="../img/feet.png"
          alt="yeti feet"
          height={300}
          width={300}
        />
      </div>
    </footer>
  );
}

export default Footer;
