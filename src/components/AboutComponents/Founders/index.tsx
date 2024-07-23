// import React from "react";
import { images } from "../../constants/images";
import { icons } from "../../constants/Icons";

const Founders = () => {
  const datas = [
    {
      id: 1,
      host: "Host 1",
      name: "Porter Severus",
      icons: icons.Smile,
      founder: images.founder,
    },
    {
      id: 2,
      host: "Host 2",
      name: "Merques Keith",
      icons: icons.BlackStar,
      founder: images.mainhost,
    },
  ];
  return (
    <div className=" flex gap-x-5">
      {datas.map((data) => {
        return (
          <div
            className="p-4 flex gap-4 border-2 border-black shadow-[10px_10px_0_0_black] rounded-lg"
            key={data.id}
          >
            <div className="flex flex-1">
              <img src={data.founder} alt="" />
            </div>
            <div className="flex flex-col gap-y-120 flex-1 justify-between">
              <div className="relative">
                <img
                  src={data.icons}
                  alt=""
                  className="absolute right-5 top-5 rotate-[30deg] scale-150"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-medium text-sm">{data.host}</h4>
                <h2 className="font-bold text-37 leading-[37px] mt-six mb-5">
                  {data.name}
                </h2>
                <p className="font-medium text-sm">
                  Lorem ipsum dolor sit amet con sectet piscing elit, sed do
                  eiusmod tempor rarylet podofcast.
                </p>
                <div className="flex items-center justify-end gap-x-5 py-ten mt-30 border-t border-black">
                  <p className="font-bold text-sm">follow me:</p>
                  <div className="flex gap-x-ten">
                    <img src={icons.tiktokcolor} alt="tiktok" />
                    <img src={icons.twittercolor} alt="twittercolor" />
                    <img src={icons.instagramcolor} alt="instagramcolor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Founders;
