interface ButtonProps {
  type: "button" | "submit";
  text: string;
}

const ButtonSolid = ({ type, text }: ButtonProps) => {
  return (
    <button
      type={type}
      className="py-4 px-6 rounded-[10px] text-white h-[50px] bg-jupitBlue flex items-center justify-center text-xs font-semibold"
    >
      {text}
    </button>
  );
};

export default ButtonSolid;
