import React from 'react'

const OrderSummary = () => {
    return (
        <div>
            <aside className="checkout-summary" aria-label="Order summary">
                <div className="checkout-summary__inner">
                    <h2 className="checkout-summary__title">Order Summary</h2>

                    {/* <!-- Cart Items --> */}
                    <div className="co-items" id="co-items">
                        {/* <!-- rendered by JS --> */}
                    </div>

                    <div className="divider"></div>

                    {/* <!-- Promo Input --> */}
                    <div className="promo-section">
                        <div className="promo-input-row">
                            <input type="text" className="promo-input" id="co-promo" placeholder="Promo code" aria-label="Promo code" />
                            <button className="btn btn--ghost promo-apply" id="co-promo-apply">Apply</button>
                        </div>
                        <p className="promo-hint" id="co-promo-hint"></p>
                    </div>

                    <div className="divider"></div>

                    {/* <!-- Price Summary --> */}
                    <div className="price-breakdown">
                        <div className="price-row">
                            <span className="price-row__label">Subtotal</span>
                            <span className="price-row__val" id="co-subtotal">₹0</span>
                        </div>
                        <div className="price-row" id="co-shipping-row">
                            <span className="price-row__label">Shipping</span>
                            <span className="price-row__val" id="co-shipping">₹0</span>
                        </div>
                        <div className="price-row" id="co-discount-row" hidden>
                            <span className="price-row__label price-row__label--discount">Discount</span>
                            <span className="price-row__val price-row__val--discount" id="co-discount">−₹0</span>
                        </div>
                        <div className="price-row price-row--total">
                            <span className="price-row__label">Total <span style={{ fontWeight: 400, fontSize: "11px" }}>(incl. GST)</span></span>
                            <span className="price-row__val" id="co-total">₹0</span>
                        </div>
                    </div>

                    {/* <!-- Trust badges --> */}
                    <div className="checkout-trust-badges">
                        <div className="checkout-trust-badge">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            Secure Payment
                        </div>
                        <div className="checkout-trust-badge">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></svg>
                            Easy Returns
                        </div>
                        <div className="checkout-trust-badge">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                            Fast Delivery
                        </div>
                    </div>

                    {/* <!-- Place Order --> */}
                    <button className="btn btn--primary btn--full checkout-place-btn" id="place-order">
                        Place Order
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                    </button>

                    <p className="checkout-terms-note">
                        By placing your order, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                    </p>
                </div>
            </aside>
        </div>
    )
}

export default OrderSummary
