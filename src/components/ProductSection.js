"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { usePathname } from "next/navigation";

const ProductSection = ({ products }) => {
  const pathName = usePathname();

  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
      <div
        className={`grid grid-cols-2 ${
          pathName?.includes("/category") ? "md:grid-cols-3" : "md:grid-cols-4"
        } gap-4 my-4 lg:my-10`}
      >
        {products?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default ProductSection;
