import bigStar from "../../assets/images/star-img-big.png";
import { ReactComponent as RankIcon } from "../../assets/images/rank.svg";
import { ReactComponent as FlashIcon } from "../../assets/images/flash.svg";
import { ReactComponent as EmptyWalletIcon } from "../../assets/images/empty-wallet.svg";
import { ReactComponent as BuyCryptoIcon } from "../../assets/images/buy-crypto.svg";

const BestServices = () => {
  return (
    <div className="w-full bg-white relative flex flex-col gap-20">
      <img
        src={bigStar}
        alt="big star"
        className="absolute w-auto h-auto object-contain object-center -top-8 right-2"
      />
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 w-full md:w-5/6 lg:w-3/4 mx-auto p-3 md:p-0">
        <Content
          icon={
            <FlashIcon className="w-8 h-8 md:w-10 md:h-12 lg:w-12 lg:h-12" />
          }
          title="Fast Transaction"
          description="Fast and easy-to-use trading services in one integrated platform."
        />
        <Content
          icon={
            <EmptyWalletIcon className="w-8 h-8 md:w-10 md:h-12 lg:w-12 lg:h-12" />
          }
          title="Secure Wallet"
          description="You can rest easy knowing that your asset is safe with us anytime."
        />
        <Content
          icon={
            <BuyCryptoIcon className="w-8 h-8 md:w-10 md:h-12 lg:w-12 lg:h-12" />
          }
          title="Built for You"
          description="We want anyone & everyone in need for cryptocurrency gets prompt and clear access to their transactions."
        />
        <Content
          icon={
            <RankIcon className="w-8 h-8 md:w-10 md:h-12 lg:w-12 lg:h-12" />
          }
          title="Customer First"
          description="We pride ourselves on providing excellent customer service."
        />
      </div>
      <div className="w-5/6 bg-[#EDEDF6] rounded-[24px]"></div>
    </div>
  );
};

export default BestServices;

export const Header = () => {
  return (
    <div className="mt-10 md:mt-12 lg:mt-16 w-5/6 md:w-3/4 mx-auto text-center flex flex-col gap-8 md:gap-10 lg:gap-12 justify-center">
      <h3 className="text-deepBlue font-bold text-[36px] md:text-[48px] lg:text-[60px] w-full md:w-3/4 text-center mx-auto">
        Best services that works for you
      </h3>
      <p className="text-[#777777] font-medium w-full md:w-5/6 lg:w-3/4 text-center mx-auto text-base md:text-lg lg:text-[20px]">
        We provide a wide range of services to our users. Take a look at few of
        the solutions to expect from us.
      </p>
    </div>
  );
};

interface ContentCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const Content = ({ icon, title, description }: ContentCardProps) => {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-10 lg:gap-y-12 items-center py-6">
      {/* icon */}
      <span className="bg-[#F2921D26] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center">
        {icon}
      </span>
      {/* title */}
      <h5 className="text-deepBlue font-bold text-[24px] md:text-[28px] lg:text-[32px] text-center ">
        {title}
      </h5>
      {/* description */}
      <p className="text-[#777] font-medium text-sm md:text-base lg:text-lg w-3/4 md:w-5/6 text-center">
        {description}
      </p>
    </div>
  );
};
