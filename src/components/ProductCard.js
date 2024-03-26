import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  // Discount Price Calculation
  const discountPrice = (product?.discountPercentage / 100) * product?.price;
  const currentPriceWithDiscount = product?.price - discountPrice;

  return (
    <div>
      <div
        className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform"
        style={{ backgroundImage: `url(${product?.thumbnail})` }}
      ></div>
      <h2 className="text-sm flex space-x-1 lg:text-base mt-2">
        <Link className="text-base font-bold" href={`/products/${product?.id}`}>
          {product?.title}
        </Link>
        <Link href={`/category/${product?.category}`}>
          <span className="text-[#919090]">{product?.category}</span>
        </Link>
      </h2>
      <p className="text-[#919090] text-sm ">{product?.description}</p>

      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">${product?.price}</span> $
        {currentPriceWithDiscount.toFixed(0)}
      </p>
    </div>
  );
};

export default ProductCard;
