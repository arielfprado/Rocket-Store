import { useState } from "react"
import { CheckoutAddress } from "../components/CheckoutAddress"
import { CheckoutPayment } from "../components/CheckoutPayment"
import * as Styles from "../styles/pages/Checkout"

export function Checkout() {
  const [checkoutStep, setCheckoutStep] = useState(1)

  return (
    <Styles.Container>
      <h1>Checkout</h1>
      {checkoutStep === 1 ? (
        <CheckoutPayment />
      ) : (
        <CheckoutAddress changeStep={() => setCheckoutStep(2)} />
      )}
    </Styles.Container>
  )
}
