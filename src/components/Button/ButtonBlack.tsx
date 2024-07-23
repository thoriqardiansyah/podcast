import React from "react";

interface PropType {
  children: React.ReactNode;
  style?: string;
}

const ButtonBlack: React.FC<PropType> = ({ children, style }) => {
  return <button className={`buttons ${style}`}>{children}</button>;
};

export default ButtonBlack;
