import Image from "next/image";

export const ProductCard = ({ product, ...rest }) => {
  return (
    <a href={`/#/product/${product.id}`}>
      <div className="font-Inter" {...rest}>
        <div className="flex flex-col bg-white rounded lg:pb-10  pb-8 mb-[10px] lg:mb[18px] relative">
          <div className="flex absolute w-full top-0 left-0 z-10">
            <p className="bg-[#E7FF86] mt-5 ml-5 px-3 rounded-[30px] text-center text-xs font-bold py-2">
              30% OFF
            </p>
          </div>

          <div className="relative pb-[100%]">
            <Image
              className="absolute left-0 top-0 w-full object-contain"
              fill
              src="/k-swiss.png"
              alt="Product Image"
            />
          </div>
        </div>
        <p className="text-[#8F8F8F] font-bold text-xs leading-6">
          {product.type}
        </p>
        <p className="text-[#474747] font-medium md:font-normal text-sm md:text-2xl">
          {product.title}
        </p>
        <div className="flex">
          <p className="text-[#1F1F1F] font-normal mr-3 text-base md:text-2xl line-through opacity-30">
            ${parseInt(product.price)}
          </p>
          <p className="text-[#1F1F1F] font-bold text-base md:text-2xl">
            ${(product.price / 2).toFixed()}
          </p>
        </div>
      </div>
    </a>
  );
};
