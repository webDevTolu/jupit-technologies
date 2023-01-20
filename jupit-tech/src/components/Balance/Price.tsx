import { useEffect, useState } from "react";
import { formatAmount } from "../../utils/formatAmount";

interface PriceProps {
  nairaAmount: number;
  dollarAmount: number;
}

interface StateProps {
  formattedAmount: string;
  decimals: string;
}

const Price = ({ nairaAmount, dollarAmount }: PriceProps) => {
  const [formattedNairaAmount, setFormattedNairaAmount] = useState<StateProps>({
    formattedAmount: "",
    decimals: "",
  });
  const [formattedDollarAmount, setFormattedDollarAmount] =
    useState<StateProps>({ formattedAmount: "", decimals: "" });

  useEffect(() => {
    const formattedNaira = formatAmount(nairaAmount);
    const formattedDollar = formatAmount(dollarAmount);

    setFormattedNairaAmount(formattedNaira);
    setFormattedDollarAmount(formattedDollar);
  }, [nairaAmount, dollarAmount]);

  return (
    <div className="flex flex-col items-start gap-y-1">
      <div className="text-xl text-badgeText font-semibold">
        ₦{formattedNairaAmount.formattedAmount}
        <sup className="text-xs font-medium">
          .{formattedNairaAmount.decimals}
        </sup>
      </div>
      <div className="text-sm text-badgeText">
        {"="} ${formattedDollarAmount.formattedAmount}.
        {formattedDollarAmount.decimals}
      </div>
    </div>
  );
};

export default Price;
