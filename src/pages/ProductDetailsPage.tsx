import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { imageSrcSetType } from "../common/models";
import { DetailsProductCard } from "../components/product/DetailsProductCard";
import { useProductContext } from "../context";
import { EQUAL_SPACING } from "../utils";
import { BottomSection, Footer, HomePageBody, MidSection } from "./HomePage";

export const ProductDetails = () => {
  const { selectedProduct } = useProductContext();
  console.log(selectedProduct);

  const navigate = useNavigate();
  return (
    <section className="md:container-center mx-5">
      <div
        className="opacity-60 py-4 cursor-pointer"
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
      <div className={`flex ${EQUAL_SPACING}`}>
        <div className="Features w-2/3">
          <h2 className="uppercase text-3xl font-bold py-8">Features</h2>
          <p className="opacity-70 pb-4">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p className="opacity-70 pb-4">
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>

        <div className="In-The-Box ml-24">
          <h1 className="uppercase text-3xl font-bold py-8">In The Box</h1>
          <InTheBoxItem></InTheBoxItem>
          <InTheBoxItem></InTheBoxItem>
          <InTheBoxItem></InTheBoxItem>
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
    <section className={`${EQUAL_SPACING} h-screen`}>
      <h2 className="text-4xl font-bold text-center">You May Also Like</h2>

      <div
        className={`flex flex-col md:flex-row mt-24 gap-12 md:mx-auto ${EQUAL_SPACING} mb-10`}
      >
        {selectedProduct?.others.map((e) => (
          <div className="flex flex-col justify-center items-center">
            <PictureComponent
              imageSrcSet={{
                mobile: e.image.mobile,
                tablet: e.image.tablet,
                desktop: e.image.desktop,
              }}
              imgClassName=""
              pictureClassName=""
            />
            <h2 className="text-2xl font-bold py-8">{e.name}</h2>
            <button className="trans-hover-inverse bg-buttonOrange uppercase">
              See Product
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export const InTheBoxItem = () => {
  return (
    <div className="flex pb-2">
      <p>1x</p>
      <div className="w-5"></div>
      <p>Headphone Unit</p>
    </div>
  );
};

export const GridGallery = () => {
  const { selectedProduct } = useProductContext();
  return (
    <div className={`grid grid-cols-5 gap-4 ${EQUAL_SPACING}`}>
      <div className="col-span-2 row-span-1 bg-black">
        <PictureComponent
          imageSrcSet={{
            mobile: selectedProduct?.gallery.first.mobile || "",
            tablet: selectedProduct?.gallery.first.tablet || "",
            desktop: selectedProduct?.gallery.first.desktop || "",
          }}
          imgClassName=""
          pictureClassName=""
        ></PictureComponent>
      </div>
      <div className="col-span-3 row-span-2 bg-black">
        {" "}
        <PictureComponent
          imageSrcSet={{
            mobile: selectedProduct?.gallery.second.mobile || "",
            tablet: selectedProduct?.gallery.second.tablet || "",
            desktop: selectedProduct?.gallery.second.desktop || "",
          }}
          imgClassName=""
          pictureClassName=""
        ></PictureComponent>
      </div>
      <div className="col-span-2 row-span-1 bg-black">
        {" "}
        <PictureComponent
          imageSrcSet={{
            mobile: selectedProduct?.gallery.third.mobile || "",
            tablet: selectedProduct?.gallery.third.tablet || "",
            desktop: selectedProduct?.gallery.third.desktop || "",
          }}
          imgClassName=""
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
      <img src={imageSrcSet.desktop} alt="" className={imgClassName} />
    </picture>
  );
};
