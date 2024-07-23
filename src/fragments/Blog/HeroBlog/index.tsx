import React from "react";
import { icons } from "../../../components/constants/Icons";

const HeroBlog: React.FC = () => {
  return (
    <div className="py-15 bg-primary">
      <div className="flex relative">
        <img
          src={icons.HeroSwirl}
          alt="heroswirl"
          className="absolute z-10 -top-20 left-0 xl:mr-[128px] "
        />
        <div className=" flex flex-col items-center mx-[290px] relative left-24">
          <h1 className="text-center text-6xl xl:text-[96px] px-24 font-bold leading-[96px] tracking-tighter">
            Article and <span className="text-secondary">News</span>
          </h1>
          <p className="text-center font-medium text-base mt-10 mb-15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam–quis.
          </p>
        </div>
        <img src={icons.HeroStars} alt="heroswirl" className="" />
      </div>
    </div>
  );
};

export default HeroBlog;
