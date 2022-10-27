import { IAppProviderProps } from "../interfaces/AppProvider";

import { ToastContainer } from "react-toastify";

import { SortParameterProvider } from "./useSortParameter/index";

import { FavoritesProvider } from "./useFavorites";

import { ShoppingCartProvider } from "./useShoppingCart";

import { SearchParameterProvider } from "./useSearch";

export function AppProvider(props: IAppProviderProps) {
  return (
    <SearchParameterProvider>
      <ShoppingCartProvider>
        <FavoritesProvider>
          <SortParameterProvider>
            <ToastContainer />
            {props.children}
          </SortParameterProvider>
        </FavoritesProvider>
      </ShoppingCartProvider>
    </SearchParameterProvider>
  );
}
