import Coin from "../UI/Coin";
import { ReactComponent as BTC } from "../../assets/images/btc.svg";
import { ReactComponent as Dollar } from "../../assets/images/dollar.svg";
import { ReactComponent as Pump } from "../../assets/images/arrow-up.svg";
import { ReactComponent as RepeatIcon } from "../../assets/images/repeat.svg";
import chart from "../../assets/images/chart-micro.png";

const AssetItem = () => {
  return (
    <div className="border-[0.7px] border-lightBorder min-w-[137px] h-[143px] rounded-lg bg-white">
      {/* coins + pump */}
      <div className="flex justify-between items-center pt-1.5 px-3">
        <div className="flex">
          {/* coin */}
          <Coin bgColor="bg-coins-btc" icon={<BTC />} extraClass="" />
          <Coin
            bgColor="bg-coins-dollar"
            icon={<Dollar />}
            extraClass="-ml-1.5"
          />
        </div>
        <span className="text-[10px] font-medium text-pump bg-pump/5 w-12 h-[17px] rounded-[30px]">
          +0.542%
        </span>
      </div>
      {/* price values */}
      <div className="mt-5 flex items-center gap-x-1 px-3">
        <div className="flex flex-col gap-y-1">
          <div className="uppercase text-deepBlue flex items-center gap-x-1 text-xxs leading-xxs font-medium">
            <span>btc</span>
            <span className="h-[13px] w-[13px] rounded-full center bg-[#FFA000]/5">
              <RepeatIcon />
            </span>
            <span>usd</span>
          </div>
          <div className="text-sm text-deepBlue font-bold">$16,600.65</div>
        </div>
        <Pump />
      </div>
      {/* chart */}
      <div className="w-full">
        <img
          src={chart}
          alt="chart"
          className="w-full object-center object-contain"
        />
      </div>
    </div>
  );
};

export default AssetItem;
