import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Details from "./pages/Details";
import Electronics from "./pages/Categories/Electronics";
import Jewellery from "./pages/Categories/Jewellery";
import MenClothing from "./pages/Categories/Men-clothing";
import WomenClothing from "./pages/Categories/Women-clothing";

function App() {
  return (
    <div className="px-8 pb-8">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories/electronics" element={<Electronics />} />
        <Route path="/categories/jewellery" element={<Jewellery />} />
        <Route path="/categories/men-clothing" element={<MenClothing />} />
        <Route path="/categories/women-clothing" element={<WomenClothing />} />
        <Route path="/product-details/:id" element={<Details />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
