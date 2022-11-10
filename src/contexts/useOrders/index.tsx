import { createContext, useState, useContext } from "react"
import { ISCProductProps } from "../../components/ShoppingCart/ShoppingCartCard/types"
import { localstorageNames } from "../../constants/localstorageNames"
import { useShoppingCart } from "../useShoppingCart"
import {
  IOrdersContextData,
  IOrdersProps,
  IOrdersProviderProps,
  OrderStatusEnum,
} from "./types"

export const OrdersContext = createContext({} as IOrdersContextData)

export function OrdersProvider(props: IOrdersProviderProps): JSX.Element {
  const { setShoppingCart } = useShoppingCart()

  const [orders, setOrders] = useState<IOrdersProps[]>(() => {
    const storagedProducts = localStorage.getItem(localstorageNames.orders)

    if (storagedProducts) {
      return JSON.parse(storagedProducts)
    }

    return []
  })

  function createOrder(products: ISCProductProps[]) {
    const newOrder: IOrdersProps = {
      id: String(orders.length + 1),
      products: products,
      status: OrderStatusEnum.PENDING,
    }

    setOrders((prevState) => [...prevState, newOrder])
    localStorage.setItem(
      localstorageNames.orders,
      JSON.stringify([...orders, newOrder])
    )

    setShoppingCart([])
    localStorage.removeItem(localstorageNames.cart)
  }

  return (
    <OrdersContext.Provider
      value={{
        orders,
        setOrders,
        createOrder,
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  )
}

export function useOrders(): IOrdersContextData {
  const context = useContext(OrdersContext)

  if (!context) {
    throw new Error("useOrders must be used within a OrdersProvider")
  }

  return context
}

export default OrdersContext
