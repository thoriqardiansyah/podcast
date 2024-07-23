import React from "react";
import HeroTitle from "../../../components/HeroTitle";
import { icons } from "../../../components/constants/Icons";
import Benefits from "../../../components/Benefits";
import ButtonBlack from "../../../components/Button/ButtonBlack";

const Membership: React.FC = () => {
  return (
    <section className="relative py-140">
      <div className="relative">
        <img
          src={icons.Eyebrows}
          alt="eyebrows"
          className="absolute right-60 -top-40"
        />
        <HeroTitle>Membership benefits</HeroTitle>
        <p className="text-center px-36 mx-140 text-23 font-medium mt-5">
          Become our sponsor and get all benefits
        </p>
      </div>

      <Benefits />

      <div className="flex justify-center mt-100">
        <ButtonBlack>see pricing</ButtonBlack>
      </div>

      <div className="absolute w-full flex justify-center -bottom-20 z-10">
        <img src={icons.BlackScribble} alt="Scribble Black" />
      </div>
    </section>
  );
};

export default Membership;
