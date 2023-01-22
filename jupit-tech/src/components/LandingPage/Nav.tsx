import { useState } from "react";
import { Link } from "react-router-dom";
import jupitLogo from "../../assets/images/jupit-logo.png";
import SideBar from "./SideBar";
import NavLink from "./NavLink";

const Nav = () => {
  const [isOPen, setIsOPen] = useState<boolean>(false);

  return (
    <nav className="flex justify-between items-center">
      {/* logo */}
      <Link to="/" className="w-20 h-[50]">
        <img
          src={jupitLogo}
          alt="Jupit Logo"
          className="w-full h-auto object-center object-contain"
        />
      </Link>

      <span
        className="lg:hidden cursor-pointer"
        onClick={() => {
          setIsOPen(true);
        }}
      >
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6 md:w-10 md:h-10 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      {isOPen && (
        <SideBar
          onClose={() => {
            setIsOPen(false);
          }}
        />
      )}
      {/* navLinks */}
      <ul className="hidden lg:flex gap-x-[70px]">
        <NavLink color="text-navLink" to="/" title="About Us" />
        <NavLink color="text-navLink" to="/" title="Product" />
        <NavLink color="text-navLink" to="/" title="Resources" />
        <NavLink color="text-navLink" to="/" title="Contact" />
      </ul>
      {/* buttons */}
      <div className="hidden lg:flex gap-x-[14px]">
        <button
          type="button"
          className="text-jupitBlue border rounded-[5px] w-[131px] h-[59px] flex items-center justify-center border-jupitBlue text-base font-bold"
        >
          Sign In
        </button>
        <button
          type="button"
          className="text-jupitBlue border rounded-[5px] w-[131px] h-[59px] flex items-center justify-center border-jupitBlue text-base font-bold bg-jupit-sec"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Nav;
