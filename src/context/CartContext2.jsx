import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((p) => p.id === item.id);
      if (existing) {
        return prevItems.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

const updateQuantity = (id, qty) => {
  if (isNaN(qty) || qty < 1) {
    removeFromCart(id); 
    return;
  }

  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    )
  );
};

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

   const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
  setCartItems([]);
};


  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity,removeFromCart, totalPrice,clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
