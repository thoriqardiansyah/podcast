import { icons } from "../../../components/constants/Icons";
import { images } from "../../../components/constants/images";
import HeroTitle from "../../../components/HeroTitle";

const AboutSection = () => {
  return (
    <section className="relative py-140">
      <HeroTitle>Talk. Listen. Get inspired by every minute of it.</HeroTitle>
      {/* <h3 className="text-15 font-bold text-center px-36">
        Talk. Listen. Get inspired by every minute of it.
      </h3> */}

      <div className="flex justify-between mt-100 mb-120 mx-140">
        <div className="w-[475px] flex flex-col items-center text-center">
          <img src={icons.Illustration1} alt="ilustration" />
          <p className="font-medium text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.{" "}
          </p>
        </div>
        <div className="w-[475px] flex flex-col items-center text-center">
          <img src={icons.Illustration2} alt="ilustration" />
          <p className="font-medium text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.{" "}
          </p>
        </div>
      </div>

      <div className="relative bg-primary flex flex-col items-center py-10 mx-140">
        <img
          src={icons.Star}
          alt="star"
          className="absolute -right-16 -top-12"
        />
        <img src={icons.Mark} alt="mark" />
        <h3 className="text-4xl font-bold text-center my-10 mx-48">
          One of the best daily podcasts that covers every topic on Spotify.
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
          className="absolute bottom-10 -left-12"
        />
      </div>

      <div className="absolute w-full flex justify-center -bottom-20 z-10">
        <img src={icons.BlackScribble} alt="Scribble Black" />
      </div>
    </section>
  );
};

export default AboutSection;
