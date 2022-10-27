import { createContext, useState, useContext } from "react";
import { IProductProps } from "../../components/Pagination/types";
import { IFavoritesContextData, IFavoritesProviderProps } from "./types";

export const FavoritesContext = createContext({} as IFavoritesContextData);

export function FavoritesProvider(props: IFavoritesProviderProps): JSX.Element {
  const [favorites, setFavorites] = useState<IProductProps[]>(() => {
    const storagedProducts = localStorage.getItem("favorites");

    if (storagedProducts) {
      return JSON.parse(storagedProducts);
    }

    return [];
  });

  function isProductInFavorites(productId: string) {
    const productFound = favorites.find(
      (favoritesProduct) => favoritesProduct.id === productId
    );

    if (productFound) {
      return true;
    }

    return false;
  }

  function handleAddOrRemoveProductOnFavorites(product: IProductProps) {
    if (isProductInFavorites(product.id)) {
      const filteredFavorites = favorites?.filter(
        (favoritesProduct) => favoritesProduct.id !== product.id
      );

      setFavorites(filteredFavorites);
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));

      return;
    }

    setFavorites((prevState) => [...prevState, product]);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        handleAddOrRemoveProductOnFavorites,
        isProductInFavorites,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites(): IFavoritesContextData {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
}

export default FavoritesContext;
