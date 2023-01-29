import React, { useContext } from "react";
import { Product } from "./common/models";

export type defaultContext = {
  products?: Product | null;
  setProducts: (value: any) => void;
};

export const ProductContext = React.createContext<defaultContext>({
  products: null,
  setProducts: () => {},
});

export const useProductContext = () => useContext(ProductContext);
