import { useEffect, useState } from "react";
import Assets from "../components/Assets";
import Balance from "../components/Balance";
import FundWithdraw from "../components/FundWithdraw";
import Transactions from "../components/Transactions";
import { getCryptoPrice } from "../services/prices";

const HomePageOne = () => {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    getCryptoPrice("bitcoin", "usd").then((res) => {
      setPrice(res);
    });
  }, []);

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
