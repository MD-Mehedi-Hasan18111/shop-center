import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Subscribe from "@/components/Subscribe";
import React from "react";
import data from "../data/products.json";

export const metadata = {
  title: "Home",
  description: "LWS Shop Center",
};

const Home = () => {
  const TopProducts = data?.products?.slice(0, 12);

  return (
    <div>
      <Hero />
      <ProductSection products={TopProducts} />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
