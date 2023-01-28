import React from "react";
import { EQUAL_SPACING } from "../pages/HomePage";

interface IProductCard {
  reverse: boolean;
  productName: string;
  description: string;
  imageSrcSet: imageSrcSetType;
  isNew: boolean;
  btnOnClick?: () => void;
}

type imageSrcSetType = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export const ProductCard = ({
  reverse,
  imageSrcSet,
  isNew,
  productName,
  description,
  btnOnClick,
}: IProductCard) => {
  return (
    <div
      className={`flex gap-x-20 flex-col lg:flex-row ${EQUAL_SPACING} ${
        reverse && "lg:flex-row-reverse"
      }`}
    >
      <picture className="flex-1">
        <source srcSet={imageSrcSet.mobile} media="(max-width: 640px)" />
        <source srcSet={imageSrcSet.tablet} media="(max-width: 1024px)" />
        <img src={imageSrcSet.desktop} alt="" className="w-full h-full" />
      </picture>

      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-black lg:mt-0 mt-24">
        {isNew && (
          <p className="opacity-60 pb-5" style={{ letterSpacing: 10 }}>
            New Product
          </p>
        )}
        <p className="text-3xl lg:text-6xl">{productName}</p>
        <p className="text-center lg:text-left opacity-75 py-6 lg:w-2/3 w-1/2">
          {description}
        </p>

        <div className="">
          <button
            className="trans-hover bg-buttonOrange"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            See Product
          </button>
        </div>
      </div>
    </div>
  );
};
