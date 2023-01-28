import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { CheckoutPage } from "./pages/CheckoutPage";
import { Earphones } from "./pages/Earphones";

import { Headphones } from "./pages/Headphones";
import { HomePage } from "./pages/HomePage";
import { Speakers } from "./pages/Speakers";

import { UnknownRoute } from "./pages/UnknownRoute";

function App() {
  return (
    <div className="h-max ">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />

        <Route path="*" element={<UnknownRoute></UnknownRoute>} />
      </Routes>
    </div>
  );
}

export default App;

/* <Route
          path="/category/:categoryType/:categoryID"
          element={<CategoryDetailsPage />}
        />

        <Route path="/checkout" element={<CheckoutPage />} /> */
