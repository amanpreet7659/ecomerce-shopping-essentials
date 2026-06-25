import { Link } from 'react-router-dom'

const ContactInfoForm = () => {
    return (<div className="checkout-forms">

        {/* <!-- ── CONTACT INFORMATION ── --> */}
        <section className="checkout-section" id="section-contact" aria-label="Contact information">
            <div className="checkout-section__header">
                <h2 className="checkout-section__title">Contact Information</h2>
                <Link to='/sign-n' className="checkout-section__action">Have an account? Sign in</Link>
            </div>
            <div className="checkout-section__body">
                <form id="contact-form">
                    <div className="form-field">
                        <label className="form-label" htmlFor="co-email">Email Address</label>
                        <div className="form-input-wrap">
                            <input
                                type="email"
                                id="co-email"
                                className="form-input"
                                placeholder="you@example.com"
                                // autocomplete="email"
                                required
                            />
                            <div className="form-input-icon">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                        </div>
                    </div>
                    <label className="form-check" style={{ marginTop: "var(--space-sm)" }}>
                        <input type="checkbox" name="email_updates" checked />
                        <span className="form-check__box"></span>
                        <span className="form-check__label">Email me about new fabric drops and exclusive offers</span>
                    </label>
                </form>
            </div>
        </section>

        {/* <!-- ── DELIVERY ADDRESS ── --> */}
        <section className="checkout-section" id="section-delivery" aria-label="Delivery address">
            <div className="checkout-section__header">
                <h2 className="checkout-section__title">Delivery Address</h2>
            </div>
            <div className="checkout-section__body">
                <form id="address-form">
                    <div className="form-row">
                        <div className="form-field">
                            <label className="form-label" htmlFor="co-fname">First Name</label>
                            <div className="form-input-wrap">
                                <input type="text" id="co-fname" className="form-input" placeholder="Arjun"
                                    //autocomplete="given-name"
                                    required />
                            </div>
                            <p className="form-error" id="co-fname-err"></p>
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="co-lname">Last Name</label>
                            <div className="form-input-wrap">
                                <input type="text" id="co-lname" className="form-input" placeholder="Sharma" required />
                            </div>
                            <p className="form-error" id="co-lname-err"></p>
                        </div>
                    </div>

                    <div className="form-field">
                        <label className="form-label" htmlFor="co-address">Address Line 1</label>
                        <div className="form-input-wrap">
                            <input type="text" id="co-address" className="form-input" placeholder="House / Flat no., Street" required />
                        </div>
                        <p className="form-error" id="co-addr-err"></p>
                    </div>

                    <div className="form-field">
                        <label className="form-label" htmlFor="co-address2">Address Line 2 <span style={{ color: "var(--color-mid-gray)", fontWeight: 400 }}>(optional)</span></label>
                        <div className="form-input-wrap">
                            <input type="text" id="co-address2" className="form-input" placeholder="Landmark, area" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-field">
                            <label className="form-label" htmlFor="co-city">City</label>
                            <div className="form-input-wrap">
                                <input type="text" id="co-city" className="form-input" placeholder="Mumbai" required />
                            </div>
                            <p className="form-error" id="co-city-err"></p>
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="co-pincode">PIN Code</label>
                            <div className="form-input-wrap">
                                <input type="text" id="co-pincode" className="form-input" placeholder="400001"
                                    // maxlength="6"
                                    required />
                            </div>
                            <p className="form-error" id="co-pin-err"></p>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-field">
                            <label className="form-label" htmlFor="co-state">State</label>
                            <div className="form-input-wrap">
                                <select id="co-state" className="form-input form-select" required>
                                    <option value="">Select state</option>
                                    <option>Andhra Pradesh</option>
                                    <option>Delhi</option>
                                    <option>Goa</option>
                                    <option>Gujarat</option>
                                    <option>Karnataka</option>
                                    <option>Kerala</option>
                                    <option>Maharashtra</option>
                                    <option>Punjab</option>
                                    <option>Rajasthan</option>
                                    <option>Tamil Nadu</option>
                                    <option>Telangana</option>
                                    <option>Uttar Pradesh</option>
                                    <option>West Bengal</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="co-phone">Phone</label>
                            <div className="form-input-wrap" style={{ display: "flex" }}>
                                <span className="phone-prefix">+91</span>
                                <input type="tel" id="co-phone" className="form-input form-input--phone" placeholder="98765 43210"
                                    // maxlength="10"
                                    required
                                // autocomplete="tel"
                                />
                            </div>
                            <p className="form-error" id="co-phone-err"></p>
                        </div>
                    </div>

                    <label className="form-check" style={{ marginTop: "var(--space-sm)" }}>
                        <input type="checkbox" name="save_address" checked />
                        <span className="form-check__box"></span>
                        <span className="form-check__label">Save this address for future orders</span>
                    </label>
                </form>
            </div>
        </section>

        {/* <!-- ── SHIPPING METHOD ── --> */}
        <section className="checkout-section" id="section-shipping" aria-label="Shipping method">
            <div className="checkout-section__header">
                <h2 className="checkout-section__title">Shipping Method</h2>
            </div>
            <div className="checkout-section__body">
                <div className="shipping-options" role="radiogroup" aria-label="Choose shipping method">

                    <label className="shipping-option selected" id="ship-standard">
                        <input type="radio" name="shipping" value="standard" checked />
                        <div className="shipping-option__radio"></div>
                        <div className="shipping-option__info">
                            <div className="shipping-option__name-row">
                                <span className="shipping-option__name">Standard Delivery</span>
                                <span className="shipping-option__eta">3-5 business days</span>
                            </div>
                            <p className="shipping-option__desc">India Post / Delhivery · Tracked</p>
                        </div>
                        <span className="shipping-option__price" id="std-price">FREE</span>
                    </label>

                    <label className="shipping-option" id="ship-express">
                        <input type="radio" name="shipping" value="express" />
                        <div className="shipping-option__radio"></div>
                        <div className="shipping-option__info">
                            <div className="shipping-option__name-row">
                                <span className="shipping-option__name">Express Delivery</span>
                                <span className="shipping-option__eta">1-2 business days</span>
                            </div>
                            <p className="shipping-option__desc">BlueDart / Xpressbees · Priority tracked</p>
                        </div>
                        <span className="shipping-option__price">₹99</span>
                    </label>

                    <label className="shipping-option" id="ship-same">
                        <input type="radio" name="shipping" value="same-day" />
                        <div className="shipping-option__radio"></div>
                        <div className="shipping-option__info">
                            <div className="shipping-option__name-row">
                                <span className="shipping-option__name">Same Day Delivery</span>
                                <span className="shipping-option__eta">Today by 9 PM</span>
                            </div>
                            <p className="shipping-option__desc">Mumbai, Delhi, Bangalore only</p>
                        </div>
                        <span className="shipping-option__price">₹149</span>
                    </label>

                </div>
            </div>
        </section>

        {/* <!-- ── PAYMENT ── --> */}
        <section className="checkout-section" id="section-payment" aria-label="Payment method">
            <div className="checkout-section__header">
                <h2 className="checkout-section__title">Payment</h2>
                <div className="checkout-secure-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    SSL Secured
                </div>
            </div>
            <div className="checkout-section__body">

                {/* <!-- Payment method tabs --> */}
                <div className="payment-tabs" role="tablist" aria-label="Payment methods">
                    <button className="payment-tab active" role="tab" aria-selected="true" data-tab="upi" aria-controls="tab-upi">UPI</button>
                    <button className="payment-tab" role="tab" aria-selected="false" data-tab="card" aria-controls="tab-card">Card</button>
                    <button className="payment-tab" role="tab" aria-selected="false" data-tab="netbanking" aria-controls="tab-netbanking">Net Banking</button>
                    <button className="payment-tab" role="tab" aria-selected="false" data-tab="cod" aria-controls="tab-cod">Cash on Delivery</button>
                </div>

                {/* <!-- UPI --> */}
                <div className="payment-tab-content" id="tab-upi" role="tabpanel">
                    <div className="form-field">
                        <label className="form-label" htmlFor="upi-id">UPI ID</label>
                        <div className="form-input-wrap">
                            <input type="text" id="upi-id" className="form-input" placeholder="yourname@upi" />
                            <button type="button" className="form-input-icon form-input-icon--btn verify-btn" id="verify-upi">Verify</button>
                        </div>
                        <p className="form-hint">Enter your UPI ID and verify before placing the order</p>
                    </div>
                    <div className="upi-apps">
                        <p className="upi-apps__label">Or pay with</p>
                        <div className="upi-apps__row">
                            <button className="upi-app-btn" type="button" aria-label="Pay with Google Pay">
                                <svg width="20" height="20" viewBox="0 0 24 24"><text y="18" font-size="14" font-family="Arial" fill="#4285F4">G</text></svg>
                                GPay
                            </button>
                            <button className="upi-app-btn" type="button" aria-label="Pay with PhonePe">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#5F259F"><circle cx="12" cy="12" r="10" /></svg>
                                PhonePe
                            </button>
                            <button className="upi-app-btn" type="button" aria-label="Pay with Paytm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#00B9F1"><rect width="24" height="24" rx="4" /></svg>
                                Paytm
                            </button>
                            <button className="upi-app-btn" type="button" aria-label="Pay with BHIM">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#138808"><rect width="24" height="24" rx="4" /></svg>
                                BHIM
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Card --> */}
                <div className="payment-tab-content payment-tab-content--hidden" id="tab-card" role="tabpanel">
                    <div className="form-field">
                        <label className="form-label" htmlFor="card-num">Card Number</label>
                        <div className="form-input-wrap card-num-wrap">
                            <input
                                type="text"
                                id="card-num"
                                className="form-input"
                                placeholder="1234  5678  9012  3456"
                            // maxlength="19"
                            // autocomplete="cc-number"
                            />
                            <div className="form-input-icon card-icon-group">
                                <svg width="28" height="18" viewBox="0 0 38 24" fill="none"><rect width="38" height="24" rx="3" fill="#1A1F71" /><text x="4" y="16" fill="white" font-size="9" font-family="Arial" font-weight="bold">VISA</text></svg>
                            </div>
                        </div>
                    </div>
                    <div className="form-field">
                        <label className="form-label" htmlFor="card-name">Cardholder Name</label>
                        <div className="form-input-wrap">
                            <input type="text" id="card-name" className="form-input" placeholder="ARJUN SHARMA" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-field">
                            <label className="form-label" htmlFor="card-expiry">Expiry Date</label>
                            <div className="form-input-wrap">
                                <input type="text" id="card-expiry" className="form-input" placeholder="MM / YY"
                                //  maxlength="7"
                                />
                            </div>
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="card-cvv">
                                CVV
                                <button type="button" className="cvv-info-btn" aria-label="What is CVV?">?</button>
                            </label>
                            <div className="form-input-wrap">
                                <input type="password" id="card-cvv" className="form-input" placeholder="•••" />
                            </div>
                        </div>
                    </div>
                    <label className="form-check" style={{ marginTop: "var(--space-sm)" }}>
                        <input type="checkbox" name="save_card" />
                        <span className="form-check__box"></span>
                        <span className="form-check__label">Save card for faster checkout next time</span>
                    </label>
                </div>

                {/* <!-- Net Banking --> */}
                <div className="payment-tab-content payment-tab-content--hidden" id="tab-netbanking" role="tabpanel">
                    <div className="form-field">
                        <label className="form-label" htmlFor="bank-select">Select Your Bank</label>
                        <div className="form-input-wrap">
                            <select id="bank-select" className="form-input form-select">
                                <option value="">Choose a bank</option>
                                <option>HDFC Bank</option>
                                <option>ICICI Bank</option>
                                <option>State Bank of India</option>
                                <option>Axis Bank</option>
                                <option>Kotak Mahindra Bank</option>
                                <option>Yes Bank</option>
                                <option>Punjab National Bank</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <p className="form-hint">You will be redirected to your bank's secure portal to complete the payment.</p>
                </div>

                {/* <!-- Cash on Delivery --> */}
                <div className="payment-tab-content payment-tab-content--hidden" id="tab-cod" role="tabpanel">
                    <div className="cod-info">
                        <div className="cod-info__icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                        </div>
                        <div>
                            <p className="cod-info__title">Cash on Delivery</p>
                            <p className="cod-info__desc">Pay ₹49 extra for COD orders. Available across 19,000+ pin codes. Have exact change ready at delivery.</p>
                        </div>
                    </div>
                    <div className="cod-fee-row">
                        <span>COD handling fee</span>
                        <span className="cod-fee">+ ₹49</span>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- PLACE ORDER BUTTON (mobile) --> */}
        <div className="checkout-place-order-mobile">
            <button className="btn btn--primary btn--full checkout-place-btn" id="place-order-mobile">
                Place Order
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
            </button>
        </div>
    </div>)
}

export default ContactInfoForm
