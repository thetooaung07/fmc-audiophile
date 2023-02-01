import { IProductCard } from "../../common/models";

import { EQUAL_SPACING } from "../../utils";
import { PrimaryButton } from "../Buttons";

export const HomePageProductCard = ({
  reverse,
  imageSrcSet,
  isNew,
  productName,
  description,
  btnOnClick,
}: IProductCard) => {
  return (
    <div
      className={`flex gap-x-40 flex-col lg:flex-row mx-10 md:mx-0 ${EQUAL_SPACING} ${
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
        <p className="text-xl lg:text-3xl">{productName}</p>
        <p className="text-center lg:text-left opacity-75 py-6 w-full ">
          {description}
        </p>

        <PrimaryButton
          onClick={() => {
            btnOnClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        ></PrimaryButton>
      </div>
    </div>
  );
};
