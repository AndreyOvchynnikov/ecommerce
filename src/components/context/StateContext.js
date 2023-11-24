import React, { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems'));
    const trending = JSON.parse(localStorage.getItem('trendingProducts'));
    if (items) {
      setCartItems(items);
    }
    if (trending) {
      setTrendingProducts(trending);
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('trendingProducts', JSON.stringify(trendingProducts));
  }, [cartItems, trendingProducts])

  const addToCart = (product, quantity) => {
    const newProduct = {
      ...product,
      quantity: quantity,
    }
    const isItemChosen = cartItems.find(item => item.id === newProduct.id);
    if (isItemChosen) {
      setCartItems(cartItems.map(item => {
        if (item.id === newProduct.id) {
          item.quantity + quantity > 1 ? item.quantity += quantity : item.quantity = 1;
        };
        return item;
      }));
      return;
    }
    setCartItems([...cartItems, newProduct]);
  }

  const removeFromCart = (cartItem) => {
    setCartItems(cartItems.filter(item => item.id !== cartItem.id));
  }

  useEffect(() => {
   setTotalQuantities(cartItems.reduce((acc, item) => {
      return acc += item.quantity;
   }, 0))
    
    setTotalPrice(cartItems.reduce((acc, item) => {
      acc += item.price * item.quantity
      return acc
    }, 0))
  }, [cartItems])

  const addTrendingProduct = (product) => {
    const findProduct = trendingProducts.find(item => item.id === product.id);
    const newTrendingProducts = trendingProducts.filter(item => item.id !== product.id);
    const normalLengthTrendingProducts = trendingProducts.filter((item, index) => index !== 0);

    if (findProduct) {
      setTrendingProducts([...newTrendingProducts, product]);
      return
    }; 
    if (trendingProducts.length > 6) {
      setTrendingProducts([...normalLengthTrendingProducts, product]);
      return;
    }
        setTrendingProducts([...trendingProducts, product]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

return (
    <Context.Provider
      value={{
      toggleCart,
      showCart,
      setShowCart, 
      totalQuantities,
      addToCart,
      cartItems,
      removeFromCart,
      totalPrice,
      addTrendingProduct,
      trendingProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);