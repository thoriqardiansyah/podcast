import React from "react";
import { icons } from "../../../components/constants/Icons";
import { Link } from "react-router-dom";

const HeroBlogDetail: React.FC = () => {
  return (
    <div className="pt-32 pb-15 bg-primary">
      <div className="flex relative">
        <img
          src={icons.HeroSwirl}
          alt="heroswirl"
          className="absolute -top-36 left-0 xl:mr-[128px] "
        />
        <div className="flex justify-between px-140 absolute -top-20 w-full">
          <Link to={"/blog"} className="flex items-center gap-x-ten">
            <img src={icons.ArrowLeft} alt="" />
            <p className="font-medium text-sm">Back to articles</p>
          </Link>

          <p className="font-medium text-sm">Sep 12, 2021</p>
        </div>

        <div className=" flex flex-col items-center mx-[290px] relative left-44">
          <p className="font-bold text-sm mb-ten text-secondary">
            TIPS & TRICKS
          </p>
          <h1 className="text-center text-15 font-bold leading-[96px] tracking-tighter">
            Doodle Artwork 101
          </h1>
          <div className="flex gap-x-ten justify-center my-10">
            <p className="px-3 py-six font-medium text-sm border border-semiblack rounded-[4px]">
              art
            </p>
            <p className="px-3 py-six font-medium text-sm border border-semiblack rounded-[4px]">
              tips and trick
            </p>
            <p className="px-3 py-six font-medium text-sm border border-semiblack rounded-[4px]">
              creative
            </p>
          </div>

          <div className="flex justify-center gap-25">
            <img src={icons.twitter} alt="twitter" />
            <img src={icons.instagram} alt="instagram" />
            <img src={icons.tiktok} alt="tiktok" />
          </div>
        </div>
        <img
          src={icons.HeroStars}
          alt="heroswirl"
          className="relative -right-36"
        />
      </div>
    </div>
  );
};

export default HeroBlogDetail;
