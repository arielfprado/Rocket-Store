import React, { ReactNode } from "react";
import { IProductProps } from "../../components/Pagination/types";

export interface IFavoritesContextData {
  favorites: IProductProps[];
  setFavorites: React.Dispatch<React.SetStateAction<IProductProps[]>>;
  handleAddOrRemoveProductOnFavorites: (product: IProductProps) => void;
  isProductInFavorites: (productId: string) => boolean;
}

export interface IFavoritesProviderProps {
  children: ReactNode;
}
