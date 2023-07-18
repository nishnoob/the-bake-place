import React, { createContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from './cookieUtils';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = getCookie('cart');
    const savedTotal = getCookie('total');
    if (savedCart) {
      setCart(savedCart);
    }
    if (savedTotal) {
      setTotal(savedTotal);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      setCookie('cart', cart);
    }
    if (total > 0) {
      setCookie('total', total);
    }
  }, [cart, total]);

  const addToCart = (product) => {
    if (!product.quantity || product.quantity < 9) {
      const existingProduct = cart.find((item) => item.id === product.id);
  
      if (existingProduct) {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      }
  
      setTotal(state => state + product.price);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );

    setCart(updatedCart.filter((item) => item.quantity > 0));
    setTotal(state => state - product.price);
  };

  const emptyCart = () => {
    setCart([]);
    setTotal(0);
    setCookie('cart', []);
    setCookie('total', 0);
    console.log('Cart items on checkout', cart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};
