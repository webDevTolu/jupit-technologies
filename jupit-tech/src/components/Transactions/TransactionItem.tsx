import { formatAmount } from "../../utils/formatAmount";
import { ReactComponent as CreditIcon } from "../../assets/images/credit.svg";
import { ReactComponent as DebitIcon } from "../../assets/images/debit.svg";

interface TransactionItemProps {
  date: string;
  amount: number;
  type: string;
  transaction: "credit" | "debit";
}
const TransactionItem = ({
  date,
  amount,
  type,
  transaction,
}: TransactionItemProps) => {
  const formattedAmount = formatAmount(amount);

  return (
    <div className="w-full flex justify-between items-start p-2">
      <div className="flex gap-x-2 items-center">
        <span>
          {transaction === "credit" && <CreditIcon />}
          {transaction === "debit" && <DebitIcon />}
        </span>
        <div className="flex flex-col gap-y-1 text-xs font-pop text-primary-100 leading-140">
          <span className="font-semibold">
            ₦{formattedAmount.formattedAmount}.{formattedAmount.decimals}
          </span>
          <span className="capitalize">{type}</span>
        </div>
      </div>
      <span className="text-xs font-pop text-primary-100 leading-140">
        {date}
      </span>
    </div>
  );
};

export default TransactionItem;
