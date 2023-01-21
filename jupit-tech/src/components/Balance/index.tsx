import { HideAmountProvider } from "../../store/hide-amount";
import BalanceCard from "../UI/Balance/Card";
import CurrencyName from "./CurrencyName";
import Price from "./Price";

const Balance = () => {
  return (
    <HideAmountProvider>
      <div className="px-5 py-[18px] bg-white w-screen">
        {/* card */}
        <div className="overflow-x-hidden w-full flex gap-x-2">
          <BalanceCard>
            <div className="flex flex-col gap-y-3">
              <CurrencyName name="Naira" />
              <Price nairaAmount={89909009.06} dollarAmount={340.56} />
            </div>

            <span className="mr-[18px] text-xs text-primaryBlue">Jupit</span>
          </BalanceCard>
          <BalanceCard>
            <div className="flex flex-col gap-y-3">
              <CurrencyName name="Bitcoin" />
              <Price nairaAmount={89909009.06} dollarAmount={340.56} />
            </div>

            <span className="mr-[18px] text-xs text-primaryBlue">Jupit</span>
          </BalanceCard>
        </div>
        {/* slider */}
        <div className="flex items-center gap-x-1.5 mt-4 w-max mx-auto">
          <span className="h-1 w-1 rounded-full bg-gray-50"></span>
          <span className="h-1 w-1 rounded-full bg-gray-50/50"></span>
          <span className="h-1 w-1 rounded-full bg-gray-50/50"></span>
        </div>
      </div>
    </HideAmountProvider>
  );
};

export default Balance;
