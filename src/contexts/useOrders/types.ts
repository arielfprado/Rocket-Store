import React, { ReactNode } from "react"
import { ISCProductProps } from "../../components/ShoppingCart/ShoppingCartCard/types"

export enum OrderStatusEnum {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface IOrdersProps {
  id: string
  products: ISCProductProps[]
  status: OrderStatusEnum
}

export interface IOrdersContextData {
  orders: IOrdersProps[]
  setOrders: React.Dispatch<React.SetStateAction<IOrdersProps[]>>
  createOrder: (products: ISCProductProps[]) => void
}

export interface IOrdersProviderProps {
  children: ReactNode
}
