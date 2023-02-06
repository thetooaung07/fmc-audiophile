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
      className={`mx-10 flex flex-col gap-x-40 md:mx-0 lg:flex-row ${EQUAL_SPACING} ${
        reverse && "lg:flex-row-reverse"
      }`}
    >
      <picture className="flex-1">
        <source srcSet={imageSrcSet.mobile} media="(max-width: 640px)" />
        <source srcSet={imageSrcSet.tablet} media="(max-width: 1024px)" />
        <img src={imageSrcSet.desktop} alt="" className="h-full w-full" />
      </picture>

      <div className="mt-24 flex flex-1 flex-col items-center justify-center text-black lg:mt-0 lg:items-start">
        {isNew && (
          <p className="pb-5 opacity-60" style={{ letterSpacing: 10 }}>
            New Product
          </p>
        )}
        <p className="text-xl lg:text-3xl">{productName}</p>
        <p className="w-full py-6 text-center opacity-75 lg:text-left ">
          {description}
        </p>

        <PrimaryButton
          onClick={() => {
            btnOnClick();
            // window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        ></PrimaryButton>
      </div>
    </div>
  );
};
