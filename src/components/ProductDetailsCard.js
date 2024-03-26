"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import StarIcon from "../global/assets/svg/star.svg";
import Link from "next/link";

const ProductDetailsCard = ({ product }) => {
  // Discount Price Calculation
  const [finalPrice, setFinalPrice] = useState(0);

  // Rating
  const [ratingStars, setRatingStars] = useState([]);

  useEffect(() => {
    if (product) {
      // product price calculation
      const discountPrice =
        (product?.discountPercentage / 100) * product?.price;
      const currentPriceWithDiscount = product?.price - discountPrice;
      setFinalPrice(currentPriceWithDiscount.toFixed(0));

      // product rating
      const tempRating = [];
      for (let i = 0; i < Math.round(product?.rating); i++) {
        tempRating.push(
          <Image src={StarIcon} height={20} width={20} alt="rating_star" />
        );
      }
      setRatingStars(tempRating);
    }
  }, [product]);

  return (
    <div>
      <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
        <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
          <Image
            src={product?.thumbnail}
            height={500}
            width={400}
            priority
            className="w-[400px] h-[500px] mx-auto object-cover"
            alt="product_thumbnail"
          />

          <div className="flex gap-4 mt-4">
            {product?.images?.slice(0, 4)?.map((image) => {
              return (
                <Image
                  key={image}
                  src={image}
                  height={100}
                  width={100}
                  priority
                  className="w-[100px] h-[100px] mx-auto border object-cover"
                  alt="product_image"
                />
              );
            })}
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
            {product?.title}
          </h1>
          <Link href={`/category/${product?.category}`}>
            <span className="text-[#919090] my-3">{product?.category}</span>
          </Link>
          <div className="mt-3 flex items-center justify-start gap-1">
            {ratingStars?.map((star, i) => {
              return (
                <Image
                  key={i}
                  src={StarIcon}
                  height={20}
                  width={20}
                  alt="rating_star"
                />
              );
            })}
          </div>
          <hr className="my-5 bg-black" />

          <div>
            <p className="my-3">
              <span className="text-rose-600 opacity-60 line-through">
                ${product?.price}
              </span>
              <span className="font-bold text-2xl ml-1.5">${finalPrice}</span>
            </p>
          </div>
          <div>
            <p className="leading-7">{product?.description}</p>

            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
              Add To Cart - ${finalPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
