import React from "react";

interface PropType {
  children: React.ReactNode;
}

const ButtonBorder: React.FC<PropType> = ({ children }) => {
  return (
    <button
      className={`px-6 py-3 h-[41px] flex items-center border-2 border-black text-sm font-bold rounded-lg uppercase`}
    >
      {children}
    </button>
  );
};

export default ButtonBorder;
