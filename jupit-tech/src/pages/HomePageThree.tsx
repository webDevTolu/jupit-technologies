import AssetsThree from "../components/AssetsThree";
import Balance from "../components/Balance";
import Transactions from "../components/Transactions";
import ButtonSolid from "../components/UI/Button";
import ButtonOutline from "../components/UI/Button/Outline";

const HomePageThree = () => {
  return (
    <div className="">
      <Balance />
      <div className="grid grid-cols-2 max-w-[328px] gap-x-5 mx-auto">
        <ButtonSolid rounded={true} type="button" text="Fund" />
        <ButtonOutline rounded={true} type="button" text="Withdraw" />
      </div>
      <AssetsThree />
      <Transactions />
    </div>
  );
};

export default HomePageThree;
