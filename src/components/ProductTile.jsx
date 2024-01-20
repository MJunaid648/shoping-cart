import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";
import { Link } from "react-router-dom";

const ProductTile = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }
  return (
    <div
      className="relative group flex flex-col justify-between items-center border-2 border-red-900 
                  gap-3 p-4  mt-10 ml-5 rounded-xl"
    >
      <p
        className="absolute right-2 top-2 text-white font-bold bg-[rgba(0,0,0,0.9)] 
                    rounded-lg p-2 py-1 "
      >
        ${product.price}
      </p>
      <div className="h-[180px]">
        <img
          src={product?.image}
          alt={product?.title}
          className="object-contain h-full w-full"
        />
      </div>
      <Link to={`/product-details/${product.id}`}>
        <h1 className="line-clamp-2 text-gray-700 font-bold text-lg text-center">
          {product.title}
        </h1>
      </Link>
      {/* <h2>{product.price}</h2> */}
      <div className="flex items-center justify-center w-full mt-5">
        <button
          className="bg-red-950 text-white border-2 rounded-lg font-bold px-4 py-2"
          onClick={() =>
            cart.some((item) => item.id === product.id)
              ? handleRemoveFromCart()
              : handleAddToCart()
          }
        >
          {cart.some((item) => item.id === product.id)
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductTile;
