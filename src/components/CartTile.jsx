import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";
import { BsCartXFill } from "react-icons/bs";


const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <div className="flex p-5 items-center  bg-red-500 mt-2 mb-2  gap-4 rounded-xl">
      <div className="flex p-3">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          className="h-28 rounded-lg p-2 bg-white"
        />
      </div>
      <div className="flex-1 flex flex-col ">
        <div className="flex-3 self-start">
          <h1 className="text-xl text-white font-bold">{cartItem.title}</h1>
          <p className="text-black font-extrabold mt-2">${cartItem.price}</p>
        </div>
        <button
          className="self-end  text-black text-2xl"
          onClick={() => handleRemoveFromCart()}
        >
         <BsCartXFill />
        </button>
      </div>
    </div>
  );
};

export default CartTile;
