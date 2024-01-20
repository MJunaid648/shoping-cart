import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";

const Details = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const [productDetails, setProductDetails] = useState({});
  let param = useParams();
  function handleAddToCart() {
    dispatch(addToCart(productDetails));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(productDetails.id));
  }
  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${+param.id}`
        );
        const data = await response.json();
        if (data) {
          setProductDetails(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductDetails();
  }, []);
  console.log(productDetails);

  return (
    <div className="flex flex-col justify-center items-center sm:items-start sm:flex-row gap-6 py-6 ">
      <div
        className=" w-3/4 flex flex-col gap-4 justify-center items-center 
                       border-2 rounded-md border-red-900 p-4"
      >
        <img
          src={productDetails.image}
          alt={productDetails.title}
          className="object-contain h-3/4 w-full"
        />
        <h1 className="text-gray-700 font-bold text-lg text-center">
          {productDetails.title}
        </h1>
      </div>
      <div className="flex flex-col mt-10 gap-4">
        <h3 className="text-gray-700 text-base font-medium ">
          {productDetails.description}
        </h3>
        <h3 className="text-gray-700 text-base font-medium ">
          <span className="text-red-900 font-bold">Category: </span>
          {productDetails.category}
        </h3>
        <h3 className="text-gray-700 text-base font-medium ">
          <span className="text-red-900 font-bold">Price: </span>$
          {productDetails.price}
        </h3>
        <h3 className="text-gray-700 text-base font-medium ">
          <span className="text-red-900 font-bold">Rating: </span>
          {productDetails?.rating?.rate}
        </h3>
        <button
          className=" self-center bg-red-950 text-white border-2 rounded-lg font-bold px-4 py-2"
          onClick={() =>
            cart.some((item) => item.id === productDetails.id)
              ? handleRemoveFromCart()
              : handleAddToCart()
          }
        >
          {cart.some((item) => item.id === productDetails.id)
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Details;
