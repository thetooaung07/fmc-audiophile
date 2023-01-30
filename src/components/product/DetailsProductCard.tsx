import React, { useState } from "react";
import { IProductCard, IProductDetailsCard } from "../../common/models";
import { PrimaryButton } from "../Buttons";

export const DetailsProductCard = ({
  reverse,
  description,
  imageSrcSet,
  isNew,
  productName,
  btnOnClick,
  price,
  quantity,
}: IProductDetailsCard) => {
  return (
    <div
      className={`flex gap-x-40 flex-col lg:flex-row md:mx-0  ${
        reverse && "lg:flex-row-reverse"
      }`}
    >
      <picture className="flex-1">
        <source srcSet={imageSrcSet.mobile} media="(max-width: 640px)" />
        <source srcSet={imageSrcSet.tablet} media="(max-width: 1024px)" />
        <img src={imageSrcSet.desktop} alt="" className="w-full h-full" />
      </picture>

      <div className="flex-1 flex flex-col justify-center items-start text-black lg:mt-0 mt-10">
        {isNew && (
          <p className="opacity-60 pb-5" style={{ letterSpacing: 10 }}>
            New Product
          </p>
        )}
        <p className="text-3xl lg:text-4xl font-bold">{productName}</p>
        <p className="text-left opacity-75 py-6 w-full ">{description}</p>

        <h1 className="mb-4 text-2xl">${price}</h1>

        <div className="flex">
          <PlusMinusBtn quantity={quantity}></PlusMinusBtn>
          <PrimaryButton onClick={() => {}}></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

type PlusMinusBtnType = {
  quantity: number;
};

export const PlusMinusBtn = ({ quantity = 1 }: PlusMinusBtnType) => {
  const [count, setCount] = useState(quantity);
  return (
    <div className="flex">
      <div
        className="w-16  flex justify-center items-center text-black  bg-[#F1F1F1] rounded-lg hover:bg-lightGray cursor-pointer select-none text-xl opacity-80"
        onClick={() => setCount(count - 1)}
      >
        -
      </div>
      <div className="w-12  flex justify-center items-center text-black bg-[#F1F1F1] rounded-lg font-bold">
        {count}
      </div>
      <div
        className="w-16  flex justify-center items-center text-black bg-[#F1F1F1] rounded-lg hover:bg-lightGray cursor-pointer select-none text-xl opacity-80"
        onClick={() => setCount(count + 1)}
      >
        +
      </div>
    </div>
  );
};
