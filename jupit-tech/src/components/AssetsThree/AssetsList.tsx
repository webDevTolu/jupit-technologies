import logo from "../../assets/images/logo.png";
import amazon from "../../assets/images/amazon.png";
import AssetItem from "./AssetItem";

const AssetsList = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start pl-6 pr-4 w-full">
      <AssetItem
        image={logo}
        title="Jupit OTC Desk"
        description="Exchange all kinds of gift cards easily"
        bgColor="bg-[#CFE0F6]"
        textColor="text-primary-80"
      />
      <AssetItem
        image={amazon}
        title="Gift cards"
        description="Exchange all kinds of gift cards easily"
        bgColor="bg-[#FFC857]"
        textColor="text-text-black"
      />
    </div>
  );
};
export default AssetsList;
