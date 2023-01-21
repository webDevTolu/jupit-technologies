import TransactionItem from "./TransactionItem";

const TransactionsList = () => {
  return (
    <div className="pl-6 pr-4 md:px-8 w-full flex flex-col gap-y-2">
      <TransactionItem
        date="Jan. 30,2022"
        transaction="credit"
        amount={1000000.0}
        type="deposit"
      />
      <TransactionItem
        date="Jan. 30,2022"
        transaction="debit"
        amount={1000000.0}
        type="transfer"
      />
      <TransactionItem
        date="Jan. 30,2022"
        transaction="credit"
        amount={1000000.0}
        type="deposit"
      />
      {/* <TransactionItem />
      <TransactionItem /> */}
    </div>
  );
};

export default TransactionsList;
