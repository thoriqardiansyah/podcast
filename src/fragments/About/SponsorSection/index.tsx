import React from "react";
import HeroTitle from "../../../components/HeroTitle";
import { icons } from "../../../components/constants/Icons";
import Sponsor from "../../../components/AboutComponents/Sponsor";

const SponsorSection: React.FC = () => {
  return (
    <section className="bg-primary py-140">
      <img
        src={icons.SparkleStar}
        alt=""
        className="relative top-12 mx-140 left-72"
      />
      <HeroTitle>Our Sponsor</HeroTitle>
      <p className="text-center px-36 text-23 font-medium mt-5">
        Our current official sponsor
      </p>
      <Sponsor />
    </section>
  );
};

export default SponsorSection;
