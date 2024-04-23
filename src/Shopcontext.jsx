import { createContext, useState } from "react";
import allProducts from "./products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < allProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const saveInCart = localStorage.getItem("cart");

    return saveInCart ? JSON.parse(saveInCart) : getDefaultCart();
  });

  localStorage.setItem("cart", JSON.stringify(cartItems));

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const createContext = {
    addToCart,
    removeToCart,
    cartItems,
    getDefaultCart,
    getTotalAmount,
  };

  console.log(cartItems);
  return (
    <>
      <ShopContext.Provider value={createContext}>
        {props.children}
      </ShopContext.Provider>
    </>
  );
};

export default ShopContext;
