
import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
  lineItems: [],
  addToCart: () => null,
  removeFromCart: () => null,
  isProductInCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [lineItems, setLineItems] = useState([]);

  const addToCart = (product) => {
    setLineItems([...lineItems, product]);
  };

  const removeFromCart = (product) => {
    setLineItems(lineItems.filter((item) => item?.id !== product?.id));
  };

  const isProductInCart = (product) => {
    return !!lineItems.filter((item) => item?.id === product?.id).length;
  };

  return (
    <CartContext.Provider value={{ lineItems, addToCart, removeFromCart, isProductInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
