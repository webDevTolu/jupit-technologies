import AssetsThree from "../components/AssetsThree";
import Balance from "../components/Balance";
import FundWithdraw from "../components/FundWithdraw";
import Transactions from "../components/Transactions";

const HomePageThree = () => {
  return (
    <div className="">
      <Balance />
      <FundWithdraw />
      <AssetsThree />
      <Transactions />
    </div>
  );
};

export default HomePageThree;
