import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { CheckoutPage } from "./pages/CheckoutPage";
import { EarphonesPage } from "./pages/EarphonesPage";
import { HeadphonesPage } from "./pages/Headphones";
import { HomePage } from "./pages/HomePage";
import { SpeakersPage } from "./pages/SpeakersPage";
import { UnknownRoute } from "./pages/UnknownRoute";

function App() {
  return (
    <div className="h-max ">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />

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
