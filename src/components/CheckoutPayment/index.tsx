import { useEffect, useState } from "react"
import { Formik, Form, Field, useFormik } from "formik"
import { AiOutlineLine, AiFillCheckCircle } from "react-icons/ai"
import { schemaCheckoutStep2 } from "../../helpers/schemaCheckoutStep2"

import * as Styles from "./styles"
import api from "../../services/api"

import { ICardDataProps } from "./types"
import { useOrders } from "../../contexts/useOrders"
import { useShoppingCart } from "../../contexts/useShoppingCart"
import { useNavigate } from "react-router-dom"

export function CheckoutPayment() {
  const navigate = useNavigate()
  const { createOrder } = useOrders()
  const { shoppingCart } = useShoppingCart()

  const [card, setCard] = useState<ICardDataProps>({} as ICardDataProps)

  function handleSubmit() {
    createOrder(shoppingCart)

    navigate("/orders")
  }

  const formValue = useFormik({
    initialValues: {
      creditCard: "0",
      name: "",
      cardNumber: "",
      expiresIn: "",
      cvv: 0,
    },
    onSubmit: handleSubmit,
  })

  function renderCard(card: ICardDataProps) {
    return (
      <>
        {card?.content?.map((card, index) => (
          <option key={index} value={index}>
            {`Cartão ${index + 1}`}
          </option>
        ))}
      </>
    )
  }

  useEffect(() => {
    api.get("/cards").then((response) => {
      setCard(response.data)
    })
  }, [])

  return (
    <Styles.Container>
      <div className="container">
        <Formik
          initialValues={{
            creditCard: "0",
            name: card?.content
              ? card?.content[Number(formValue.values.creditCard)].name
              : "",
            cardNumber: card?.content
              ? card?.content[Number(formValue.values.creditCard)].cardNumber
              : "",
            expiresIn: card?.content
              ? card?.content[Number(formValue.values.creditCard)].expiresIn
              : "",
            cvv: card?.content
              ? card?.content[Number(formValue.values.creditCard)].cvv
              : 0,
          }}
          validationSchema={schemaCheckoutStep2}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({}) => (
            <Form>
              <div className="header-icon-wrapper">
                <div className="endereco-title">Endereço</div>
                <AiOutlineLine className="line-1" />
                <AiFillCheckCircle className="check" />
                <AiOutlineLine className="line-2" />
                <div className="payment-title">Pagamento</div>
              </div>

              <div className="form-wrapper">
                <p className="title">
                  <strong>Pagamento</strong>
                </p>

                <div className="group">
                  <Field name="creditCard">
                    {({ field, meta }: any) => (
                      <label className="cartao-salvo" htmlFor="creditCard">
                        <div>Cartões salvos</div>
                        <div>
                          <select
                            name="creditCard"
                            id="creditCard"
                            {...field}
                            onChange={formValue.handleChange}
                            value={formValue.values.creditCard}
                            className={
                              meta.touched && meta.error ? "error-id" : null
                            }
                          >
                            {renderCard(card)}
                          </select>
                        </div>
                      </label>
                    )}
                  </Field>
                </div>

                <div className="group">
                  <Field name="name">
                    {({ field, meta }: any) => (
                      <label htmlFor="name" className="credit-name">
                        <div>
                          <h4>Nome do cartão</h4>
                        </div>
                        <input
                          type="text"
                          name="creditName"
                          id="creditName"
                          {...field}
                          className={
                            meta.touched && meta.error ? "error-id" : null
                          }
                        />
                      </label>
                    )}
                  </Field>
                </div>

                <div className="group">
                  <Field name="cardNumber">
                    {({ field, meta }: any) => (
                      <label htmlFor="creditNumber" className="credit-number">
                        <div>
                          <h4>Número do cartão</h4>
                        </div>
                        <input
                          type="text"
                          name="creditNumber"
                          id="creditNumber"
                          {...field}
                          className={
                            meta.touched && meta.error ? "error-id" : null
                          }
                        />
                      </label>
                    )}
                  </Field>
                </div>

                <div className="cartao-wrapper">
                  <div className="group">
                    <Field name="expiresIn">
                      {({ field, meta }: any) => (
                        <label
                          htmlFor="creditExpires"
                          className="credit-expires"
                        >
                          <h4>Expira</h4>
                          <input
                            type="text"
                            name="creditExpires"
                            id="creditExpires"
                            {...field}
                            className={
                              meta.touched && meta.error ? "error-id" : null
                            }
                          />
                        </label>
                      )}
                    </Field>
                  </div>

                  <div className="group">
                    <Field name="cvv">
                      {({ field, meta }: any) => (
                        <label htmlFor="creditCvv" className="credit-cvv">
                          <h4>CVV</h4>
                          <input
                            type="text"
                            name="creditCvv"
                            id="creditCvv"
                            {...field}
                            className={
                              meta.touched && meta.error ? "error-id" : null
                            }
                          />
                        </label>
                      )}
                    </Field>
                  </div>
                </div>

                <div className="buttons-wrapper">
                  <button className="cancelar-button">Cancelar</button>
                  <button className="pagamento-button" type="submit">
                    Confirmar pagamento
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Styles.Container>
  )
}
