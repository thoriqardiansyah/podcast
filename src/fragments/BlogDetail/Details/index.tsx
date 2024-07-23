import React from "react";
import { images } from "../../../components/constants/images";
import { icons } from "../../../components/constants/Icons";

const Details: React.FC = () => {
  return (
    <div className="relative pb-140">
      <img src={images.herobig} alt="" className="relative z-10" />
      <div className="relative mt-100 mb-20">
        <img
          src={icons.eyebrowsbluebig}
          alt=""
          className="absolute -top-16 left-16 -rotate-[70deg] mx-140"
        />
        <h3 className="text-37 font-bold text-center">
          Doodle for our podcast background room
        </h3>
      </div>
      <div className="flex gap-x-5 mx-140 border-b border-black pb-20">
        <p>
          Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Quam
          pellentesque at bibendum euismod tellus duis cursus dignissim odio.
          Sit vulputate et integer in.
          <br />
          <br />
          Sit vel, senectus iaculis morbi. <b>Amet</b> interdum imperdiet
          laoreet <b>morbi</b>
          tincidunt fermentum, libero. Ante enim eget viverra at porttitor
          accumsan. Orci non here
        </p>
        <p>
          Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in
          sed sodales in mauris molestie. Eleifend est cons ctetur interdum eu
          in auctor. Gravida leo et.
        </p>
      </div>
      <div className="relative bg-primary flex flex-col items-center py-10 mx-140 mt-100">
        <img
          src={icons.Star}
          alt="star"
          className="absolute -right-16 -top-12"
        />
        <img src={icons.Mark} alt="mark" />
        <h3 className="text-4xl font-bold text-center my-10 mx-48">
          Quote example goes in here...
        </h3>

        <div className="flex items-center gap-ten">
          <div className="flex items-center gap-ten">
            <img src={images.Avatar} alt="person" className="rounded-full" />
            <p className="font-medium text-sm">John Smith,</p>
          </div>
          <div className="flex items-center gap-ten">
            <img src={icons.Spotify} alt="brand" />
            <p className="text-sm font-bold">Social Community Manager</p>
          </div>
        </div>
        <img
          src={icons.Scribble}
          alt="sribble"
          className="absolute bottom-0 -left-12"
        />
      </div>

      <div className="mx-140 flex gap-x-5 mt-100 mb-[130px]">
        <div className="flex flex-col gap-y-15">
          <h3 className="text-23 font-bold text-center">
            Bullet list example:
          </h3>
          <ul className="list-disc flex flex-col gap-y-10 marker:text-secondary marker:font-bold marker:text-lg px-5">
            <li className="font-medium text-base">
              Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit.
              Quam pellentesque at bibendum euismod tellus duis curs us
              dignissim odio. Sit vulputate et integer in.
            </li>
            <li className="font-medium text-base">
              Sit vel, senectus iaculis morbi. <b>Amet</b> interdum imperdiet
              laoreet <b>morbi</b> tincidunt fermentum, libero. Ante enim eget
              viverra at porttitor accumsan. Orci non here
            </li>
            <li className="font-medium text-base">
              Quis dictum cursus faucibus mattis dignissim. Pellent que
              <b> purus in sed</b> sodales in mauris molestie. Eleifend est
              consctetur interdum eu in auctor. Gravida leo et.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-15">
          <h3 className="text-23 font-bold text-center">
            Number list example:
          </h3>
          <ol className="list-decimal flex flex-col gap-y-10 marker:text-secondary marker:font-bold">
            <li className="font-medium text-base">
              Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit.
              Quam pellentesque at bibendum euismod tellus duis curs us
              dignissim odio. Sit vulputate et integer in.
            </li>
            <li className="font-medium text-base">
              Sit vel, senectus iaculis morbi. <b>Amet</b> interdum imperdiet
              laoreet <b>morbi</b> tincidunt fermentum, libero. Ante enim eget
              viverra at porttitor accumsan. Orci non here
            </li>
            <li className="font-medium text-base">
              Quis dictum cursus faucibus mattis dignissim. Pellent que
              <b>purus in sed</b> sodales in mauris molestie. Eleifend est
              consctetur interdum eu in auctor. Gravida leo et.
            </li>
          </ol>
        </div>
      </div>

      <div className="mx-140 flex gap-x-5">
        <figure className="flex flex-col items-center gap-y-5">
          <img src={images.Doodle} alt="" />
          <figcaption className="font-medium text-sm">
            this is an image with a caption example
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center gap-y-5">
          <img src={images.Doodle2} alt="" />
          <figcaption className="font-medium text-sm hover:underline text-secondary cursor-pointer">
            download here
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Details;
