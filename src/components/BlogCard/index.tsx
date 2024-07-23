import React from "react";
import { images } from "../constants/images";

const BlogCard: React.FC = () => {
  const datas = [
    {
      id: 1,
      img: images.BlogHome1,
      category: "Podcast",
      title: "Setup your own podcast",
      date: "Sept 14, 2021",
      tags: [
        {
          id: 1,
          name: "business",
        },
        {
          id: 2,
          name: "startup",
        },
      ],
    },
    {
      id: 2,
      img: images.BlogHome2,
      category: "TIPS & TRICK",
      title: "Doodle artwork 101",
      date: "Sept 12, 2021",
      tags: [
        {
          id: 1,
          name: "art",
        },
        {
          id: 2,
          name: "creative",
        },
        {
          id: 3,
          name: "tips and trick",
        },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5 mx-140 mt-100 relative z-10">
      {datas.map((data) => {
        return (
          <div
            className="p-4 border-2 bg-white border-black rounded-lg group hover:shadow-[10px_10px_0_0_black] duration-300 ease-linear transition-all cursor-pointer"
            key={data.id}
          >
            <img src={data.img} alt="blog" className="mb-10" />
            <div className="grid gap-y-5">
              <h5 className="font-bold text-sm">{data.category}</h5>
              <h3 className="text-37 font-bold group-hover:text-secondary duration-300 ease-linear transition-all">
                {data.title}
              </h3>
              <p className="font-medium text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimvel iam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="mt-[26px] pt-5 border-t border-black flex justify-between items-center">
              <div className="flex gap-[6px]">
                {data.tags.map((tag) => {
                  return (
                    <span
                      className="font-medium text-xs px-3 py-[6px] border border-black rounded-md"
                      key={tag.id}
                    >
                      {tag.name}
                    </span>
                  );
                })}
              </div>
              <span className="font-bold text-xs">{data.date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
