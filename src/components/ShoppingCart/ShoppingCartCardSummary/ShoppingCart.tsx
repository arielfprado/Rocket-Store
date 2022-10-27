import { FiArrowRight } from "react-icons/fi";
import { Link } from "../../Link";
import { useState, useEffect } from "react";
import { ICouponProps } from "./types";
import api from "../../../services/api";
import { useShoppingCart } from "../../../contexts/useShoppingCart";

import * as S from "./styles";

export function ShoppingCartCardSummary() {
  const [couponList, setCouponList] = useState<ICouponProps[]>();
  const [couponInput, setCouponInput] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const { shoppingCart } = useShoppingCart();

  useEffect(() => {
    api.get(`/coupons?page=0&size=10`).then((response) => {
      setCouponList(response.data.content);
    });
  }, []);

  useEffect(() => {
    setSubtotal(
      shoppingCart?.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [shoppingCart]);

  useEffect(() => {
    if (discount) {
      setTotal(subtotal * (1 - discount / 100));
    } else {
      setTotal(subtotal);
    }
  }, [discount, subtotal]);

  useEffect(() => {
    const couponFound = couponList?.find(
      (coupon) => couponInput === coupon.title
    );

    if (couponFound) {
      setDiscount(couponFound.discount);
      return;
    }

    setDiscount(0);
  }, [couponInput]);

  return (
    <S.ShoppingCartCardSummaryWrapper>

      <div className="cardsummary-main">
        <div className="cardsummary-discount">
          <p>Cupom de desconto</p>{" "}
          <input
            id="couponInput"
            type="text"
            placeholder="Insira um cupom"
            value={couponInput}
            onChange={(event) => setCouponInput(event.target.value)}
          />

        </div>
        <div className="cardsummary-info">
          <div className="card-summary-spacebetween">
            <p>Sub total</p>
            <p>{`R$ ${subtotal.toFixed(2)}`}</p>
          </div>
          <div className="card-summary-spacebetween">
            <p>Desconto</p>
            <p>{`${discount} %`}</p>
          </div>
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
        <Link to="/checkout" className="item">
          <button>
            Ir para o Checkout <FiArrowRight />
          </button>
        </Link>
      </div>
    </S.ShoppingCartCardSummaryWrapper>
  );
}
