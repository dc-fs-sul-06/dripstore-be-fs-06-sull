import { ProductCard } from "./ProductCard.jsx";
import { useState, useEffect } from "react";
import Link from "next/link";

export const FeaturedProductList = ({
  title,
  link,
  gamerComputerCollectionProducts,
}) => {
  const products = gamerComputerCollectionProducts;

  return (
    <div className="text-Inter px-5 md:px-[100px] bg-gray-50 md:bg-purple-50 md:pb-[120px] pb-10">
      <div className="flex justify-between mb-5 items-center">
        <h1 className="font-bold md:text-2xl">{title}</h1>
        <Link
          className="text-[#C92071] font-semibold md:font-normal text-sm md:text-lg tracking-[.75px]"
          href="#"
        >
          {link}
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 rounded lg:grid-cols-4 bg-gray-50 md:bg-purple-50 gap-3 lg:gap-6 lg:gap-y-10">
        {products.slice(0, 8).map((product, index) => (
          <ProductCard key={`product-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};
