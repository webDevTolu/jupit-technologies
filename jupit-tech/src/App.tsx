import Assets from "./components/Assets";
import Balance from "./components/Balance";
import FundWithdraw from "./components/FundWithdraw";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <div className="font-pop text-bold text-blue-800">
      <Navbar />
      <Balance />
      <FundWithdraw />
      <Assets />
    </div>
  );
}
