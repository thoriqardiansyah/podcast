// import React from "react";
import { icons } from "../../../components/constants/Icons";
import ButtonBorder from "../../../components/Button/ButtonBorder";
import ButtonBlack from "../../../components/Button/ButtonBlack";
import PriceCard from "../../../components/AboutComponents/PriceCard";

const Home = () => {
  return (
    <section className="relative bg-primary pb-140">
      <div className="flex justify-between">
        <img src={icons.HeroSwirl} alt="swirl" />
        <div className="flex flex-col items-center relative -left-16 mt-16">
          <div className="font-bold text-8xl text-center w-[530px] ">
            <h1>About</h1>
            <span className="text-secondary tracking-tighter">Pod of Cast</span>
          </div>
          <p className="font-medium text-base px-32 text-center mt-30 mb-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam–quis.
          </p>
          <div className="flex gap-x-5">
            <ButtonBorder>become sponsor</ButtonBorder>
            <ButtonBlack>subscribe</ButtonBlack>
          </div>
        </div>
        <img src={icons.HeroStars} alt="swirl" className="relative -top-16" />
      </div>

      <PriceCard />
    </section>
  );
};

export default Home;
