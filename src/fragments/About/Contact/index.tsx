import { icons } from "../../../components/constants/Icons";
import HeroTitle from "../../../components/HeroTitle";
import FormContact from "../FormContact";

const Contact = () => {
  return (
    <section className="relative py-140">
      <HeroTitle>Get in touch</HeroTitle>
      <p className="text-center px-36 text-23 font-medium mt-5">
        Send your message to us
      </p>
      <img
        src={icons.EyebrowsBlue}
        alt=""
        className="absolute top-24 right-[340px] mx-140 rotate-12"
      />
      <FormContact />
      <img src={icons.Scribble} alt="" className="absolute left-5 bottom-64" />
      <img
        src={icons.ShiningStars}
        alt=""
        className="absolute right-24 top-96"
      />
      <div className="absolute w-full flex justify-center -bottom-20">
        <img src={icons.ScribbleRed} alt="Scribble" />
      </div>
    </section>
  );
};

export default Contact;
