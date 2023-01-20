import { ReactComponent as EyesClosedIcon } from "../../assets/images/eyes-closed.svg";

interface CurrencyNameProps {
  name: string;
}

const CurrencyName = ({ name }: CurrencyNameProps) => {
  return (
    <div className="flex items-center text-xs text-primaryBlue gap-x-2">
      {name} Balance{" "}
      <span>
        <EyesClosedIcon />
      </span>
    </div>
  );
};

export default CurrencyName;
