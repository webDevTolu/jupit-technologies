interface ProductsInterface {
  image: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const AssetItem = ({
  image,
  title,
  description,
  bgColor,
  textColor,
}: ProductsInterface) => {
  const style = `${bgColor} ${textColor} w-full h-20 md:h-auto p-4 md:p-6 lg:p-8 rounded-lg grid grid-cols-5 gap-x-4`;

  return (
    <div className={style}>
      <img src={image} alt={title} className="col-span-1" />
      <div className="flex flex-col gap-y-2 col-span-4">
        <h3 className="font-semibold font-pop text-sm md:text-base lg:text-lg">
          {title}
        </h3>
        <p className="text-xs lg:text-base font-pop">{description}</p>
      </div>
    </div>
  );
};
export default AssetItem;
