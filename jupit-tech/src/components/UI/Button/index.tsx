interface ButtonProps {
  type: "button" | "submit";
  text: string;
  rounded: boolean;
}

const ButtonSolid = ({ type, text, rounded }: ButtonProps) => {
  const style = `py-4 px-6 ${
    rounded ? "rounded-full" : "rounded-[10px]"
  }  text-white h-[50px] bg-jupitBlue flex items-center justify-center text-xs font-semibold`;
  return (
    <button type={type} className={style}>
      {text}
    </button>
  );
};

export default ButtonSolid;
