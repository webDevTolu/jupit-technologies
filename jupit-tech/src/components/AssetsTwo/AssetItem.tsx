import { ReactComponent as PumpIcon } from "../../assets/images/pump.svg";
import { ReactComponent as DumpIcon } from "../../assets/images/dump.svg";
import { formatAmount } from "../../utils/formatAmount";

interface AssetInterface {
  image: string;
  coin: string;
  price: number;
  change: string;
  market: "pump" | "dump";
}

const AssetItem = ({ image, coin, price, change, market }: AssetInterface) => {
  const formattedPrice = formatAmount(price);
  return (
    <div className="border border-gray-10 min-w-[100px] h-auto rounded-lg p-2 bg-white flex flex-col items-start gap-y-4">
      {/* image */}
      <img
        src={image}
        alt={coin}
        className="w-7 h-7 rounded-full object-center object-contain"
      />
      {/* content*/}
      <div className="flex flex-col gap-y-1">
        <h4 className="text-sm text-text-black font-pop font-semibold">
          ${formattedPrice.formattedAmount}
        </h4>
        <h5 className="text-xs font-medium font-pop text-gray-50">{coin}</h5>
        <div className="flex gap-x-1 items-center">
          {market === "pump" && <PumpIcon />}
          {market === "dump" && <DumpIcon />}
          <span
            className={`${
              market === "pump" ? "text-success" : "text-error"
            } text-xs font-medium font-pop`}
          >
            -{change}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AssetItem;
