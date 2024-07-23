import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { logo } from "../../constants/Logo";
import SlideButton from "../../Testimoni/SlideButton";
// import { Navigation, Pagination } from "swiper/modules";

const Sponsor: React.FC = () => {
  const items = [
    {
      logo: logo.GooglePodcast,
    },
    {
      logo: logo.Spotify,
    },
    {
      logo: logo.Youtube,
    },
    {
      logo: logo.GooglePodcast,
    },
    {
      logo: logo.Spotify,
    },
    {
      logo: logo.Youtube,
    },
  ];
  return (
    <div className="relative left-[140px] mt-100">
      <Swiper
        //   modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        className="button"
        //   pagination={{
        //     clickable: true,
        //     type: "fraction",
        //   }}
        //   navigation
      >
        {items.map((item, id) => {
          return (
            <SwiperSlide key={id}>
              <div className="pt-10 pb-30 px-[17px] flex flex-col items-center bg-white rounded-lg border border-black">
                <div className="pb-5 border-b border-black">
                  <img src={item.logo} alt="" />
                </div>
                <p className="font-medium text-sm mt-30 text-center px-5">
                  Quis dictum cursus faucibus mattis dignissim. Pellentes que
                  purus in sed sodales in mauris molestie. Eleifend estcon
                  sctetur interdum eu in auctor. Gravida leo et.
                </p>
              </div>
            </SwiperSlide>
          );
        })}
        <SlideButton />
      </Swiper>
    </div>
  );
};

export default Sponsor;
