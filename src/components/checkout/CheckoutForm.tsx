import CheckoutProgress from './CheckoutProgress'
import ContactInfoForm from './ContactInfoForm'
import OrderSummary from './OrderSummary'

const CheckoutForm = () => {

    return (<main className="checkout-page">
        <CheckoutProgress />
        <section className="checkout-section">
            <div className="container">
                <div className="checkout-layout">
                    <ContactInfoForm/>
                    <OrderSummary/>
                </div>
            </div>
        </section>
    </main>)
}

export default CheckoutForm