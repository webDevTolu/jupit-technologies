import { Link } from "react-router-dom";
import transaction from "../../assets/images/transaction.png";

const OurServices = () => {
  return (
    <div className="bg-lightBorder p-6 md:p-10 lg:px-24 lg:py-[75px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-4 lg:gap-4">
      <div className="rounded-[25px] backdrop-blur-[20px] bg-white shadow-services flex flex-col h-[314px] w-full gap-y-4 items-center px-6 pt-8 pb-11">
        {/* text */}
        <div className="w-full flex flex-col gap-y-4 items-center">
          <img
            src={transaction}
            alt="transaction"
            className="w-16 h-16 rounded-full object-center object-contain"
          />
          <h4 className="text-lg lg:text-[24px] font-bold leading-[41.6px]">
            Fast Transaction
          </h4>
          <p className="text-sm lg:text-base leading-[22.4px] text-center">
            Invest in crypto anytime, anywhere with our safe, secure, and easy
            to use online platform
          </p>
        </div>
        {/* button */}
        <Link
          to="/"
          className="flex gap-x-[6px] items-center justify-center text-jupitBlue"
        >
          <p className="text-base">Get Started</p>
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
