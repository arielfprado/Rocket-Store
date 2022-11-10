import { IAppProviderProps } from "../interfaces/AppProvider"
import { ToastContainer } from "react-toastify"
import { SortParameterProvider } from "./useSortParameter/index"
import { FavoritesProvider } from "./useFavorites"
import { ShoppingCartProvider } from "./useShoppingCart"
import { SearchParameterProvider } from "./useSearch"
import { OrdersProvider } from "./useOrders"

export function AppProvider(props: IAppProviderProps) {
  return (
    <SearchParameterProvider>
      <ShoppingCartProvider>
        <OrdersProvider>
          <FavoritesProvider>
            <SortParameterProvider>
              <ToastContainer />
              {props.children}
            </SortParameterProvider>
          </FavoritesProvider>
        </OrdersProvider>
      </ShoppingCartProvider>
    </SearchParameterProvider>
  )
}
