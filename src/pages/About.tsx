import Navbar from "../components/Navbar/Navbar";
import AboutSection from "../fragments/About/AboutSection";
import Contact from "../fragments/About/Contact";
import Home from "../fragments/About/Home";
import SponsorSection from "../fragments/About/SponsorSection";
import CTA from "../fragments/CTA";
import Footer from "../fragments/Footer";

const About = () => {
  return (
    <section className="max-w-[1440px] mx-auto overflow-x-hidden">
      <Navbar />
      <Home />
      <AboutSection />
      <SponsorSection />
      <Contact />
      <CTA />
      <Footer />
    </section>
  );
};

export default About;
