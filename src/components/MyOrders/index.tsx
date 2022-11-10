import orderIcon from "../../assets/order-icon.svg";

import * as Styles from "./styles";

import { Link } from "../Link";
import { useOrders } from "../../contexts/useOrders";

export function MyOrders() {
  const { orders } = useOrders();

  return (
    <Styles.MyOrdersWrapper>
      <div className="container">
        <h1>Meus pedidos</h1>
        <table className="rwd-table">
          <>
            <tr>
              <th>Nome do pedido</th>
              <th>ID do pedido</th>
              <th>Status</th>
              <th>QTD</th>
              <th>Total</th>
              <th></th>
            </tr>

            {orders.length > 0 &&
              orders.map((order) => {
                return order.products.map((product) => (
                  <tr key={product.id}>
                    <td data-th="Nome do pedido">
                      <img src={orderIcon} width={47} height={33} />
                      <p>{product.title}</p>
                    </td>
                    <td data-th="ID do pedido">
                      {`# ${order.id}`}
                    </td>
                    <td data-th="Status">{order.status}</td>
                    <td data-th="QTD">{product.quantity}</td>
                    <td data-th="Total">{product.price}</td>
                    <td data-th="Ação">
                      <Link to={`/orderDetails/${order.id}`}>
                        <button className="action">Detalhes</button>
                      </Link>
                    </td>
                  </tr>
                ))
              })}
          </>
        </table>
      </div>
    </Styles.MyOrdersWrapper>
  )
}
