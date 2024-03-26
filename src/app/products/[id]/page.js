import React from "react";
import data from "../../../data/products.json";
import ProductDetailsCard from "@/components/ProductDetailsCard";
import { getProductById } from "@/global/utils/get-data";

export const metadata = {
  title: "Details",
  description: "LWS Shop Center",
};

const ProductDetails = ({ params: { id } }) => {
  const product = getProductById(data?.products, id);

  return (
    <section className="bg-[#fafaf2] h-full py-20">
      <ProductDetailsCard product={product} />
    </section>
  );
};

export default ProductDetails;
