import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BalanceCard = ({ children }: Props) => {
  return (
    <div className="min-w-[290px] h-28 md:h-auto rounded-lg p-4 bg-jupitBlue bg-cardBgImage bg-right bg-auto bg-no-repeat flex justify-between">
      {children}
    </div>
  );
};

export default BalanceCard;
