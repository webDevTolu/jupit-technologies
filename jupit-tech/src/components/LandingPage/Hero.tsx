import Nav from "./Nav";
import masthead from "../../assets/images/masthead.png";
import card1 from "../../assets/images/card-1.png";
import card2 from "../../assets/images/card-2.png";
import QuickBuy from "./QuickBuy";

const Hero = () => {
  return (
    <div className="w-screen h-auto lg:h-screen bg-white px-4 py-6 lg:pt-11 lg:px-[100px] overflow-x-hidden">
      <Nav />
      <div className="w-full grid grid-cols-1 gap-y-4 lg:grid-cols-3 border mt-8 md:h-mt-4">
        {/* content */}
        <div className="w-full md:col-span-2 flex flex-col items-start gap-y-6 md:gap-y-8 lg:gap-y-12">
          <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-6 items-start">
            <h1 className="md:text-[40px] text-[32px] lg:text-[52px] font-semibold text-text-100">
              Make easy digital assets transactions anywhere, anytime with
              Jupit.
            </h1>
            <p className="w-full md:w-5/6 lg:w-[70%] lg:text-[20px] font-medium">
              A place for everyone who wants to simply buy and sell digital
              assets, it just takes 120 seconds!
            </p>
          </div>
          {/* button */}
          <button
            type="button"
            className="bg-jupit-sec text-ctaBlue font-semibold text-base rounded-[10px] w-[193px] h-14 flex items-center justify-center"
          >
            Get Started
          </button>
        </div>
        {/* image */}
        <div className="border border-red-900 w-full h-auto relative">
          <img
            src={masthead}
            alt="masthead"
            className="w-auto h-full object-contain object-center border border-blue-900 lg:-mt-8"
          />
          <img
            src={card1}
            alt="card-1"
            className="absolute bottom-0.5 lg:bottom-1 left-0 lg:left-1"
          />
          <img
            src={card2}
            alt="card-2"
            className="absolute bottom-0.5 top-[55%] lg:top-[60%] right-1"
          />
          <div className="lg:w-[261.99px] w-full h-[220.69px] mt-4 lg:absolute top-[10%] -left-32">
            <QuickBuy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
