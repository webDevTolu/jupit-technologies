export const formatAmount = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat().format(amount);
  const decimals = amount.toFixed(2).split(".")[1];

  return {
    formattedAmount,
    decimals,
  };
};
