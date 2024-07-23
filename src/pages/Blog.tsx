import React from "react";
import HeroBlog from "../fragments/Blog/HeroBlog";
import Navbar from "../components/Navbar/Navbar";
import AllPosts from "../fragments/Blog/AllPosts";
import CTA from "../fragments/CTA";
import Footer from "../fragments/Footer";

const Blog: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto overflow-x-hidden">
      <Navbar />
      <HeroBlog />
      <AllPosts />
      <CTA />
      <Footer />
    </section>
  );
};

export default Blog;
