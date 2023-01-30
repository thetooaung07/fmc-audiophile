import { useEffect, useState } from "react";
import { render } from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { imageSrcSetType, Product } from "../common/models";
import { PrimaryButton } from "../components/Buttons";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { DetailsProductCard } from "../components/product/DetailsProductCard";
import { useProductContext } from "../context";
import { EQUAL_SPACING } from "../utils";
import { BottomSection, Footer, HomePageBody, MidSection } from "./HomePage";

export const ProductDetails = () => {
  const { category, name } = useParams();
  const { selectedProduct, setSelectedProduct, products, setProducts } =
    useProductContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Single Fetch

    setIsLoading(true);
    fetch("http://127.0.0.1:5173/src/product.json")
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(
          data.products.find((oj: { category: any; slug: any }) => {
            return `${oj.category}/${oj.slug}` == `${category}/${name}`;
          })
        );
      });

    setIsLoading(false);
  }, [category, name]);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <section className="md:container-center mx-5">
          <div
            className="flex opacity-60 my-4 py-2 cursor-pointer max-w-fit max-h-fit  hover:opacity-100"
            onClick={() => {
              navigate("/");
            }}
          >
            <p> Go Back </p>
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
            <div className="In-The-Box w-full lg:w-1/3 flex flex-row items-start gap-16 lg:gap-0 lg:flex-col">
              <h1 className="uppercase text-3xl font-bold py-8">In The Box</h1>
              <div className="py-8 lg:py-0">
                {selectedProduct?.includedItems.map((e, index) => (
                  <InTheBoxItem
                    count={e.quantity}
                    item={e.item}
                    key={index}
                  ></InTheBoxItem>
                ))}
              </div>
            </div>
          </div>
          <GridGallery></GridGallery>
          <YouMayAlsoLike></YouMayAlsoLike>
          {/* <HomePageBody></HomePageBody> */}
          <BottomSection></BottomSection>
        </section>
      )}
    </>
  );
};

export const YouMayAlsoLike = () => {
  const { selectedProduct } = useProductContext();

  const navigate = useNavigate();
  return (
    <section className={`mt-24 flex justify-center items-center flex-col`}>
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
            <PrimaryButton
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate(`/${e.slug}`);
              }}
            ></PrimaryButton>
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
