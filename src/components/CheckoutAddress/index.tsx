import { useEffect, useState } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import { AiFillCheckCircle, AiOutlineLine } from "react-icons/ai";
import { useShoppingCart } from "../../contexts/useShoppingCart";

import { schemaCheckoutStep1 } from "../../helpers/schemaCheckoutStep1";

import * as Styles from "./styles";
import api from '../../services/api';

import { 
  FormValues, 
  IAddressDataProps, 
  ICheckoutAddress, 
  IShippingDataProps
  } from "./types";


export function CheckoutAddress({ changeStep }: ICheckoutAddress) {
  const handleSubmit = () => {
    changeStep();
    const cookieName = "@e-commerce-orders-1.0.0";
    const orders = localStorage.getItem(cookieName)
    const { shoppingCart, setShoppingCart } = useShoppingCart();
  
    if (orders) {
      const updatedOrders = [
        ...JSON.parse(orders),
        ...shoppingCart
      ]
      
      localStorage.setItem(cookieName, JSON.stringify(updatedOrders))
      console.log("chegou ao final")
    } else {
      localStorage.setItem(cookieName, JSON.stringify(shoppingCart))
    }
  
    setShoppingCart([]);
    console.log("chegou ao final 2")
  };
  
  const formValue = useFormik(
    { initialValues: {
    address: "0",
    firstAddress: "",
    street: "",
    cep: "",
  },
  onSubmit: (values) => console.log(values),
});

  const [address, setAddress] = useState<IAddressDataProps>({} as IAddressDataProps);
  
  useEffect(() => {
    api
      .get('/addresses')
      .then((response) => {
        setAddress(response.data);
      })
  }, [])


  const renderAddress = (address: IAddressDataProps) => {
    return (
      <>
        {address?.content?.map((address, index) => (
          <option key={index} value={index}>
            {`Endereço ${index + 1}`}
          </option>
        ))}
      </>
    )
  }

  const [select, setSelected] = useState<number>(0)

  const handleSelectInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(Number(e.target.value));
  }

  const [data, setData] = useState<IShippingDataProps>({} as IShippingDataProps)

  useEffect(() => {
    api.get("/shippings").then((response) => {
      setData(response.data)
    })
  }, [])

  const renderShipping = (data: IShippingDataProps) => {
    return (
      <>
        {data?.content?.map((shipping) => (
          <option>{shipping.title}</option>
        ))}
      </>
    )
  }


  return (
    <Styles.Container>
      <div className="container">
        <Formik
          initialValues={
            {
              address: "0",
              firstAddress: address?.content ? address?.content[Number(formValue.values.address)].address : '',
              street: "",
              cep: address?.content ? address?.content[Number(formValue.values.address)].cep : '',
              dispatch: "frete1",
            }
          }
          validationSchema={schemaCheckoutStep1}
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
                  <strong>Detalhes do envio</strong>
                </p>

                <div className="group">
                  <Field name="address">
                    {({ field, meta }: any) => (
                      <label className="endereco-salvo" htmlFor="address">
                        <div>Endereços salvos</div>
                        <div>
                          <select
                            name="address"
                            id="address"
                            {...field}
                            onChange={formValue.handleChange}
                            value={formValue.values.address}
                            className={
                              meta.touched && meta.error ? "error-id" : null
                            }
                          >
                            {renderAddress(address)}
                          </select>
                        </div>
                      </label>
                    )}
                  </Field>
                </div>

                <div className="group">
                  <Field name="firstAddress">
                    {({ field, meta }: any) => (
                      <label className="first-address" htmlFor="firstAddress">
                        <div>
                          <h4>Primeira linha de endereço</h4>
                        </div>
                        <input
                          name="firstAddress"
                          id="firstAddress"
                          type="text"
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
                  <Field name="street">
                    {({ field, meta }: any) => (
                      <label htmlFor="street" className="street">
                        <div>
                          <h4>Rua</h4>
                        </div>
                        <input
                          name="street"
                          id="street"
                          type="text"
                          {...field}
                          className={
                            meta.touched && meta.error ? "error-id" : null
                          }
                        />
                      </label>
                    )}
                  </Field>
                </div>

                <div className="cep-forma-envio-wrapper">
                  <div className="group">
                    <Field name="cep">
                      {({ field, meta }: any) => (
                        <label htmlFor="cep" className="cep">
                          <h4>CEP</h4>
                          <input
                            name="cep"
                            id="cep"
                            type="text"
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
                    <Field name="dispatch">
                      {({ field, meta }: any) => (
                        <label htmlFor="dispatch" className="dispatch">
                          <h4>Selecione a forma de envio</h4>
                          <select
                            name="dispatch"
                            id="dispatch"
                            {...field}
                            className={
                              meta.touched && meta.error ? "error-id" : null
                            }
                          >
                            {renderShipping(data)}
                          </select>
                        </label>
                      )}
                    </Field>
                  </div>
                </div>

                <div className="buttons-wrapper">
                  <button className="cancelar-button">Cancelar</button>
                  <button className="pagamento-button" type="submit">
                    Ir para pagamento
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
