import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    setTotalCartPrice(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(totalCartPrice);
  return (
    <>
      {cart && cart.length ? (
        <div className="flex flex-col justify-between gap-6 md:flex-row py-4">
          {/* CART STATS */}
          <div className="self-center md:self-start flex flex-col gap-4 ">
            <h1 className="font-bold text-2xl text-red-800 text-nowrap">
              Your Cart Summary
            </h1>
            <p>
              <span className="text-gray-800 font-bold text-lg">
                Total Items
              </span>
              <span className="font-medium text-normal">: {cart.length}</span>
            </p>
            <p>
              <span className="text-gray-800 font-bold text-lg">
                Total Amount
              </span>
              <span className="font-medium text-normal">
                : ${totalCartPrice.toFixed(2)}
              </span>
            </p>
          </div>
          <div className=" flex flex-col md:w-2/4 justify-center">
            {cart.map((cartItem) => (
              <CartTile cartItem={cartItem} />
            ))}
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold px-4 py-2">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
