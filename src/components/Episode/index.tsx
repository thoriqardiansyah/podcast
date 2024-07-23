import React from "react";
import { images } from "../constants/images";

const Episode: React.FC = () => {
  const datas = [
    {
      img: images.eps6,
      num: 6,
      title: "Pandemic Becoming Endemic",
      categories: [
        {
          id: 1,
          name: "covid-19",
        },
        {
          id: 2,
          name: "health",
        },
      ],
    },
    {
      img: images.eps5,
      num: 5,
      title: "Tesla Autopilot Controversy",
      categories: [
        {
          id: 1,
          name: "automation",
        },
        {
          id: 2,
          name: "tech",
        },
      ],
    },
    {
      img: images.eps4,
      num: 4,
      title: "Women's Rights? Is it alright?",
      categories: [
        {
          id: 1,
          name: "women's rights",
        },
      ],
    },
    {
      img: images.eps3,
      num: 3,
      title: "Tesla Autopilot Controversy",
      categories: [
        {
          id: 1,
          name: "self-esteem",
        },
        {
          id: 2,
          name: "health",
        },
      ],
    },
    {
      img: images.eps2,
      num: 2,
      title: "Type of Social Classes of People",
      categories: [
        {
          id: 1,
          name: "social-class",
        },
        {
          id: 2,
          name: "wealth",
        },
      ],
    },
    {
      img: images.eps1,
      num: 1,
      title: "Are you a Perplexed Mind Person?",
      categories: [
        {
          id: 1,
          name: "mind-behaviour",
        },
        {
          id: 2,
          name: "health",
        },
      ],
    },
  ];
  return (
    <div className="px-[140px] grid grid-cols-2 gap-5 mt-[100px]">
      {datas.map((data, id) => {
        return (
          <div
            className="p-4 rounded-xl bg-white borders border-2 border-black"
            key={id}
          >
            <div className="flex">
              <img src={data.img} alt="" className="w-[166px] h-[166px] mr-5" />
              <div className="flex flex-col justify-center">
                <div className="text-[#CD4631]">
                  <p className="text-base font-bold">Eps {data.num}</p>
                  <h3 className="text-[22px] font-bold">{data.title}</h3>
                </div>
                <p className="font-medium text-sm py-[10px] border-t border-black mt-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio.{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div className="flex gap-[6px]">
                {data.categories.map((category) => {
                  return (
                    <p
                      className="border border-black rounded-[4px] py-[6px] px-3"
                      key={category.id}
                    >
                      {category.name}
                    </p>
                  );
                })}
              </div>
              <div className="flex gap-[10px] items-center pr-4">
                <p className="text-xs font-bold">Hosted by:</p>
                <div className="relative flex">
                  <img
                    src={images.Host1}
                    alt=""
                    className="rounded-full border-2 border-white"
                  />
                  <img
                    src={images.Host2}
                    alt=""
                    className="rounded-full border-2 border-white absolute left-4"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Episode;
