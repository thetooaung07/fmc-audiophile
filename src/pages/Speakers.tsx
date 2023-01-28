import React from "react";
import { ProductCard } from "../components/ProductCard";
import { BottomSection, EQUAL_SPACING, Footer, HomePageBody } from "./HomePage";
export const Speakers = () => {
  return (
    <section>
      <div className="bg-black">
        <h1 className="text-center text-3xl py-10 lg:text-6xl text-white lg:py-20">
          Speakers
        </h1>
      </div>

      <div className={`md:container-center ${EQUAL_SPACING}`}>
        <ProductCard
          reverse={false}
          productName="ZX9 SPEAKER"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          imageSrcSet={{
            mobile: "../../src/images/category-speakers/mobile/image-zx9.jpg",
            tablet: "../../src/images/category-speakers/tablet/image-zx9.jpg",
            desktop: "../../src/images/category-speakers/desktop/image-zx9.jpg",
          }}
          isNew
          btnOnClick={() => {}}
        ></ProductCard>
        <ProductCard
          reverse
          productName="ZX7 SPEAKER"
          description="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          imageSrcSet={{
            mobile: "../../src/images/category-speakers/mobile/image-zx7.jpg",
            tablet: "../../src/images/category-speakers/tablet/image-zx7.jpg",
            desktop: "../../src/images/category-speakers/desktop/image-zx7.jpg",
          }}
          isNew={false}
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
