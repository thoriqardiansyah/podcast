import React from "react";
import { images } from "../constants/images";
import { icons } from "../constants/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideButton from "./SlideButton";

const Testimoni: React.FC = () => {
  const datas = [
    {
      img: images.Avatar2,
      icons: icons.Spotify,
      name: "Spotify",
      person: "Luna lovegood",
    },
    {
      img: images.Avatar3,
      icons: icons.GooglePodcast,
      name: "Google Podcast",
      person: "Emily Blunt",
    },
    {
      img: images.Avatar4,
      icons: icons.ApplePodcast,
      name: "Apple Podcast",
      person: "Mia Winters",
    },
  ];
  return (
    <>
      <div className="ml-140 mt-100">
        <Swiper slidesPerView={2} spaceBetween={20}>
          {datas.map((data, id) => {
            return (
              <SwiperSlide key={id}>
                <div className="p-10 bg-white rounded-lg">
                  <img src={icons.Mark} alt="mark" />
                  <p className="text-23 font-medium my-8">
                    Lorem ipsum dolor sit amet consectet piscing elit, sed do
                    eiusmod tempor incidi ut labore et dolore magna aliqua.{" "}
                  </p>
                  <div className="flex items-center gap-ten ">
                    <img src={data.img} alt="avatar" className="rounded-full" />
                    <p>{data.person},</p>
                    <img src={data.icons} alt="brand" />
                    <p className="text-sm font-bold">{data.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <SlideButton />
        </Swiper>
      </div>
    </>
  );
};

export default Testimoni;
