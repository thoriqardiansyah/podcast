import React from "react";
import { icons } from "../../../components/constants/Icons";
import HeroTitle from "../../../components/HeroTitle";
import PricingCard from "../../../components/PricingCard";

const Pricing: React.FC = () => {
  return (
    <section className="relative py-140">
      <div className="relative">
        <img
          src={icons.BlinkSmall}
          alt="eyebrows"
          className="absolute left-80 -top-12"
        />
        <HeroTitle>Become our sponsor</HeroTitle>
        <p className="text-center px-36 mx-140 text-23 font-medium mt-5">
          Get exclusive episodes, merch and more
        </p>
      </div>

      <div className="relative mt-100 mx-140">
        <img
          src={icons.Star}
          alt=""
          className="absolute -right-16 -top-16 -z-10"
        />
        <PricingCard />
        <img
          src={icons.SpringBlue}
          alt=""
          className="absolute -left-16 -bottom-10 -z-10"
        />
      </div>

      <div className="absolute w-full flex justify-center -bottom-20 z-10">
        <img src={icons.BlackScribble} alt="Scribble Black" />
      </div>
    </section>
  );
};

export default Pricing;
