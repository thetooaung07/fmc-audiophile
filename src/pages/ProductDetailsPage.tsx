import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { imageSrcSetType } from "../common/models";
import { DetailsProductCard } from "../components/product/DetailsProductCard";
import { useProductContext } from "../context";
import { EQUAL_SPACING } from "../utils";
import { BottomSection, Footer, HomePageBody, MidSection } from "./HomePage";

export const ProductDetails = () => {
  const { selectedProduct } = useProductContext();
  console.log(selectedProduct?.features.split("\n\n"));

  const navigate = useNavigate();
  return (
    <section className="md:container-center mx-5">
      <div
        className="opacity-60 py-8 cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </div>
      <DetailsProductCard
        quantity={1}
        price={selectedProduct?.price || 0}
        reverse={false}
        productName={selectedProduct?.name || ""}
        description={selectedProduct?.description || ""}
        imageSrcSet={{
          mobile: selectedProduct?.categoryImage.mobile || "",
          tablet: selectedProduct?.categoryImage.tablet || "",
          desktop: selectedProduct?.categoryImage.desktop || "",
        }}
        isNew
        btnOnClick={() => {}}
      ></DetailsProductCard>

      {/* Features and In the Box */}
      <div
        className={`flex ${EQUAL_SPACING} justify-between items-start gap-x-20 flex-col lg:flex-row`}
      >
        <div className="Features w-full lg:w-2/3 mr-24">
          <h2 className="uppercase text-3xl font-bold py-8">Features</h2>
          <p className="opacity-70 pb-4">
            {selectedProduct?.features.split("\n\n")[0]}
          </p>
          <p className="opacity-70 pb-4">
            {selectedProduct?.features.split("\n\n")[1]}
          </p>
        </div>

        <div className="In-The-Box w-full lg:w-1/3">
          <h1 className="uppercase text-3xl font-bold py-8">In The Box</h1>
          {selectedProduct?.includedItems.map((e, index) => (
            <InTheBoxItem
              count={e.quantity}
              item={e.item}
              key={index}
            ></InTheBoxItem>
          ))}
        </div>
      </div>

      <GridGallery></GridGallery>
      <YouMayAlsoLike></YouMayAlsoLike>
      <HomePageBody></HomePageBody>
      <BottomSection></BottomSection>
    </section>
  );
};

export const YouMayAlsoLike = () => {
  const { selectedProduct } = useProductContext();
  return (
    <section
      className={`md:h-max md:mt-20 lg:h-[80vh] flex justify-center items-center flex-col`}
    >
      <h2 className="text-4xl font-bold text-center">You May Also Like</h2>

      <div
        className={`flex flex-col md:flex-row gap-12 md:mx-auto ${EQUAL_SPACING} mb-10 mt-10`}
      >
        {selectedProduct?.others.map((e, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <PictureComponent
              imageSrcSet={{
                mobile: e.image.mobile,
                tablet: e.image.tablet,
                desktop: e.image.desktop,
              }}
              imgClassName=""
              pictureClassName=""
            />
            <h2 className="text-2xl font-bold py-4">{e.name}</h2>
            <button className="trans-hover-inverse bg-buttonOrange uppercase">
              See Product
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

type InTheBoxItemType = {
  count: number;
  item: string;
};

export const InTheBoxItem = ({ count, item }: InTheBoxItemType) => {
  return (
    <div className="flex pb-2 items-center">
      <p className="text-buttonOrange font-bold text-lg">{count}x</p>
      <div className="w-5"></div>
      <p className="text-lg">{item}</p>
    </div>
  );
};

export const GridGallery = () => {
  const { selectedProduct } = useProductContext();
  return (
    <div className={`grid grid-cols-5 gap-4 ${EQUAL_SPACING}`}>
      <div className="col-span-2 row-span-1 ">
        <PictureComponent
          imageSrcSet={{
            mobile: selectedProduct?.gallery.first.mobile || "",
            tablet: selectedProduct?.gallery.first.tablet || "",
            desktop: selectedProduct?.gallery.first.desktop || "",
          }}
          imgClassName="w-full h-full rounded-xl"
          pictureClassName=""
        ></PictureComponent>
      </div>
      <div className="col-span-3 row-span-2 ">
        <PictureComponent
          imageSrcSet={{
            mobile: selectedProduct?.gallery.third.mobile || "",
            tablet: selectedProduct?.gallery.third.tablet || "",
            desktop: selectedProduct?.gallery.third.desktop || "",
          }}
          imgClassName="w-full h-full rounded-xl"
          pictureClassName=""
        ></PictureComponent>
      </div>
      <div className="col-span-2 row-span-1 ">
        <PictureComponent
          imageSrcSet={{
            mobile: selectedProduct?.gallery.second.mobile || "",
            tablet: selectedProduct?.gallery.second.tablet || "",
            desktop: selectedProduct?.gallery.second.desktop || "",
          }}
          imgClassName="w-full h-full rounded-xl"
          pictureClassName=""
        ></PictureComponent>
      </div>
    </div>
  );
};

export interface IPictureSourceComponent {
  imgClassName: string;
  imageSrcSet: imageSrcSetType;
  pictureClassName: string;
}

export const PictureComponent = ({
  pictureClassName,
  imgClassName,
  imageSrcSet,
}: IPictureSourceComponent) => {
  return (
    <picture className={pictureClassName}>
      <source srcSet={imageSrcSet.mobile} media="(max-width: 640px)" />
      <source srcSet={imageSrcSet.tablet} media="(max-width: 1024px)" />
      <img
        src={imageSrcSet.desktop}
        alt=""
        className={`rounded-2xl ${imgClassName}`}
      />
    </picture>
  );
};
