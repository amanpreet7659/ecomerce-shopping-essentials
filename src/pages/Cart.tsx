import { Link } from "react-router-dom"
import Breadcrumbs from "../components/common/Breadcrumbs"
import MainLayout from "../layouts/MainLayout"

const Cart = () => {
  return (<MainLayout>
    <main>
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb" style={{ paddingTop: "var(--space-lg)" }}>
          <Breadcrumbs items={[{ label: "Home", path: "/home" }, { label: "Cart", path: "/cart" }]} />
        </nav>
        <div className="cart-layout" id="cart-layout">

          {/* <!-- ── CART ITEMS ── --> */}
          <section className="cart-items-section" aria-label="Cart items" id="cart-items-section">
            <header className="cart-header">
              <h1 className="cart-header__title">Your Cart</h1>
              <span className="cart-header__count" id="cart-item-count">0 items</span>
            </header>

            {/* <!-- Cart items will be rendered here --> */}
            <div id="cart-items-list" aria-live="polite">
              {/* <!-- Dynamic content --> */}
            </div>

            {/* <!-- Empty State --> */}
            <div className="cart-empty" id="cart-empty" hidden>
              <div className="cart-empty__icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <h2 className="cart-empty__title">Your cart is empty</h2>
              <p className="cart-empty__desc">Looks like you haven't added anything yet. Browse our fabrics and find your
                essentials.</p>
              <Link to='/shop' className="btn btn--primary">Start Shopping</Link>
            </div>

            {/* <!-- Continue shopping --> */}
            <div className="cart-continue" id="cart-continue">
              <Link to='/shop' className="cart-continue__link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 12H5m7-7-7 7 7 7" />
                </svg>
                Continue Shopping
              </Link>
            </div>
          </section>

          {/* <!-- ── ORDER SUMMARY ── --> */}
          <aside className="cart-summary" aria-label="Order summary">
            <div className="cart-summary__inner">
              <h2 className="cart-summary__title">Order Summary</h2>

              {/* <!-- Promo Code --> */}
              <div className="promo-section">
                <div className="promo-input-row">
                  <input type="text" className="promo-input" id="promo-input" placeholder="Promo code"
                    aria-label="Enter promo code" />
                  <button className="btn btn--ghost promo-apply" id="promo-apply">Apply</button>
                </div>
                <p className="promo-hint" id="promo-hint"></p>
              </div>

              <div className="divider"></div>

              {/* <!-- Price Breakdown --> */}
              <div className="price-breakdown">
                <div className="price-row">
                  <span className="price-row__label">Subtotal</span>
                  <span className="price-row__val" id="summary-subtotal">₹0</span>
                </div>
                <div className="price-row" id="shipping-row">
                  <span className="price-row__label">Shipping</span>
                  <span className="price-row__val" id="summary-shipping">₹49</span>
                </div>
                <div className="price-row" id="discount-row" hidden>
                  <span className="price-row__label price-row__label--discount">Promo Discount</span>
                  <span className="price-row__val price-row__val--discount" id="summary-discount">−₹0</span>
                </div>
                <div className="price-row price-row--total">
                  <span className="price-row__label">Total</span>
                  <span className="price-row__val" id="summary-total">₹0</span>
                </div>
              </div>

              {/* <!-- Free Shipping Progress --> */}
              <div className="shipping-progress" id="shipping-progress">
                <div className="shipping-progress__text">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                  <span id="shipping-progress-text">Add ₹499 more for free shipping</span>
                </div>
                <div className="shipping-progress__bar">
                  <div className="shipping-progress__fill" id="shipping-fill" style={{ width: "0%" }}></div>
                </div>
              </div>

              {/* <!-- CTA --> */}
              <button className="btn btn--primary btn--full cart-checkout-btn" id="checkout-btn">
                Proceed to Checkout
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </button>

              {/* <!-- Trust --> */}
              <div className="cart-trust">
                <div className="cart-trust__item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Secure checkout</span>
                </div>
                <div className="cart-trust__item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  </svg>
                  <span>30-day returns</span>
                </div>
                <div className="cart-trust__item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                  <span>All major cards accepted</span>
                </div>
              </div>

              <div className="divider"></div>

              {/* <!-- Payment Methods --> */}
              <div className="payment-methods">
                <p className="payment-methods__label">We accept</p>
                <div className="payment-icons">
                  <span className="payment-icon">UPI</span>
                  <span className="payment-icon">Visa</span>
                  <span className="payment-icon">MC</span>
                  <span className="payment-icon">RuPay</span>
                  <span className="payment-icon">COD</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section className="section cart-recommendations" id="cart-recs">
        <div className="container">
          <header className="section-header">
            <div className="section-header__left">
              <p className="section-header__label">Don't Miss These</p>
              <h2 className="section-header__title">Complete Your<br />Collection</h2>
            </div>
            <a href="shop.html" className="section-header__link">View All →</a>
          </header>

          <div className="grid-4">
            <article className="product-card" data-product data-product-id="P001" data-product-name="Classic Supima Tee" data-product-price="799">
              <a href="product.html?id=P001" className="product-card__image-wrap">
                <div className="product-card__image-placeholder">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                  <span>Product Image</span>
                </div>
                <div className="product-card__overlay"><button className="product-card__quick-add" data-quick-add>+ Quick Add</button></div>
              </a>
              <div className="product-card__info">
                <p className="product-card__category">Regular Tee · Supima</p>
                <h3 className="product-card__name">Classic Supima Tee</h3>
                <div className="product-card__price-row"><span className="product-card__price">₹799</span></div>
              </div>
            </article>
            <article className="product-card" data-product data-product-id="P003" data-product-name="Breezo Polo" data-product-price="699">
              <a href="product.html?id=P003" className="product-card__image-wrap">
                <div className="product-card__image-placeholder" style={{ background: "#EEF2F5" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                  <span>Product Image</span>
                </div>
                <div className="product-card__overlay"><button className="product-card__quick-add" data-quick-add>+ Quick Add</button></div>
              </a>
              <div className="product-card__info">
                <p className="product-card__category">Polo · Breezo</p>
                <h3 className="product-card__name">Breezo Polo</h3>
                <div className="product-card__price-row"><span className="product-card__price">₹699</span></div>
              </div>
            </article>
            <article className="product-card" data-product data-product-id="P002" data-product-name="Heavy Drop Tee" data-product-price="899">
              <a href="product.html?id=P002" className="product-card__image-wrap">
                <div className="product-card__image-placeholder" style={{ background: "#F0EDE8" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                  <span>Product Image</span>
                </div>
                <div className="product-card__overlay"><button className="product-card__quick-add" data-quick-add>+ Quick Add</button></div>
              </a>
              <div className="product-card__info">
                <p className="product-card__category">Oversized · Heavy Duty</p>
                <h3 className="product-card__name">Heavy Drop Tee</h3>
                <div className="product-card__price-row"><span className="product-card__price">₹899</span></div>
              </div>
            </article>
            <article className="product-card" data-product data-product-id="P006" data-product-name="Breezo Round Neck" data-product-price="599">
              <a href="product.html?id=P006" className="product-card__image-wrap">
                <div className="product-card__image-placeholder" style={{ background: "#EDF3F0" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                  <span>Product Image</span>
                </div>
                <div className="product-card__overlay"><button className="product-card__quick-add" data-quick-add>+ Quick Add</button></div>
              </a>
              <div className="product-card__info">
                <p className="product-card__category">Regular Tee · Breezo</p>
                <h3 className="product-card__name">Breezo Round Neck</h3>
                <div className="product-card__price-row"><span className="product-card__price">₹599</span></div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
  )
}

export default Cart