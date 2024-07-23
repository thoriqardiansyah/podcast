import Navbar from "../components/Navbar/Navbar";
import AboutSection from "../fragments/Home/AboutSection";
import Blog from "../fragments/Home/Blog";
import Content from "../fragments/Home/Content";
import CTA from "../fragments/CTA";
import Footer from "../fragments/Footer";
import HeroSection from "../fragments/Home/HeroSection/HeroSection";
import Membership from "../fragments/Home/Membership";
import Pricing from "../fragments/Home/Pricing";
import Testimonials from "../fragments/Home/Testimonials";

const Home = () => {
  return (
    <section className="max-w-[1440px] mx-auto overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Testimonials />
      <Membership />
      <Content />
      <Pricing />
      <Blog />
      <CTA />
      <Footer />
    </section>
  );
};

export default Home;
