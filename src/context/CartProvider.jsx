"use client";
import { createContext, useState } from "react";

export const cartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([item, ...cart]);
  };
  const cartInfo = {
    addToCart,
    cart,
  };
  return (
    <cartContext.Provider value={cartInfo}>{children}</cartContext.Provider>
  );
};

export default CartProvider;
