import React, { ReactNode } from "react";
import { ISCProductProps } from "../../components/ShoppingCart/ShoppingCartCard/types";

export interface IShoppingCartContextData {
  shoppingCart: ISCProductProps[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ISCProductProps[]>>;
  handleAddProductOnShoppingCart: (product: ISCProductProps) => void;
  isProductInShoppingCart: (productId: string) => boolean;
  handleRemoveProductOnShoppingCart: (product: ISCProductProps) => void;
}

export interface IShoppingCartProviderProps {
  children: ReactNode;
}
