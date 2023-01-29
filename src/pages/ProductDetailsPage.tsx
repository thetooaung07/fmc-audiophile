import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HeadPhoneIIDesktop from "../../src/images/category-headphones/desktop/image-xx99-mark-two.jpg";
import HeadPhoneIIMobile from "../../src/images/category-headphones/mobile/image-xx99-mark-two.jpg";
import HeadPhoneIITablet from "../../src/images/category-headphones/tablet/image-xx99-mark-two.jpg";
import { imageSrcSetType } from "../common/models";
import { DetailsProductCard } from "../components/product/DetailsProductCard";
import { EQUAL_SPACING } from "../utils";

export const ProductDetails = () => {
  /* const { category } = useParams();*/ /* console.log(category);*/

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
      <div className="h-screen"></div>
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
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-2 row-span-1 bg-black">
        <PictureComponent
          imageSrcSet={{ mobile: "", tablet: "", desktop: "" }}
          imgClassName=""
          pictureClassName=""
        ></PictureComponent>
      </div>
      <div className="col-span-3 row-span-2 bg-black">Hello</div>
      <div className="col-span-2 row-span-1 bg-black">Hello</div>
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
