import { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Product } from "./common/models";
import { NavBar } from "./components/navbar/NavBar";
import { ProductContext, useProductContext } from "./context";
import { CheckoutPage } from "./pages/CheckoutPage";
import { Earphones } from "./pages/EarphonesPage";
import { Headphones } from "./pages/HeadphonesPage";
import { Footer, HomePage } from "./pages/HomePage";
import { ProductDetails } from "./pages/ProductDetailsPage";
import { Speakers } from "./pages/SpeakersPage";
import { UnknownRoute } from "./pages/UnknownRoute";

function App() {
  const [apiData, setApiData] = useState<Product[]>([]);
  const [selectedCardProduct, setSelectedCartProduct] = useState<Product>();
  const [cartProduct, setCartProudct] = useState<Product[]>([]);
  const location = useLocation();
  useEffect(() => {
    fetch("http://127.0.0.1:5173/src/product.json")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.products);
        setSelectedCartProduct(data.products[3]);

        setCartProudct([data.products[0], data.products[1]]);
      });
  }, [location]);

  return (
    <ProductContext.Provider
      value={{
        products: apiData,
        setProducts: setApiData,
        setCartProudct: setCartProudct,
        cartProduct: cartProduct,
        selectedProduct: selectedCardProduct,
        setSelectedProduct: setSelectedCartProduct,
      }}
    >
      <div className="h-max ">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/:category/:name" element={<ProductDetails />} />

          <Route path="*" element={<UnknownRoute></UnknownRoute>} />
        </Routes>
        <Footer></Footer>
      </div>
    </ProductContext.Provider>
  );
}

export default App;

/* <Route
          path="/category/:categoryType/:categoryID"
          element={<CategoryDetailsPage />}
        />

        <Route path="/checkout" element={<CheckoutPage />} /> */
