import Assets from "../components/Assets";
import Balance from "../components/Balance";
import FundWithdraw from "../components/FundWithdraw";
import Transactions from "../components/Transactions";

const HomePageOne = () => {
  return (
    <div className="">
      <Balance />
      <FundWithdraw />
      <Assets />
      <Transactions />
    </div>
  );
};

export default HomePageOne;
