interface ButtonProps {
  type: "button" | "submit";
  text: string;
}

const ButtonOutline = ({ type, text }: ButtonProps) => {
  return (
    <button
      type={type}
      className="py-4 px-6 rounded-[10px] text-text-100 bg-white h-[50px] border border-jupitBlue/20 flex items-center justify-center text-xs font-semibold"
    >
      {text}
    </button>
  );
};

export default ButtonOutline;
