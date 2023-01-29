import React from "react";
import HeadPhoneIIDesktop from "../../src/images/category-headphones/desktop/image-xx99-mark-two.jpg";
import HeadPhoneIIMobile from "../../src/images/category-headphones/mobile/image-xx99-mark-two.jpg";
import HeadPhoneIITablet from "../../src/images/category-headphones/tablet/image-xx99-mark-two.jpg";
import { DetailsProductCard } from "../components/product/DetailsProductCard";

export const ProductDetails = () => {
  /* const { category } = useParams();*/ /* console.log(category);*/
  return (
    <section className="md:container-center mx-5">
      <div className="opacity-60 py-4">Go Back</div>
      <DetailsProductCard
        reverse={false}
        productName="XX99 MARK II HEADPHONES"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        imageSrcSet={{
          mobile: HeadPhoneIIMobile,
          tablet: HeadPhoneIITablet,
          desktop: HeadPhoneIIDesktop,
        }}
        isNew
        btnOnClick={() => {}}
      ></DetailsProductCard>
    </section>
  );
};
