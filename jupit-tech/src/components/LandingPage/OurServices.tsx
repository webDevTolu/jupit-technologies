import { Link } from "react-router-dom";
import transaction from "../../assets/images/transaction.png";
import transactionBlue from "../../assets/images/transaction-1.png";

const OurServices = () => {
  return (
    <div className="bg-lightBorder p-6 md:p-10 lg:p-16 flex items-center justify-center">
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 md:gap-4 lg:gap-6">
        <Card
          image={transaction}
          title="Fast Transaction"
          description="Invest in crypto anytime, anywhere with our safe, secure, and easy to
          use online platform"
          to="/"
        />
        <Card
          image={transaction}
          title="Secure Wallet"
          description="Invest in crypto anytime, anywhere with our safe, secure, and easy to
          use online platform"
          to="/"
        />
        <Card
          image={transaction}
          title="Built for You"
          description="Invest in crypto anytime, anywhere with our safe, secure, and easy to
          use online platform"
          to="/"
        />
        <Card
          image={transactionBlue}
          title="Customer First"
          description="Invest in crypto anytime, anywhere with our safe, secure, and easy to
          use online platform"
          to="/"
          color="text-inactive"
          bgColor="bg-cardLinearGradient"
        />
      </div>
    </div>
  );
};

export default OurServices;

interface CardProps {
  image: string;
  title: string;
  description: string;
  to: string;
  bgColor?: string;
  color?: string;
}

export const Card = ({
  image,
  title,
  description,
  to,
  bgColor,
  color,
}: CardProps) => {
  const style = `${
    bgColor ? bgColor : "bg-white"
  } rounded-[25px] backdrop-blur-[20px] shadow-services flex flex-col h-[314px] w-[320px] gap-y-4 items-center px-6 py-8`;

  return (
    <div className={style}>
      {/* text */}
      <div className="w-full flex flex-col gap-y-4 items-center">
        <img
          src={image}
          alt={title}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-center object-contain"
        />
        <h4
          className={`${
            color ? color : "text-navLink"
          } text-lg lg:text-[24px] font-bold leading-[41.6px]`}
        >
          {title}
        </h4>
        <p
          className={`${
            color ? color : "text-navLink"
          } text-sm lg:text-base leading-[22.4px] text-center`}
        >
          {description}
        </p>
      </div>
      {/* button */}
      <Link
        to={to}
        className={`${
          color ? color : "text-jupitBlue"
        } flex gap-x-[6px] items-center justify-center`}
      >
        <p className="text-sm md:text-base">Get Started</p>
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};
