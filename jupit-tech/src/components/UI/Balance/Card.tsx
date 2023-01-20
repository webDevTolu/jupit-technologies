import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BalanceCard = ({ children }: Props) => {
  return (
    <div className="min-w-[290px] h-28 rounded-lg p-4 bg-jupitBlue bg-cardBgImage flex justify-between">
      {children}
    </div>
  );
};

export default BalanceCard;
