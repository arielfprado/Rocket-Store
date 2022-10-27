import React, { ReactNode } from "react";
import { IProductProps } from "../../components/Pagination/types";

export interface ISearchParameterContextData {
  searchParameter: string;
  setSearchParameter: React.Dispatch<React.SetStateAction<string>>;
  handleUpdateSearchParameter: () => void;
  searchedProducts: IProductProps[];
  setSearchedProducts: React.Dispatch<React.SetStateAction<IProductProps[]>>;
  updateSearchedProducts: (searchParameter: string) => void;
  /* isInFavorites: boolean;
    setIsInFavorites: React.Dispatch<React.SetStateAction<boolean>>; */
}

export interface ISearchParameterProviderProps {
  children: ReactNode;
}
