// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { images } from "../constants/images";

const Playlist = () => {
  const datas = [
    {
      img: images.cover,
    },
    {
      img: images.cover1,
    },
    {
      img: images.cover2,
    },
    {
      img: images.cover3,
    },
    {
      img: images.cover4,
    },
  ];
  return (
    <div className="pb-120">
      <Swiper slidesPerView={4} spaceBetween={20} loop={true}>
        {datas.map((data, id) => {
          return (
            <SwiperSlide key={id}>
              <img src={data.img} alt="cover" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Playlist;
