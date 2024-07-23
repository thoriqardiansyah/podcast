import React from "react";
import { logo } from "../../components/constants/Logo";
import { icons } from "../../components/constants/Icons";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="pt-140 mx-140">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col gap-y-10 w-[280px]">
          <div className="flex items-end gap-x-6">
            <img src={logo.MainLogo} alt="logo" />
            <p className="font-medium text-xs">&copy; 2021</p>
          </div>
          <p className="font-medium text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-25">
            <img src={icons.twitter} alt="twitter" />
            <img src={icons.instagram} alt="instagram" />
            <img src={icons.tiktok} alt="tiktok" />
          </div>
        </div>

        <div className=" flex flex-col gap-5">
          <Link to={"/"} className="font-medium text-base">
            About
          </Link>
          <Link to={"/"} className="font-medium text-base text-secondary">
            Testimonials
          </Link>
          <Link to={"/"} className="font-medium text-base">
            Features
          </Link>
        </div>

        <div className=" flex flex-col gap-5">
          <Link to={"/"} className="font-medium text-base text-secondary">
            Episodes
          </Link>
          <Link to={"/"} className="font-medium text-base ">
            Pricing
          </Link>
          <Link to={"/"} className="font-medium text-base">
            Blog
          </Link>
        </div>

        <div className="flex flex-col gap-y-15 relative">
          <div className="flex flex-col gap-y-5">
            <p className="font-medium text-base">
              Listen to episodes on your fav platform:
            </p>
            <div className="flex relative -left-6">
              <img src={logo.GooglePodcast} alt="GP" className="scale-75" />
              <img src={logo.Spotify} alt="spotify" className="scale-75" />
              <img src={logo.Youtube} alt="youtube" className="scale-75" />
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="font-medium text-base">App available on:</p>
            <div className="flex gap-x-5">
              <img src={icons.AppStore} alt="AppStore" />
              <img src={icons.GooglePlay} alt="GooglePlay" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-140 pt-5 mb-20 flex justify-between border-t border-black">
        <p className="font-medium text-xs">
          ©2022. All Rights Reserved.{" "}
          <span className="text-secondary">Pod of Cast</span>
        </p>
        <div className="flex gap-5 font-medium text-xs items-center">
          <Link to={"/"} className="font-medium text-xs">
            Terms
          </Link>
          .
          <Link to={"/"} className="font-medium text-xs">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
