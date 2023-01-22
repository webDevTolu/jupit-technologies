import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  title: string;
  color: string;
}

const NavLink = ({ to, title, color }: NavLinkProps) => {
  const style = `${color} text-base leading-[20px]`;
  return (
    <li>
      <Link to={to} className={style}>
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
