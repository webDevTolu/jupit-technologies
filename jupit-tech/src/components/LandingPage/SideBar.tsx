import NavLink from "./NavLink";

interface SideBarProps {
  onClose: () => void;
}

const SideBar = ({ onClose }: SideBarProps) => {
  return (
    <div className="absolute top-0 right-0 w-3/4 md:w-1/2 h-screen bg-jupitBlue flex flex-col justify-between p-4 py-6">
      {/* close icon */}
      <span onClick={onClose} className="flex justify-end text-white">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6 md:w-10 md:h-10"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </span>
      {/* nav links */}
      <ul className="lg:hidden flex flex-col items-center gap-y-12 text-white mt-12 text-lg">
        <NavLink color="text-white" to="/" title="About Us" />
        <NavLink color="text-white" to="/" title="Product" />
        <NavLink color="text-white" to="/" title="Resources" />
        <NavLink color="text-white" to="/" title="Contact" />
      </ul>
      {/* buttons */}
      <div className="lg:hidden flex flex-col gap-y-[14px] items-center">
        <button
          type="button"
          className="text-white border rounded-[5px] w-3/4 h-[59px] flex items-center justify-center border-white text-base font-bold"
        >
          Sign In
        </button>
        <button
          type="button"
          className="text-jupitBlue border rounded-[5px] w-3/4 h-[59px] flex items-center justify-center border-jupitBlue text-base font-bold bg-jupit-sec"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default SideBar;
