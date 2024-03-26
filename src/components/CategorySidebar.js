"use client";

import { useRouter } from "next/navigation";
import React from "react";

const CategorySidebar = ({ activeCategory }) => {
  const router = useRouter();

  const isActiveCategory = (category) => {
    return category === activeCategory;
  };

  const redirectCategory = (category) => {
    router.push(`/category/${category}`);
  };

  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 mt-16">
      <button
        onClick={() => redirectCategory("all")}
        className={`${
          isActiveCategory("all") ? "border-b" : "hover:border-b"
        } border-black block h-6 box-border mt-4`}
      >
        All
      </button>
      <button
        onClick={() => redirectCategory("smartphones")}
        className={`${
          isActiveCategory("smartphones") ? "border-b" : "hover:border-b"
        } border-black block h-6 box-border mt-5`}
      >
        Smartphones
      </button>
      <button
        onClick={() => redirectCategory("laptops")}
        className={`${
          isActiveCategory("laptops") ? "border-b" : "hover:border-b"
        } border-black block h-6 box-border mt-5`}
      >
        Laptops
      </button>
      <button
        onClick={() => redirectCategory("fragrances")}
        className={`${
          isActiveCategory("fragrances") ? "border-b" : "hover:border-b"
        } border-black block h-6 box-border mt-5`}
      >
        Fragrances
      </button>
      <button
        onClick={() => redirectCategory("skincare")}
        className={`${
          isActiveCategory("skincare") ? "border-b" : "hover:border-b"
        } border-black block h-6 box-border mt-5`}
      >
        Skincare
      </button>
      <button
        onClick={() => redirectCategory("groceries")}
        className={`${
          isActiveCategory("groceries") ? "border-b" : "hover:border-b"
        } border-black block h-6 box-border mt-5`}
      >
        Groceries
      </button>
    </div>
  );
};

export default CategorySidebar;
