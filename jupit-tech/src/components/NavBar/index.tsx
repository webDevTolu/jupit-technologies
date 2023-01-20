import Notification from "../UI/Notification";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-[18px] bg-white">
      <div className="text-base font-medium text-gray-80">
        Hi <span className="font-semibold">Femi,</span>
      </div>
      <Notification />
    </nav>
  );
};

export default Navbar;
