import React from "react";
import { ProductCard } from "../components/ProductCard";
import { BottomSection, EQUAL_SPACING, Footer, HomePageBody } from "./HomePage";

export const Earphones = () => {
  return (
    <section>
      <div className="bg-black">
        <h1 className="text-center text-3xl py-10 lg:text-6xl text-white lg:py-20">
          Earphones
        </h1>
      </div>

      <div className={`md:container-center ${EQUAL_SPACING}`}>
        <ProductCard
          reverse={false}
          productName="YX1 WIRELESS EARPHONES"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          imageSrcSet={{
            mobile:
              "../../src/images/category-earphones/mobile/image-yx1-earphones.jpg",
            tablet:
              "../../src/images/category-earphones/tablet/image-yx1-earphones.jpg",
            desktop:
              "../../src/images/category-earphones/desktop/image-yx1-earphones.jpg",
          }}
          isNew={true}
          btnOnClick={() => {}}
        ></ProductCard>
      </div>
      <div className={`h-20`}></div>
      <HomePageBody></HomePageBody>
      <BottomSection></BottomSection>
      <Footer></Footer>
    </section>
  );
};
