import AssetsTwo from "../components/AssetsTwo";
import Balance from "../components/Balance";
import FundWithdraw from "../components/FundWithdraw";
import Transactions from "../components/Transactions";

const HomePageTwo = () => {
  return (
    <div className="">
      <Balance />
      <FundWithdraw />
      <AssetsTwo />
      <Transactions />
    </div>
  );
};

export default HomePageTwo;
