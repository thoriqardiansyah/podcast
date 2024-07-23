import React from "react";
interface PropType {
  children: React.ReactNode;
}
const ButtonBlack160: React.FC<PropType> = ({ children }) => {
  return (
    <button className="px-9 py-3 font-bold text-sm text-white bg-black shadow-[6px_6px_0_0_rgba(0, 0, 0, .25)] uppercase rounded-lg">
      {children}
    </button>
  );
};

export default ButtonBlack160;
