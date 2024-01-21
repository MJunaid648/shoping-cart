import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";
import { BsCartXFill } from "react-icons/bs";

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <div className="flex p-3 sm:p-5 items-center  bg-red-500 mt-2 mb-2  gap-4 rounded-xl">
      <div className="flex p-3">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          className="h-28 rounded-lg p-2 bg-white"
        />
      </div>
      <div className="flex-1 flex flex-col ">
        <h1 className="  text-base sm:text-xl text-white font-bold">
          {cartItem.title}
        </h1>
        <div className="flex justify-between items-center mt-4">
          <p className="text-black font-extrabold mt-2">${cartItem.price}</p>

          <button
            className="self-end  text-red-900 text-2xl bg-white p-2 rounded-xl"
            onClick={() => handleRemoveFromCart()}
          >
            <BsCartXFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTile;
