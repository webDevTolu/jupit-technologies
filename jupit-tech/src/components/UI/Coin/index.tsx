interface CoinProps {
  bgColor: string;
  icon: JSX.Element;
  extraClass?: string;
}
const Coin = ({ bgColor, icon, extraClass }: CoinProps) => {
  const style =
    bgColor +
    " w-[30px] h-[30px] rounded-full flex items-center justify-center " +
    extraClass;

  return <div className={style}>{icon}</div>;
};

export default Coin;
