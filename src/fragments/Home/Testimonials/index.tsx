import React from "react";
import HeroTitle from "../../../components/HeroTitle";
import { icons } from "../../../components/constants/Icons";
import Testimoni from "../../../components/Testimoni";

const Testimonials: React.FC = () => {
  return (
    <div className="relative py-140 bg-third">
      <div className="relative">
        <img
          src={icons.SparkleStar}
          alt="Blink"
          className="absolute -top-16 left-64"
        />
        <HeroTitle>What our listeners say</HeroTitle>
        <p className="text-center px-36 mx-140 text-23 font-medium mt-5">
          Their experience throughout every platform
        </p>
      </div>

      <Testimoni />

      <div className="absolute w-full flex justify-center -bottom-20 z-10">
        <img src={icons.BlackScribble} alt="Scribble Black" />
      </div>
    </div>
  );
};

export default Testimonials;
