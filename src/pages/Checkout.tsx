import { useState } from "react"
import { CheckoutAddress } from "../components/CheckoutAddress"
import { CheckoutPayment } from "../components/CheckoutPayment"
import * as Styles from "../styles/pages/Checkout"

export function Checkout() {
  const [checkoutStep, setCheckoutStep] = useState(1)

  function nextStep() {
    setCheckoutStep((prevState) => prevState + 1)
  }

  return (
    <Styles.Container>
      <h1>Checkout</h1>
      {checkoutStep === 1 ? (
        <CheckoutAddress changeStep={nextStep} />
      ) : (
        <CheckoutPayment />
      )}
    </Styles.Container>
  )
}
