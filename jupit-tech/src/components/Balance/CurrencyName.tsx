import { useContext } from "react";
import { ReactComponent as EyesClosedIcon } from "../../assets/images/eyes-closed.svg";
import { ReactComponent as EyesOpenIcon } from "../../assets/images/eyes-open.svg";
import { HideAmountContext } from "../../store/hide-amount";

interface CurrencyNameProps {
  name: string;
}

const CurrencyName = ({ name }: CurrencyNameProps) => {
  const { hideAmount, setHideAmount } = useContext(HideAmountContext);

  return (
    <div className="flex items-center text-xs text-primaryBlue gap-x-2">
      {name} Balance{" "}
      {hideAmount ? (
        <span
          onClick={() => {
            setHideAmount(false);
          }}
          className="cursor-pointer"
        >
          <EyesOpenIcon />
        </span>
      ) : (
        <span
          onClick={() => {
            setHideAmount(true);
          }}
          className="cursor-pointer"
        >
          <EyesClosedIcon />
        </span>
      )}
    </div>
  );
};

export default CurrencyName;
