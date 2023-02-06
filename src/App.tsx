import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Product } from "./common/models";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { NavBar } from "./components/NavBar";
import { ProductContext } from "./context/ProductContext";
import {
  ShoppingCartContext,
  ShoppingCartProvider,
} from "./context/ShoppingCartContext";
import { CategoryPage } from "./pages/CategoryPage";
import { Footer } from "./pages/Footer";
import { HomePage } from "./pages/HomePage";
import { ProductDetails } from "./pages/ProductDetailsPage";
import { UnknownRoute } from "./pages/UnknownRoute";

function App() {
  const [apiData, setApiData] = useState<Product[]>([]);
  const [selectedCardProduct, setSelectedCartProduct] =
    useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.products);
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products: apiData,
        setProducts: setApiData,

        selectedProduct: selectedCardProduct,
        setSelectedProduct: setSelectedCartProduct,
      }}
    >
      <ShoppingCartProvider>
        {isLoading ? (
          <LoadingIndicator></LoadingIndicator>
        ) : (
          <div className="h-max">
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/headphones" element={<CategoryPage />} />
              <Route path="/speakers" element={<CategoryPage />} />
              <Route path="/earphones" element={<CategoryPage />} />
              <Route path="/:category/:name" element={<ProductDetails />} />
              <Route path="*" element={<UnknownRoute></UnknownRoute>} />
            </Routes>
            <Footer></Footer>
          </div>
        )}
      </ShoppingCartProvider>
    </ProductContext.Provider>
  );
}

export default App;

/// sync cart item with local storage
/// Continue => same product > only increase quantity
/// fly to cart animation
/// details Card => already inside the cart ? "Open Cart" : "Add to product"
/// chekout page
///
