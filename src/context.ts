import React, { useContext } from "react";
import { Product } from "./common/models";

export type defaultContext = {
  products?: Product[] | null;
  setProducts: (value: any) => void;
  selectedProduct?: Product | null;
  setSelectedProduct: (value: Product) => void;
  cartProduct?: Product[] | null;
  setCartProudct: (value: any) => void;
};

export const ProductContext = React.createContext<defaultContext>({
  products: null,
  setProducts: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
  cartProduct: [],
  setCartProudct: () => {},
});

export const useProductContext = () => useContext(ProductContext);
