interface ButtonProps {
  type: "button" | "submit";
  text: string;
  rounded: boolean;
}

const ButtonOutline = ({ type, text, rounded }: ButtonProps) => {
  const style = `py-4 px-6 ${
    rounded ? "rounded-full" : "rounded-[10px]"
  } text-text-100 bg-white h-[50px] border border-jupitBlue/20 flex items-center justify-center text-xs font-semibold`;
  return (
    <button type={type} className={style}>
      {text}
    </button>
  );
};

export default ButtonOutline;
