import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Product } from "../common/models";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { HomePageProductCard } from "../components/product/HomeProductCard";
import { EQUAL_SPACING } from "../utils";

export const CategoryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(
          data.products.filter((el: { category: string }) => {
            return el.category == location.pathname.substring(1);
          })
        );
      });

    setIsLoading(false);
  }, [location]);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <section>
          <div className="bg-black">
            <h1 className="text-center text-3xl py-10 lg:text-6xl text-white lg:py-20 capitalize">
              {location.pathname.substring(1)}
            </h1>
          </div>
          <div className={`md:container-center ${EQUAL_SPACING}`}>
            {categoryProducts.map((product, index) => (
              <div key={index}>
                <HomePageProductCard
                  reverse={index % 2 == 0 ? false : true}
                  productName={product.name}
                  description={product.description}
                  imageSrcSet={{
                    mobile: product.categoryImage.mobile,
                    tablet: product.categoryImage.tablet,
                    desktop: product.categoryImage.desktop,
                  }}
                  isNew={product.new}
                  btnOnClick={() => {
                    navigate(`/${product.category}/${product.slug}`);
                  }}
                ></HomePageProductCard>
                ;
              </div>
            ))}
            <div className={`h-20`}></div>
            {/* <HomePageBody></HomePageBody>
            <BottomSection></BottomSection> */}
          </div>
        </section>
      )}
    </>
  );
};
