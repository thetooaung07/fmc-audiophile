import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../common/models";

type ShoppingCartContext = {
  removeAllFromCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (product: Product) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export interface CartItem {
  id: number;
  quantity: number;
  cartImage: string;
  shortName: string;
  price: number;
  slug: string;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const removeAllFromCart = () => {
    setCartItems([]);
  };

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id == id)?.quantity || 0;
  }

  function increaseCartQuantity(product: Product) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id == product.id) == null) {
        return [
          ...currItems,
          {
            id: product.id,
            quantity: 1,
            cartImage: product.cartImage,
            shortName: product.shortName,
            price: product.price,
            slug: product.slug,
          },
        ];
      } else {
        return currItems.map((item) => {
          if (item.id == product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id == id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        removeAllFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
