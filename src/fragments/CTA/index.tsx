import React from "react";
import { icons } from "../../components/constants/Icons";
import ButtonBlack160 from "../../components/Button/ButtonBlack160";

const CTA: React.FC = () => {
  return (
    <section className="relative pt-140 bg-third flex gap-[50px] -z-50 overflow-hidden border-b border-black">
      <img src={icons.Home} alt="home" className="relative -bottom-40" />
      <img
        src={icons.SparkleStar}
        alt="sparkle"
        className="absolute scale-150 bottom-[355px] left-5 rotate-180"
      />
      <img
        src={icons.SparkleStar}
        alt="sparkle"
        className="absolute scale-75 left-32 bottom-[400px] rotate-15"
      />
      <img
        src={icons.SparkleStar}
        alt="sparkle"
        className="absolute scale-50 left-20 bottom-[460px] rotate-90"
      />
      <div className=" relative -left-9 flex flex-col items-center mt-9">
        <span className="font-bold text-sm px-six py-three text-secondary rounded-md border-2 border-secondary uppercase text-center ">
          beta
        </span>
        <h2 className="text-15 font-bold text-center tracking-tighter leading-tight mt-5 mb-7">
          Available now Pod of Cast App
        </h2>
        <p className="text-center text-23 font-medium">
          We just launched our podcast app!
        </p>

        <div className=" relative mt-140">
          <img
            src={icons.BlinkRed}
            alt="blinkred"
            className="absolute scale-50 -top-28 -right-28"
          />
          <ButtonBlack160>download now</ButtonBlack160>
        </div>
        <div className="mt-6">
          <p className="font-medium text-sm">Content also available on:</p>
          <div className="flex gap-5 justify-center mt-ten">
            <img src={icons.SpotifyBlack} alt="SpotifyBlack" />
            <img src={icons.GPBlack} alt="GPBlack" />
            <img src={icons.YoutubeBlack} alt="YoutubeBlack" />
          </div>
        </div>
      </div>
      <img
        src={icons.tangled}
        alt="tangled"
        className="absolute bottom-0 right-32 -z-20"
      />
      <img src={icons.Play} alt="play" />
    </section>
  );
};

export default CTA;
