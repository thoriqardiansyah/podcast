import React from "react";
import { icons } from "../constants/Icons";

const Benefits: React.FC = () => {
  const datas = [
    {
      icons: icons.EyebrowsBlue,
      title: "Topic by Request",
    },
    {
      icons: icons.ShiningStars,
      title: "Exclusive Content",
    },
    {
      icons: icons.Smile,
      title: "Join the Community",
    },
    {
      icons: icons.Face,
      title: "Livestreaming Access",
    },
    {
      icons: icons.Fire,
      title: "Exlucsive Episodes & Merch",
    },
    {
      icons: icons.BlackStar,
      title: "And much more",
    },
  ];
  return (
    <div className="mx-140 mt-100 grid grid-cols-3 gap-x-5 gap-y-20">
      {datas.map((data, id) => {
        return (
          <div className="flex flex-col items-center" key={id}>
            <img src={data.icons} alt="" />
            <h3 className="text-23 font-bold mt-30 mb-ten">{data.title}</h3>
            <p className="font-medium text-base text-center">
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Benefits;
