import { HTMLAttributes } from "react";

export interface ISCProductProps {
  id: string;
  title: string;
  tag: string | null;
  discount: number | null;
  price: number;
  images: string[];
  categories: string[];
  quantity: number;
}

export interface ISCProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product: ISCProductProps;
  handleAddProductOnShoppingCart: (product: ISCProductProps) => void;
  inShoppingCart: boolean;
  handleRemoveProductOnShoppingCart: (product: ISCProductProps) => void;
}
