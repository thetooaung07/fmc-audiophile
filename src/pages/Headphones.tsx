import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import {
  BottomSection,
  EQUAL_SPACING,
  Footer,
  HomePageBody,
  MidSection,
} from "./HomePage";

export const Headphones = () => {
  // const { category } = useParams();
  // console.log(category);
  return (
    <section>
      <div className="bg-black">
        <h1 className="text-center text-3xl py-10 lg:text-6xl text-white lg:py-20">
          Headphones
        </h1>
      </div>

      <div className={`md:container-center ${EQUAL_SPACING}`}>
        <ProductCard
          reverse={false}
          productName="XX99 MARK II HEADPHONES"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          imageSrcSet={{
            mobile:
              "../../src/images/category-headphones/mobile/image-xx99-mark-two.jpg",
            tablet:
              "../../src/images/category-headphones/tablet/image-xx99-mark-two.jpg",
            desktop:
              "../../src/images/category-headphones/desktop/image-xx99-mark-two.jpg",
          }}
          isNew
          btnOnClick={() => {}}
        ></ProductCard>

        <ProductCard
          reverse
          productName="XX99 MARK I HEADPHONES"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          imageSrcSet={{
            mobile:
              "../../src/images/category-headphones/mobile/image-xx99-mark-one.jpg",
            tablet:
              "../../src/images/category-headphones/tablet/image-xx99-mark-one.jpg",
            desktop:
              "../../src/images/category-headphones/desktop/image-xx99-mark-one.jpg",
          }}
          isNew={false}
          btnOnClick={() => {}}
        ></ProductCard>

        <ProductCard
          reverse={false}
          productName="XX59 HEADPHONES"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          imageSrcSet={{
            mobile:
              "../../src/images/category-headphones/mobile/image-xx59.jpg",
            tablet:
              "../../src/images/category-headphones/tablet/image-xx59.jpg",
            desktop:
              "../../src/images/category-headphones/desktop/image-xx59.jpg",
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
