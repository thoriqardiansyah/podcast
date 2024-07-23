import { icons } from "../../../components/constants/Icons";
import { images } from "../../../components/constants/images";

const HeroDetail = () => {
  return (
    <div className="py-100 bg-primary">
      <div className="relative">
        <img
          src={icons.HeroSwirl}
          alt="swirl"
          className="absolute -top-16 left-0"
        />
        <div className="mx-140 relative z-10 flex flex-col gap-y-20">
          <div className="flex items-center gap-x-28">
            <img src={images.cover2} alt="" className="flex" />
            <div>
              <div className="flex flex-col gap-y-[23px]">
                <div className="flex flex-col gap-y-4 mr-5">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-base text-secondary">
                      Episode 1
                    </h4>
                    <span className="font-bold text-sm px-six py-three text-secondary rounded-md border-2 border-secondary uppercase text-center ">
                      FEATURED EPISODE
                    </span>
                  </div>
                  <h2 className="font-bold text-37">
                    Are you a Perplexed Mind Person?
                  </h2>
                </div>
                <p className="font-medium text-base border-t border-black pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud.
                </p>
              </div>
              <div className="flex justify-between items-center mr-5 mt-10 mb-15">
                <div className="flex gap-x-ten items-center">
                  <img src={images.Host2} alt="" />
                  <p className="font-medium text-sm">
                    Hosted by:{" "}
                    <span className="text-secondary font-bold">Jane Doe</span>
                  </p>
                </div>
                <p className="font-medium text-sm">Sep 22, 2021</p>
              </div>
              <div className="flex gap-x-5">
                <button className="px-9 py-5 bg-black rounded-lg text-white uppercase text-sm font-bold shadow-buttons">
                  subscribe
                </button>
                <button className="px-9 py-5 flex items-center border-2 border-black text-sm font-bold rounded-lg uppercase">
                  <img src={icons.PlayBlack} alt="" className="mr-ten" /> listen
                  now <span className="ml-2 text-secondary">(46 min)</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-15 items-center">
            <p className="font-bold text-sm">Tags</p>
            <div className="flex gap-x-six">
              <span className="border border-black rounded-[4px] py-[6px] px-3">
                mind behaviour
              </span>
              <span className="border border-black rounded-[4px] py-[6px] px-3">
                health
              </span>
            </div>
          </div>
        </div>
        <img
          src={icons.HeroStars}
          alt="swirl"
          className="absolute top-16 right-0"
        />
      </div>
    </div>
  );
};

export default HeroDetail;
