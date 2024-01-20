import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Details from "./pages/Details";

function App() {
  return (
    <div className="px-8 pb-8">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details/:id" element={<Details />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
