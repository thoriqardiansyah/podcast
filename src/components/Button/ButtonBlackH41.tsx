import React from "react";

interface PropType {
  children: React.ReactNode;
}

const ButtonBlackH41: React.FC<PropType> = ({ children }) => {
  return (
    <button
      className={`px-6 py-3 h-[41px] flex items-center bg-black text-white text-sm font-bold rounded-lg uppercase shadow-navbar`}
    >
      {children}
    </button>
  );
};

export default ButtonBlackH41;
