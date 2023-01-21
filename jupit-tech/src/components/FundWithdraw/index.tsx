import ButtonSolid from "../UI/Button";
import ButtonOutline from "../UI/Button/Outline";

const FundWithdraw = () => {
  return (
    <div className="grid grid-cols-2 max-w-[328px] gap-x-5 mx-auto">
      <ButtonSolid rounded={false} type="button" text="Fund" />
      <ButtonOutline rounded={false} type="button" text="Withdraw" />
    </div>
  );
};

export default FundWithdraw;
