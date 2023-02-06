import React, { useEffect, useState } from "react";

export const useCartProduct = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);
};
