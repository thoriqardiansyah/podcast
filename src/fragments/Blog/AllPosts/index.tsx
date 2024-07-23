import React from "react";
import HeroTitle from "../../../components/HeroTitle";
import { Link } from "react-router-dom";
import { icons } from "../../../components/constants/Icons";
import Posts from "../Posts";

const AllPosts: React.FC = () => {
  return (
    <div className="relative py-140">
      <div className="relative flex items-center -top-44 mx-[430px]">
        <img src={icons.Search} alt="" className="absolute ml-10" />
        <input
          type="text"
          className="font-medium text-base placeholder:text-semiblack border-[1.5px] focus:outline-none border-black rounded-2xl shadow-[6px_6px_0_0_#81ADC8] w-full py-6 pl-24"
          placeholder="Search..."
        />
      </div>
      <div className="relative">
        <img
          src={icons.BlinkSmall}
          alt="eyebrows"
          className="absolute left-[270px] -top-12 mx-140"
        />
        <HeroTitle>Latest Episode</HeroTitle>
      </div>

      <div className="my-100 pb-5 border-b border-b-black mx-140 flex justify-between px-4">
        <Link
          to={"/blog"}
          className="font-medium text-23 hover:text-secondary hover:font-bold focus:text-secondary focus:font-bold"
        >
          All
        </Link>
        <Link
          to={"/blog"}
          className="font-medium text-23 hover:text-secondary hover:font-bold"
        >
          Business
        </Link>
        <Link
          to={"/blog"}
          className="font-medium text-23 hover:text-secondary hover:font-bold"
        >
          Comedy
        </Link>
        <Link
          to={"/blog"}
          className="font-medium text-23 hover:text-secondary hover:font-bold"
        >
          Education
        </Link>
        <Link
          to={"/blog"}
          className="font-medium text-23 hover:text-secondary hover:font-bold"
        >
          Health
        </Link>
        <Link
          to={"/blog"}
          className="font-medium text-23 hover:text-secondary hover:font-bold"
        >
          News
        </Link>
        <Link
          to={"/blog"}
          className="font-medium text-23 hover:text-secondary hover:font-bold"
        >
          Tech
        </Link>
      </div>

      <Posts />

      <div className="absolute w-full flex justify-center -bottom-20">
        <img src={icons.ScribbleRed} alt="Scribble" />
      </div>
    </div>
  );
};

export default AllPosts;
