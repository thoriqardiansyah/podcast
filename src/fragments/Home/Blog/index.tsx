import React from "react";
import HeroTitle from "../../../components/HeroTitle";
import BlogCard from "../../../components/BlogCard";
import { icons } from "../../../components/constants/Icons";
import ButtonBlack from "../../../components/Button/ButtonBlack";

const Blog: React.FC = () => {
  return (
    <section className="relative py-140">
      <HeroTitle>Article and News</HeroTitle>
      <p className="text-center px-36 mx-140 text-23 font-medium mt-5">
        News, tips, tricks and more
      </p>

      <div className="relative">
        <img
          src={icons.BlackScribbleBig}
          alt=""
          className="absolute -top-16 left-12 -z-10"
        />
        <BlogCard />
        <img
          src={icons.Eyebrows}
          alt=""
          className="absolute -bottom-48 -right-8 rotate-[120deg]"
        />
      </div>

      <div className="flex justify-center mt-100">
        <ButtonBlack>browse all</ButtonBlack>
      </div>

      <div className="absolute w-full flex justify-center -bottom-20 z-10">
        <img src={icons.ScribbleRed} alt="Scribble Black" />
      </div>
    </section>
  );
};

export default Blog;
