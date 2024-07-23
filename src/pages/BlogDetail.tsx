import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroBlogDetail from "../fragments/BlogDetail/HeroBlogDetail";
import Details from "../fragments/BlogDetail/Details";
import RelatedArticle from "../fragments/BlogDetail/RelatedArticles";
import CTA from "../fragments/CTA";
import Footer from "../fragments/Footer";

const BlogDetail: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto overflow-x-hidden">
      <Navbar />
      <HeroBlogDetail />
      <Details />
      <RelatedArticle />
      <CTA />
      <Footer />
    </section>
  );
};

export default BlogDetail;
