import { useEffect, useMemo, useState } from "react"
import { useOrders } from "../contexts/useOrders"
import { IOrdersProps } from "../contexts/useOrders/types"
import { useNavigate, useParams } from "react-router-dom"

import * as Styles from '../styles/pages/OrderDetail'
import { ProductCardDetail } from "../components/ProductCardDetail"
import { FiArrowLeft } from "react-icons/fi"

export function OrderDetail() {
  const { orders } = useOrders()
  const navigate = useNavigate()
  const { id } = useParams()
  const [total, setSubTotal] = useState<number>(0)
  const orderDetail = useMemo(() => {
    return orders.length > 0 ? orders.find((order) => order.id === id) : {} as IOrdersProps
  }, [orders])

  useEffect(() => {
    setSubTotal(
      orderDetail?.products.reduce((acc, item) => acc + item.price * item.quantity, 0)
    )
  }, [orders])

  return (
    <Styles.OrderDetail>
      <div>
        <h1>{`Detalhes do pedido ${orderDetail!.id}`}</h1>
        <div className="results-list">
        {orderDetail!.products.map((product, index) => (
          <ProductCardDetail 
            key={product.id}
            id={product.id}
            title={product.title}
            tag={product.tag}
            discount={product.discount}
            price={product.price}
            images={product.images}
            categories={product.categories}
            quantity={product.quantity}
          />
            ))}
        </div>
          <div className="cardsummary-info">
          <div className="card-summary-spacebetween">
            <p>Frete</p>
            <p className="free">Grátis</p>
          </div>
          <div className="card-summary-spacebetween">
            <p>
              <strong>Total</strong>
            </p>
            <p>{`R$ ${total.toFixed(2)}`}</p>
          </div>
          </div>
          <button className="orders-button" onClick={() => navigate('/orders')}>
            Voltar para Meus Pedidos <FiArrowLeft />
          </button>
      </div>
    </Styles.OrderDetail>
  )
}