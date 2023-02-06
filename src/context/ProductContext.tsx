import React, { useContext } from "react";
import { Product } from "../common/models";

export type AppContext = {
  products: Product[];
  setProducts: (value: any) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (value: Product) => void;
};

export const ProductContext = React.createContext<AppContext>({
  products: [],
  setProducts: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
});

export const useProductContext = () => useContext(ProductContext);
