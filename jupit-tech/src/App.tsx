import Assets from "./components/Assets";
import Balance from "./components/Balance";
import FundWithdraw from "./components/FundWithdraw";

export default function App() {
  return (
    <div className="">
      <Balance />
      <FundWithdraw />
      <Assets />
    </div>
  );
}
