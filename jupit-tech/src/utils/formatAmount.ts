export const formatAmount = (amount: number) => {
  const amountWithoutDecimals = Math.floor(amount);
  const formattedAmount = new Intl.NumberFormat().format(amountWithoutDecimals);
  const decimals = amount.toFixed(2).split(".")[1];

  return {
    formattedAmount,
    decimals,
  };
};
