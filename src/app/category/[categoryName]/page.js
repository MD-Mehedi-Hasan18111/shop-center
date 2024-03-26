import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Subscribe from "@/components/Subscribe";
import React from "react";
import data from "../../../data/products.json";
import CategorySidebar from "@/components/CategorySidebar";
import { getProductsByCategory } from "@/global/utils/get-data";

export const metadata = {
  title: "Product Category",
  description: "LWS Shop Center",
};

const Category = ({ params: { categoryName } }) => {
  const products = getProductsByCategory(data?.products, categoryName);

  return (
    <div>
      <Hero />
      <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <CategorySidebar activeCategory={categoryName} />
        <ProductSection products={products} />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Category;
