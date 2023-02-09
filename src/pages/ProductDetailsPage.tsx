import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InTheBoxItemType, IPictureSourceComponent } from "../common/models";
import { PrimaryButton } from "../components/Buttons";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { DetailsProductCard } from "../components/product/DetailsProductCard";
import { useProductContext } from "../context/ProductContext";
import { EQUAL_SPACING } from "../utils";
import { BottomSection } from "./HomePage";

export const ProductDetails = () => {
  const { category, name } = useParams();
  const { selectedProduct, setSelectedProduct, products, setProducts } =
    useProductContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Single Fetch

    setIsLoading(true);
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const findResult = data.products.find(
          (oj: { category: any; slug: any }) => {
            return `${oj.category}/${oj.slug}` == `${category}/${name}`;
          }
        );
        console.log(findResult);
        if (findResult == undefined) {
          setIsLoading(false);

          return navigate("/404");
        } else setSelectedProduct(findResult);

        setIsLoading(false);
      });
  }, [category, name]);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <section className="md:container-center mx-5">
          <div className="py-10">
            <p
              className="flex max-h-fit max-w-fit cursor-pointer opacity-60 transition-opacity hover:opacity-100"
              onClick={() => {
                navigate("/");
              }}
            >
              Go Back
            </p>
          </div>
          {selectedProduct !== null && (
            <DetailsProductCard
              product={selectedProduct!}
              quantity={1}
              reverse={false}
              btnOnClick={() => {}}
            ></DetailsProductCard>
          )}
          {/* Features and In the Box */}
          <div
            className={`flex ${EQUAL_SPACING} flex-col items-start justify-between gap-x-20 lg:flex-row`}
          >
            <div className="Features mr-24 w-full lg:w-2/3">
              <h2 className="py-8 text-3xl font-bold uppercase">Features</h2>
              <p className="pb-4 opacity-70">
                {selectedProduct?.features.split("\n\n")[0]}
              </p>
              <p className="pb-4 opacity-70">
                {selectedProduct?.features.split("\n\n")[1]}
              </p>
            </div>
            <div className="In-The-Box flex w-full flex-row items-start gap-16 lg:w-1/3 lg:flex-col lg:gap-0">
              <h1 className="py-8 text-3xl font-bold uppercase">In The Box</h1>
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
    <section className={`mt-24 flex flex-col items-center justify-center`}>
      <h2 className="text-center text-4xl font-bold">You May Also Like</h2>

      <div
        className={`flex flex-col gap-12 md:mx-auto md:flex-row ${EQUAL_SPACING} mb-10 mt-10`}
      >
        {selectedProduct?.others.map((e, index) => (
          <div
            className="flex flex-col items-center justify-center"
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
            <h2 className="py-4 text-2xl font-bold">{e.name}</h2>
            <PrimaryButton
              onClick={() => {
                navigate(`/${e.slug}`);
              }}
            ></PrimaryButton>
          </div>
        ))}
      </div>
    </section>
  );
};

export const InTheBoxItem = ({ count, item }: InTheBoxItemType) => {
  return (
    <div className="flex items-center pb-2">
      <p className="text-lg font-bold text-buttonOrange">{count}x</p>
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

export const PictureComponent = ({
  pictureClassName,
  imgClassName = "rounded-2xl",
  imageSrcSet,
}: IPictureSourceComponent) => {
  return (
    <picture className={pictureClassName}>
      <source srcSet={imageSrcSet.mobile} media="(max-width: 640px)" />
      <source srcSet={imageSrcSet.tablet} media="(max-width: 1024px)" />
      <img src={imageSrcSet.desktop} alt="" className={`${imgClassName}`} />
    </picture>
  );
};
