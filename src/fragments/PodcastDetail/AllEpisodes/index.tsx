import { Link } from "react-router-dom";
import { icons } from "../../../components/constants/Icons";
import HeroTitle from "../../../components/HeroTitle";
import Episode from "../../../components/Episode";

const AllEpisodes = () => {
  return (
    <div className="relative py-140">
      <div className="relative">
        <img
          src={icons.BlinkSmall}
          alt="eyebrows"
          className="absolute left-[270px] -top-12 mx-140"
        />
        <HeroTitle>Latest Episode</HeroTitle>
      </div>

      <div className="my-100 pb-5 border-b border-b-black mx-140 flex justify-between px-4">
        <Link
          //  to={"/podcast-detail/all"}
          to={"/podcast-detail"}
          className="font-medium text-23 hover:text-secondary hover:font-bold focus:text-secondary focus:font-bold"
        >
          All
        </Link>
        <Link
          //  to={"/podcast-detail/business"}
          to={"/podcast-detail"}
          className="font-medium text-23 hover:text-secondary hover:font-bold"
        >
          Business
        </Link>
        <Link
          //  to={"/podcast-detail/comedy"}
          to={"/podcast-detail"}
          className="font-medium text-23 hover:text-secondary hover:font-bold"
        >
          Comedy
        </Link>
        <Link
          //  to={"/podcast-detail/education"}
          to={"/podcast-detail"}
          className="font-medium text-23 hover:text-secondary hover:font-bold"
        >
          Education
        </Link>
        <Link
          //  to={"/podcast-detail/health"}
          to={"/podcast-detail"}
          className="font-medium text-23 hover:text-secondary hover:font-bold"
        >
          Health
        </Link>
        <Link
          //  to={"/podcast-detail/news"}
          to={"/podcast-detail"}
          className="font-medium text-23 hover:text-secondary hover:font-bold"
        >
          News
        </Link>
        <Link
          //  to={"/podcast-detail/tech"}
          to={"/podcast-detail"}
          className="font-medium text-23 hover:text-secondary hover:font-bold"
        >
          Tech
        </Link>
      </div>

      <Episode />
      <img
        src={icons.Eyebrows}
        alt=""
        className="absolute -bottom-8 left-0 rotate-[190deg]"
      />
      <div className="absolute w-full flex justify-center -bottom-20">
        <img src={icons.ScribbleRed} alt="Scribble" />
      </div>
    </div>
  );
};

export default AllEpisodes;
