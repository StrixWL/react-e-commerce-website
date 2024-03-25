import React, { useEffect, useState, createContext } from "react";
import productDetailItem from "../../data/data";

export const ProductTitlesContext = createContext();

export const ProductTitlesProvider = ({ children }) => {
  const [productTitles, setProductTitles] = useState(["AFRIKA | ARIF INO Hoodie: Unveil Your Amazigh Style"]);
  useEffect(() => {
    const titles = productDetailItem.map((element) => element.title);
    setProductTitles(titles);
  }, []);

  return (
    <ProductTitlesContext.Provider value={productTitles}>
      {children}
    </ProductTitlesContext.Provider>
  );
};
