import { createContext, useState, useContext, useEffect } from "react";
import {
  ISearchParameterContextData,
  ISearchParameterProviderProps,
} from "./types";
import { IDataProps, IProductProps } from "../../components/Pagination/types";

import api from "../../services/api";

export const SearchParameterContext = createContext(
  {} as ISearchParameterContextData
);

export function SearchParameterProvider(
  props: ISearchParameterProviderProps
): JSX.Element {
  const [searchParameter, setSearchParameter] = useState("");

  const [searchedProducts, setSearchedProducts] = useState<IProductProps[]>(
    {} as IProductProps[]
  );

  /*  const [isInFavorites, setIsInFavorites] =useState<boolean>(false)
    
    const [favorites, setFavorites] = useState<IProductProps[]>(() => {
        const storagedProducts = localStorage.getItem("favorites")

        if(storagedProducts) {
            return JSON.parse(storagedProducts)
        }

        return []
    }) */

  /* useEffect(() => {
        (async () => {
            const storagedProducts = await localStorage.getItem("favorites")

            if(storagedProducts) {
                setFavorites(JSON.parse(storagedProducts))
            }

            setFavorites([])
        })
        
    }, []) */

  async function updateSearchedProducts(searchParameter: string) {
    if (searchParameter === "") {
      setSearchedProducts([]);
      return;
    }

    const newSearchedProducts: IProductProps[] = await api
      .get(
        `/products?page=0&size=12&sort=title%2Casc&searchTerm=${searchParameter}`
      )
      .then((response) => {
        return response.data.content;
      });

    setSearchedProducts(newSearchedProducts);
  }

  async function handleUpdateSearchParameter() {
    /* console.log(isInFavorites)
        console.log(favorites)
        
        if(isInFavorites) {

            const favsListFiltered = await favorites.filter(
                (favsListProduct) => favsListProduct.title.includes(searchParameter)
            )
            
            if(favsListFiltered) {
                setSearchedProducts(favsListFiltered)
            }
            
            setSearchedProducts([])
            return
        } */

    updateSearchedProducts(searchParameter);
    return;
  }

  useEffect(() => {
    handleUpdateSearchParameter();
  }, [searchParameter]);

  return (
    <SearchParameterContext.Provider
      value={{
        searchParameter,
        setSearchParameter,
        handleUpdateSearchParameter,
        searchedProducts,
        setSearchedProducts,
        updateSearchedProducts,
      }}
    >
      {props.children}
    </SearchParameterContext.Provider>
  );
}

export function useSearchParameter(): ISearchParameterContextData {
  const context = useContext(SearchParameterContext);

  if (!context) {
    throw new Error("useSearchParameter must be used within a SearchProvider");
  }

  return context;
}
