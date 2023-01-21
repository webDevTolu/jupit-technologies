import AssetList from "./AssetList";

const AssetsTwo = () => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-y-5 w-screen">
      {/* header */}
      <div className="flex gap-4 pl-6 pr-4 md:px-8 lg:px-10 items-center justify-between text-sm font-inter">
        <h4 className="font-bold text-text-black">Assets</h4>
        <p className="font-semibold text-jupitBlue">See all</p>
      </div>
      {/* content */}
      <AssetList />
    </div>
  );
};

export default AssetsTwo;
