import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector((state) => state);
  return (
    <nav className="h-16 flex items-center justify-between py-4 border-b-2 ">
      <Link to="/">
        <h1
          className="text-red-900 font-bold text-xl sm:text-2xl 
                            md:text-3xl cursor-pointer tracking-wide "
        >
          BuzzBazaar
        </h1>
      </Link>
      <ul className="list-none flex items-center space-x-6 text-gray-800 font-semibold text-xl">
        <Link to="/">
          <li className=" cursor-pointer hover:text-red-900">Home</li>
        </Link>
        <Link to="/categories/electronics">
          <li className=" cursor-pointer hover:text-red-900">Electronics</li>
        </Link>
        <Link to="/categories/men-clothing">
          <li className=" cursor-pointer hover:text-red-900">Men's Clothing</li>
        </Link>
        <Link to="/categories/women-clothing">
          <li className=" cursor-pointer hover:text-red-900">
            Women's Clothing
          </li>
        </Link>
        <Link to="/categories/jewellery">
          <li className=" cursor-pointer hover:text-red-900">Jewellery</li>
        </Link>

        <Link to="/cart" className="w-8">
          <li className="relative cursor-pointer">
            {cart && cart.length ? (
              <p className="absolute top-[-12px] right-2 text-sm  text-red-900 font-bold ">
                {cart.length}
              </p>
            ) : null}
            <GiShoppingCart className="relative h-8 w-8 hover:text-red-900"></GiShoppingCart>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
