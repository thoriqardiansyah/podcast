import React from "react";
import HeroTitle from "../../../components/HeroTitle";
import Episode from "../../../components/Episode";
import { icons } from "../../../components/constants/Icons";
import ButtonBlack from "../../../components/Button/ButtonBlack";

const Content: React.FC = () => {
  return (
    <section className="relative py-140 bg-primary">
      <HeroTitle>Recent Episodes</HeroTitle>
      <p className="text-center px-36 mx-140 text-23 font-medium mt-5">
        Available on your favorite platform
      </p>

      <img
        src={icons.BlinkRed}
        alt="blinkers"
        className="absolute top-60 right-0"
      />
      <Episode />

      <div className="flex justify-center mt-100">
        <ButtonBlack>browse all episodes</ButtonBlack>
      </div>

      <div className="absolute w-full flex justify-center -bottom-20 z-10">
        <img src={icons.BlackScribble} alt="Scribble Black" />
      </div>
    </section>
  );
};

export default Content;
