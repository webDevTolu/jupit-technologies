import AssetItem from "./AssetItem";
import usdt from "../../assets/images/usdt.png";
import bitcoin from "../../assets/images/bitcoin.png";
import eth from "../../assets/images/eth.png";

const AssetList = () => {
  return (
    <div className="flex gap-x-2 items-start pl-6 md:px-8 lg:px-10 w-full overflow-x-hidden md:grid md:grid-cols-6 lg:grid-cols-8 md:gap-4 lg:gap-6">
      <AssetItem
        image={usdt}
        coin="USDT"
        price={1.05}
        market="pump"
        change="0.65"
      />
      <AssetItem
        image={bitcoin}
        coin="Bitcoin"
        price={16650.37}
        market="dump"
        change="0.65"
      />
      <AssetItem
        image={eth}
        coin="Ethereum"
        price={1207.19}
        market="pump"
        change="0.65"
      />
      <AssetItem
        image={eth}
        coin="Ethereum"
        price={1207.19}
        market="pump"
        change="0.65"
      />
      <AssetItem
        image={bitcoin}
        coin="Bitcoin"
        price={16650.37}
        market="dump"
        change="0.65"
      />
      <AssetItem
        image={eth}
        coin="Ethereum"
        price={1207.19}
        market="pump"
        change="0.65"
      />
      <AssetItem
        image={eth}
        coin="Ethereum"
        price={1207.19}
        market="pump"
        change="0.65"
      />
      <AssetItem
        image={usdt}
        coin="USDT"
        price={1.05}
        market="pump"
        change="0.65"
      />
    </div>
  );
};

export default AssetList;
