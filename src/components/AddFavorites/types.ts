import { HTMLAttributes } from "react";
import { IProductProps } from "../Pagination/types";

export interface IAddFavoritesProps extends HTMLAttributes<HTMLButtonElement> {
    product: IProductProps;
    handleAddOrRemoveProductOnFavorites: (product: IProductProps) => void;
    inFavorites: boolean;
}