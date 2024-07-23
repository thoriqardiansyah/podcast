import ButtonBlack from "../../../components/Button/ButtonBlack";
import { icons } from "../../../components/constants/Icons";
import Playlist from "../../../components/Playlist/Playlist";
import Support from "../../../components/Support/Support";

const HeroSection = () => {
  return (
    <section className="relative bg-primary pb-140">
      <div className="flex justify-between">
        <img
          src={icons.HeroSwirl}
          alt="heroswirl"
          className="scale-75 xl:scale-100 left-0 xl:mr-[128px]"
        />
        <div className="pt-16 flex flex-col items-center">
          <h1 className="text-center text-6xl xl:text-[96px] font-bold leading-[96px] tracking-tighter">
            Your Daily <span className="text-secondary">Podcast</span>
          </h1>
          <p className="w-[374px] text-center font-medium text-base mt-10 mb-15">
            We cover all kinds of categories and a weekly special guest.
          </p>
          <ButtonBlack>subscribe</ButtonBlack>
        </div>
        <img
          src={icons.HeroStars}
          alt="heroswirl"
          className="ml-20 xl:ml-[248px]"
        />
      </div>

      <Playlist />
      <Support />

      <div className="absolute w-full flex justify-center -bottom-20">
        <img src={icons.ScribbleRed} alt="Scribble" />
      </div>
    </section>
  );
};

export default HeroSection;
