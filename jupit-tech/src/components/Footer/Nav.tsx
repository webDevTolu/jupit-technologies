interface NavProps {
  icon: JSX.Element;
  title: string;
  extraClass?: string;
}

const Nav = ({ icon, title, extraClass }: NavProps) => {
  return (
    <div
      className={`flex flex-col h-11 items-center justify-center ${extraClass}`}
    >
      <span>{icon}</span>
      <span className="font-pop text-xs font-semibold text-jupitBlue">
        {title}
      </span>
    </div>
  );
};

export default Nav;
