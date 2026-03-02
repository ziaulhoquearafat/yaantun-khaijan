"use client";

import { cartContext } from "@/context/CartProvider";
import { use } from "react";

const CartItems = () => {
  const { cart } = use(cartContext);
  return <div>{cart.length} items Added</div>;
};

export default CartItems;
