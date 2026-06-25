// import { Link } from 'react-router-dom'

/* COMPONENTS */
// import ProductCard from '../product/ProductCard'

/* DATA */
// import { products } from '../../data/products'

const BestSellers = () => {

  // const bestSellers = products.slice(0, 4)

  return (
    <section className="section bestsellers-section" id="bestsellers">
      <div className="container">
        <header className="section-header">
          <div className="section-header__left">
            <p className="section-header__label">Best Sellers</p>
            <h2 className="section-header__title">Our Most-Loved<br />Essentials</h2>
          </div>
          <a href="shop.html" className="section-header__link">
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </a>
        </header>

        <div className="grid-4">
          {/* <!-- Product 1 --> */}
          <article className="product-card" data-product data-product-id="P001" data-product-name="Classic Supima Tee" data-product-price="799" data-product-fabric="Supima">
            <a href="product.html?id=P001" className="product-card__image-wrap">
              <div className="product-card__image-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                <span>Product Image</span>
              </div>
              <span className="product-card__badge">Best Seller</span>
              <div className="product-card__overlay">
                <button className="product-card__quick-add" data-quick-add>+ Quick Add</button>
              </div>
            </a>
            <div className="product-card__info">
              <p className="product-card__category">Regular Tee · Supima</p>
              <h3 className="product-card__name">Classic Supima Tee</h3>
              <p className="product-card__fabric">180 GSM · Ultra-soft</p>
              <div className="product-card__price-row">
                <span className="product-card__price">₹799</span>
              </div>
              <div className="product-card__colors">
                <span className="color-dot active" style={{ background: "#0A0A0A" }} title="Black"></span>
                <span className="color-dot" style={{ background: "#FFFFFF", borderColor: "#ccc" }} title="White" ></span>
                <span className="color-dot" style={{ background: "#C4A882" }} title="Sand"></span>
                <span className="color-dot" style={{ background: "#6B7F8E" }} title="Slate"></span>
              </div>
            </div>
          </article>

          {/* <!-- Product 2 --> */}
          <article className="product-card" data-product data-product-id="P002" data-product-name="Heavy Drop Tee" data-product-price="899" data-product-fabric="Heavy Duty">
            <a href="product.html?id=P002" className="product-card__image-wrap">
              <div className="product-card__image-placeholder" style={{ background: "#F0EDE8" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                <span>Product Image</span>
              </div>
              <span className="product-card__badge">New</span>
              <div className="product-card__overlay">
                <button className="product-card__quick-add" data-quick-add>+ Quick Add</button>
              </div>
            </a>
            <div className="product-card__info">
              <p className="product-card__category">Oversized Tee · Heavy Duty</p>
              <h3 className="product-card__name">Heavy Drop Tee</h3>
              <p className="product-card__fabric">260 GSM · Structured</p>
              <div className="product-card__price-row">
                <span className="product-card__price">₹899</span>
                <span className="product-card__price--original">₹1,099</span>
              </div>
              <div className="product-card__colors">
                <span className="color-dot active" style={{ background: "#5C4B3A" }} title="Mocha"></span>
                <span className="color-dot" style={{ background: "#0A0A0A" }} title="Black"></span>
                <span className="color-dot" style={{ background: "#8C7B6B" }} title="Taupe"></span>
              </div>
            </div>
          </article>

          {/* <!-- Product 3 --> */}
          <article className="product-card" data-product data-product-id="P003" data-product-name="Breezo Polo" data-product-price="699" data-product-fabric="Breezo">
            <a href="product.html?id=P003" className="product-card__image-wrap">
              <div className="product-card__image-placeholder" style={{ background: "#EEF2F5" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                <span>Product Image</span>
              </div>
              <div className="product-card__overlay">
                <button className="product-card__quick-add" data-quick-add>+ Quick Add</button>
              </div>
            </a>
            <div className="product-card__info">
              <p className="product-card__category">Polo · Breezo</p>
              <h3 className="product-card__name">Breezo Polo</h3>
              <p className="product-card__fabric">140 GSM · Breathable</p>
              <div className="product-card__price-row">
                <span className="product-card__price">₹699</span>
              </div>
              <div className="product-card__colors">
                <span className="color-dot active" style={{ background: "#4A6B5C" }} title="Forest"></span>
                <span className="color-dot" style={{ background: "#FFFFFF", borderColor: "#ccc" }} title="White"></span>
                <span className="color-dot" style={{ background: "#C4A882" }} title="Sand"></span>
              </div>
            </div>
          </article>

          {/* <!-- Product 4 --> */}
          <article className="product-card" data-product data-product-id="P004" data-product-name="Supima Oversized Tee" data-product-price="949" data-product-fabric="Supima">
            <a href="product.html?id=P004" className="product-card__image-wrap">
              <div className="product-card__image-placeholder" style={{ background: "#F5F0EB" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                <span>Product Image</span>
              </div>
              <span className="product-card__badge">Limited</span>
              <div className="product-card__overlay">
                <button className="product-card__quick-add" data-quick-add>+ Quick Add</button>
              </div>
            </a>
            <div className="product-card__info">
              <p className="product-card__category">Oversized Tee · Supima</p>
              <h3 className="product-card__name">Supima Oversized Tee</h3>
              <p className="product-card__fabric">200 GSM · Cloud-soft</p>
              <div className="product-card__price-row">
                <span className="product-card__price">₹949</span>
              </div>
              <div className="product-card__colors">
                <span className="color-dot active" style={{ background: "#E8D9C8" }} title="Oat"></span>
                <span className="color-dot" style={{ background: "#0A0A0A" }} title="Black"></span>
                <span className="color-dot" style={{ background: "#7B8FA0" }} title="Storm"></span>
              </div>
            </div>
          </article>
        </div>

        {/* <!-- Price promise strip --> */}
        <div className="price-strip">
          <div className="price-strip__item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            <span>All products under ₹999</span>
          </div>
          <div className="price-strip__sep">·</div>
          <div className="price-strip__item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
            <span>Free shipping above ₹499</span>
          </div>
          <div className="price-strip__sep">·</div>
          <div className="price-strip__item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
            <span>30-day easy returns</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSellers