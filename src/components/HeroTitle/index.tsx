import React from "react";

interface PropType {
  children: React.ReactNode;
}

const HeroTitle: React.FC<PropType> = ({ children }) => {
  return (
    <h3 className="text-15 font-bold text-center px-36 mx-140">{children}</h3>
  );
};

export default HeroTitle;
