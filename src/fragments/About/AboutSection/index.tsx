import React from "react";
import HeroTitle from "../../../components/HeroTitle";
import { images } from "../../../components/constants/images";
import { icons } from "../../../components/constants/Icons";
import Founders from "../../../components/AboutComponents/Founders";

const AboutSection: React.FC = () => {
  return (
    <section className="relative p-140">
      <img src={icons.Scribble} alt="" className="absolute -top-16 right-0" />
      <HeroTitle>What our listeners say</HeroTitle>
      <p className="text-center px-36 text-23 font-medium mt-5">
        Their experience throughout every platform
      </p>
      <img
        src={images.aboutimg}
        alt="aboutimg"
        className=" mt-8 border-2 border-black rounded-lg"
      />

      <div className="relative mt-15">
        <img
          src={icons.BlinkSmall}
          alt=""
          className="absolute -top-16 left-80"
        />
        <h3 className="text-37 font-bold text-center">About and History</h3>
        <div className="py-20 border-b border-black flex gap-x-5">
          <p className="text-base font-medium flex-1">
            Eu non diam phasellus vestibulum lorem. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim. Id <b>diam</b> vel quam{" "}
            <b>elementum pulvinar.</b>
            <br />
            <br />
            Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi
            quis commodo odio aenean sed adipiscing odio diam. uno fablotoson
            louw uit.
          </p>
          <p className="text-base font-medium flex-1">
            Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Quam
            pellentesque at bibendum euismod tellus duis cursus dignissim odio.
            Sit vulputate et integer in. Sit vel, senectus iaculis morbi.{" "}
            <b>Amet</b> interdum imperdiet laoreet <b>morbi</b> tincidunt
            fermentum, libero. Ante enim eget.
            <br />
            <br />
            Viverra at porttitor accumsan. <u>Orci non here</u>
          </p>
        </div>
      </div>

      <div className="relative mt-100 mb-20">
        <img
          src={icons.eyebrowsbluebig}
          alt=""
          className="absolute -top-16 right-64"
        />
        <h3 className="text-37 font-bold text-center">Founder and Main Host</h3>
      </div>

      <Founders />
    </section>
  );
};

export default AboutSection;
