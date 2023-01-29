import React from "react";
import { HomePageProductCard } from "../components/product/HomeProductCard";
import { BottomSection, Footer, HomePageBody } from "./HomePage";

import SpeakerZX9desktop from "../../src/images/category-speakers/desktop/image-zx9.jpg";
import SpeakerZX9mobile from "../../src/images/category-speakers/mobile/image-zx9.jpg";
import SpeakerZX9tablet from "../../src/images/category-speakers/tablet/image-zx9.jpg";

import SpeakerZX7desktop from "../../src/images/category-speakers/desktop/image-zx7.jpg";
import SpeakerZX7mobile from "../../src/images/category-speakers/mobile/image-zx7.jpg";
import SpeakerZX7tablet from "../../src/images/category-speakers/tablet/image-zx7.jpg";
import { EQUAL_SPACING } from "../utils";
export const Speakers = () => {
  return (
    <section>
      <div className="bg-black">
        <h1 className="text-center text-3xl py-10 lg:text-6xl text-white lg:py-20">
          Speakers
        </h1>
      </div>

      <div className={`md:container-center ${EQUAL_SPACING}`}>
        <HomePageProductCard
          reverse={false}
          productName="ZX9 SPEAKER"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          imageSrcSet={{
            mobile: SpeakerZX9mobile,
            tablet: SpeakerZX9tablet,
            desktop: SpeakerZX9desktop,
          }}
          isNew
          btnOnClick={() => {}}
        ></HomePageProductCard>
        <HomePageProductCard
          reverse
          productName="ZX7 SPEAKER"
          description="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          imageSrcSet={{
            mobile: SpeakerZX7mobile,
            tablet: SpeakerZX7tablet,
            desktop: SpeakerZX7desktop,
          }}
          isNew={false}
          btnOnClick={() => {}}
        ></HomePageProductCard>
      </div>
      <div className={`h-20`}></div>
      <HomePageBody></HomePageBody>
      <BottomSection></BottomSection>
      <Footer></Footer>
    </section>
  );
};
