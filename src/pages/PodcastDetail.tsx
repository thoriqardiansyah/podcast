import Navbar from "../components/Navbar/Navbar";
import HeroDetail from "../fragments/PodcastDetail/HeroDetail";
import CTA from "../fragments/CTA";
import Footer from "../fragments/Footer";
import AllEpisodes from "../fragments/PodcastDetail/AllEpisodes";

const PodcastDetail = () => {
  return (
    <section className="max-w-[1440px] mx-auto overflow-x-hidden">
      <Navbar />
      <HeroDetail />
      <AllEpisodes />
      <CTA />
      <Footer />
    </section>
  );
};

export default PodcastDetail;
