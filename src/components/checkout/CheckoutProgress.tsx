import CheckoutConnector from './CheckoutConnector'
import CheckoutStep from './CheckoutSteps'

const CheckoutProgress = () => {
  return (
    <div className="checkout-progress-bar">
      <div className="container">
        <ol className="checkout-steps" aria-label="Checkout progress">
          {/* STEP 1 */}
          <CheckoutStep step={1} label="Cart" completed/>
          <CheckoutConnector />
          {/* STEP 2 */}
          <CheckoutStep step={2} label="Information" active />
          <CheckoutConnector />
          {/* STEP 3 */}
          <CheckoutStep step={3} label="Shipping"/>
          <CheckoutConnector />
          {/* STEP 4 */}
          <CheckoutStep step={4} label="Payment" />
        </ol>
      </div>
    </div>
  )
}

export default CheckoutProgress