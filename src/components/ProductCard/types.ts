import { HTMLAttributes } from "react";
import { ISCProductProps } from "../ShoppingCart/ShoppingCartCard/types";

export interface IProductProps {
  id: string;
  title: string;
  tag: string | null;
  discount: number | null;
  price: number;
  images: string[];
  categories: string[];
}

export interface ICategoryProps {
  id: number;
  title: string;
  url: string;
  image: string;
}

export interface IProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product: IProductProps;
  handleAddOrRemoveProductOnFavorites: (product: IProductProps) => void;
  inFavorites: boolean;
  handleAddProductOnShoppingCart: (product: ISCProductProps) => void;
  inShoppingCart: boolean;
}
