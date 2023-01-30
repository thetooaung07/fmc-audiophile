import React, { useEffect } from "react";
import { HomePageProductCard } from "../components/product/HomeProductCard";
import { BottomSection, Footer, HomePageBody } from "./HomePage";

import EarphoneDesktop from "../../src/images/category-earphones/desktop/image-yx1-earphones.jpg";
import EarphoneMobile from "../../src/images/category-earphones/mobile/image-yx1-earphones.jpg";
import EarphoneTablet from "../../src/images/category-earphones/tablet/image-yx1-earphones.jpg";
import { EQUAL_SPACING } from "../utils";

export const Earphones = () => {
  useEffect(() => {}, []);

  return (
    <section>
      <div className="bg-black">
        <h1 className="text-center text-3xl py-10 lg:text-6xl text-white lg:py-20">
          Earphones
        </h1>
      </div>

      <div className={`md:container-center ${EQUAL_SPACING}`}>
        <HomePageProductCard
          reverse={false}
          productName="YX1 WIRELESS EARPHONES"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          imageSrcSet={{
            mobile: EarphoneMobile,
            tablet: EarphoneTablet,
            desktop: EarphoneDesktop,
          }}
          isNew={true}
          btnOnClick={() => {}}
        ></HomePageProductCard>
        <div className={`h-20`}></div>
        <HomePageBody></HomePageBody>
        <BottomSection></BottomSection>
      </div>
    </section>
  );
};
