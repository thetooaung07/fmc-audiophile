import React from "react";
import { EQUAL_SPACING } from "../pages/HomePage";

export const ProductCard = (props: { reverse?: boolean }) => {
  return (
    <div
      className={`flex gap-x-20  ${EQUAL_SPACING} ${
        props.reverse && "flex-row-reverse"
      }`}
    >
      <picture className="flex-1">
        <source
          srcSet={
            "../../src/images/category-headphones/mobile/image-xx99-mark-two.jpg"
          }
          media="(max-width: 640px)"
        />
        <source
          srcSet={
            "../../src/images/category-headphones/tablet/image-xx99-mark-two.jpg"
          }
          media="(max-width: 1024px)"
        />
        <img
          src={
            "../../src/images/category-headphones/desktop/image-xx99-mark-two.jpg"
          }
          alt=""
          className="w-full h-full"
        />
      </picture>

      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-black">
        <p className="opacity-60 pb-5" style={{ letterSpacing: 10 }}>
          New Product
        </p>
        <p className="text-3xl lg:text-6xl">ZX9 SPEAKER</p>
        <p className="text-center lg:text-left opacity-75 py-6 lg:w-2/3 w-1/2">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
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
