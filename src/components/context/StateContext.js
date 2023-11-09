import React, { createContext, useContext, useState } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
    const [category, setCategory] = useState("All");
    const [productId, setProductId] = useState("");

    const handleChangeCategory = (updateCategory) => {
        setCategory(updateCategory)
    }
    const changeProductId = (actualProductId) => {
        console.log(productId);
        setProductId(actualProductId)
    }


return (
    <Context.Provider
      value={{
        category,
        handleChangeCategory,
        productId,
        changeProductId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);