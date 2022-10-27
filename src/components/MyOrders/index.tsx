import orderIcon from "../../assets/order-icon.svg";

import * as S from "./styles";

import { Link } from "../Link";

export interface IMyOrders {
  id: string;
  name: string;
  status: string;
  qtd: string;
  price: string;
}

const cookieName = "@e-commerce-orders-1.0.0";

export function MyOrders() {
  const nameOrder = localStorage.getItem(cookieName);
  // console.log(nameOrder);

  const myOrders: IMyOrders[] = [
    {
      id: "121321",
      name: "Account details",
      status: "Processing ",
      qtd: "1",
      price: "R$ 100,00",
    },
    {
      id: "121322",
      name: "Account details",
      status: "Processing ",
      qtd: "1",
      price: "R$ 100,00",
    },
    {
      id: "121323",
      name: "Account details",
      status: "Processing ",
      qtd: "1",
      price: "R$ 100,00",
    },
  ];
  return (
    <S.MyOrdersWrapper>
      <div className="container">
        <h1>Meus pedidos</h1>
        <table className="rwd-table">
          <tr>
            <th>Nome do pedido</th>
            <th>ID do pedido</th>
            <th>Status</th>
            <th>QTD</th>
            <th>Total</th>
            <th></th>
          </tr>
          {myOrders.map((e) => (
            <tr key={e.id}>
              <td data-th="Nome do pedido">
                <img src={orderIcon} width={47} height={33} /> 
                <p>{nameOrder}</p>
              </td>
              <td data-th="ID do pedido">
                {"# "}
                {e.id}
              </td>
              <td data-th="Status">{e.status}</td>
              <td data-th="QTD">{e.qtd}</td>
              <td data-th="Total">{e.price}</td>
              <td data-th="Ação">
                <Link to="/">
                <button className="action">Detalhes</button>
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </S.MyOrdersWrapper>
  );
}
