// import React from "react";
import { Link } from "react-router-dom";
import ButtonBlackH41 from "../Button/ButtonBlackH41";
import ButtonBorderH41 from "../Button/ButtonBorderH41";
import { icons } from "../constants/Icons";
import { logo } from "../constants/Logo";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="relative max-w-[1440px] flex justify-between items-center px-16 xl:px-140 py-6 bg-primary">
      <div className="flex items-center gap-10 xl:gap-[123px]">
        <img src={logo.MainLogo} alt="logo" />
        <nav className=" flex gap-6 lg:gap-15 text-base font-bold">
          <Link to={"/"} onClick={() => setIsOpen(false)}>
            Episodes
          </Link>
          <Link to={"/about"} onClick={() => setIsOpen(false)}>
            About
          </Link>
          <button
            className="flex gap-1 cursor-pointer"
            onClick={() => setIsOpen((state) => !state)}
          >
            More <img src={icons.ArrowDown} alt="arrowdown" />
          </button>
          <div
            className={`absolute top-24 px-10 py-5 flex flex-col gap-y-5 bg-white border-[1.5px] border-black rounded-lg ml-44 z-50 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <Link to={"/blog"} onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link to={"/blog-detail"} onClick={() => setIsOpen(false)}>
              Blog Detail
            </Link>
            <Link to={"/podcast-detail"} onClick={() => setIsOpen(false)}>
              Podcast Detail
            </Link>
          </div>
        </nav>
      </div>

      <div className="flex gap-5">
        <ButtonBorderH41>recent episodes</ButtonBorderH41>
        <ButtonBlackH41>subscribe</ButtonBlackH41>
      </div>
    </header>
  );
};

export default Navbar;
