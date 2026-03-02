"use client";

import { cartContext } from "@/context/CartProvider";
import { ShoppingCart } from "lucide-react";
import { use, useState } from "react";

const CartButton = ({ food }) => {
  const [incart, setInCart] = useState(false);
  const { addToCart } = use(cartContext);
  const handleAdd2Cart = () => {
    addToCart(food);
    setInCart(true);
  };
  return (
    <button
      onClick={handleAdd2Cart}
      disabled={incart}
      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white cursor-pointer bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-gray-200 disabled:text-gray-500"
    >
      <ShoppingCart size={18} />
      {incart ? "Added" : "Add To Cart"}
    </button>
  );
};

export default CartButton;
