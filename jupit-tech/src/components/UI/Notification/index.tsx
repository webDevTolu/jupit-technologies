import { ReactComponent as Bell } from "../../../assets/images/bell.svg";

const Notification = () => {
  return (
    <div className="flex items-center">
      <Bell />
      <span className="w-4 h-4 rounded-full bg-badge text-badgeText flex items-center justify-center text-[10px] -ml-3 mb-1">
        3
      </span>
    </div>
  );
};

export default Notification;
