import ButtonSolid from "../UI/Button";
import ButtonOutline from "../UI/Button/Outline";

const FundWithdraw = () => {
  return (
    <div className="grid grid-cols-2 max-w-[328px] gap-x-5 mx-auto">
      <ButtonSolid type="button" text="Fund" />
      <ButtonOutline type="button" text="Withdraw" />
    </div>
  );
};

export default FundWithdraw;
