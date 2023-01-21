import AssetItem from "./AssetItem";

const AssetsList = () => {
  return (
    <div className="flex gap-x-5 pl-6 w-full overflow-x-hidden md:grid md:grid-cols-4 md:gap-5 md:px-8">
      <AssetItem />
      <AssetItem />
      <AssetItem />
      <AssetItem />
      <AssetItem />
    </div>
  );
};

export default AssetsList;
