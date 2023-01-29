import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Product } from "./common/models";
import { NavBar } from "./components/navbar/NavBar";
import { ProductContext, useProductContext } from "./context";
import { CheckoutPage } from "./pages/CheckoutPage";
import { Earphones } from "./pages/EarphonesPage";
import { Headphones } from "./pages/HeadphonesPage";
import { HomePage } from "./pages/HomePage";
import { ProductDetails } from "./pages/ProductDetailsPage";
import { Speakers } from "./pages/SpeakersPage";
import { UnknownRoute } from "./pages/UnknownRoute";

function App() {
  const [apiData, setApiData] = useState<Product[]>();
  // const productContext = useProductContext();

  useEffect(() => {
    fetch("./src/product.json")
      .then((res) => res.json())
      .then((data) => setApiData(data.products));
  }, []);

  return (
    <ProductContext.Provider
      value={{ products: apiData, setProducts: setApiData }}
    >
      <div className="h-max ">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route
            path="/:productCategory/details/:productName"
            element={<ProductDetails />}
          />

          <Route path="*" element={<UnknownRoute></UnknownRoute>} />
        </Routes>
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
