import { ReactComponent as HomeIcon } from "../../assets/images/home.svg";
import { ReactComponent as WalletIcon } from "../../assets/images/wallet.svg";
import { ReactComponent as TransactionsIcon } from "../../assets/images/transactions.svg";
import { ReactComponent as MoreIcon } from "../../assets/images/more.svg";
import { ReactComponent as SwapIcon } from "../../assets/images/swap.svg";
import { Fragment } from "react";
import Nav from "./Nav";

const Footer = () => {
  return (
    <Fragment>
      <div className="h-20 w-full relative bottom-0 left-0 border border-[#EBEBEB] rounded-[32px]">
        <div className="absolute w-full h-full bottom-0 left-0 flex items-center justify-evenly">
          <Nav icon={<HomeIcon />} title="Home" />
          <Nav icon={<WalletIcon />} title="Wallet" />
          <Nav icon={<WalletIcon />} title="Wallet" extraClass="invisible" />
          <Nav icon={<TransactionsIcon />} title="Transactions" />
          <Nav icon={<MoreIcon />} title="More" />
        </div>
        <div className="w-16 h-16 rounded-full p-4 center bg-jupitBlue shadow-mainNav absolute-center">
          <SwapIcon />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
