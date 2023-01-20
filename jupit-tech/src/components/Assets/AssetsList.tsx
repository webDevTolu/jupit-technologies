import AssetItem from "./AssetItem";

const AssetsList = () => {
  return (
    <div className="flex gap-x-5 pl-6 w-full overflow-x-hidden">
      <AssetItem />
      <AssetItem />
      <AssetItem />
    </div>
  );
};

export default AssetsList;
