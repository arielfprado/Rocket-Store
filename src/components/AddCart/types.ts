import { HTMLAttributes } from "react";
import { ISCProductProps } from "../ShoppingCart/ShoppingCartCard/types";

export interface IAddCartProps extends HTMLAttributes<HTMLButtonElement> {
    scproduct: ISCProductProps;

    handleAddProductOnShoppingCart: (product: ISCProductProps) => void;
    inShoppingCart: boolean;

}