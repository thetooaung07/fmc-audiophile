import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import {
  BottomSection,
  EQUAL_SPACING,
  Footer,
  HomePageBody,
  MidSection,
} from "./HomePage";

export const HeadphonesPage = () => {
  // const { category } = useParams();
  // console.log(category);
  return (
    <section>
      <div className="bg-black">
        <h1 className="text-center text-3xl py-10 lg:text-6xl text-white lg:py-20">
          Headphones
        </h1>
      </div>
      section
      <div className={`md:container-center ${EQUAL_SPACING}`}>
        <ProductCard></ProductCard>
        <ProductCard reverse></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <div className={` ${EQUAL_SPACING} h-10`}></div>
      <HomePageBody></HomePageBody>
      <BottomSection></BottomSection>
      <Footer></Footer>
    </section>
  );
};
