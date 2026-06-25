// import { Link } from 'react-router-dom'

const Fabrics = () => {
  return (
    <section className="section fabric-section" id="fabrics">
      <div className="container">
        <header className="section-header">
          <div className="section-header__left">
            <p className="section-header__label">Our Fabrics</p>
            <h2 className="section-header__title">The Fabric is<br />the Product.</h2>
          </div>
        </header>

        <div className="fabric-grid">

          {/* <!-- Supima --> */}
          <article className="fabric-card" id="fabric-supima">
            <div className="fabric-card__top">
              <div className="fabric-card__icon fabric-card__icon--supima">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
              </div>
              <span className="fabric-card__origin">USA Origin</span>
            </div>
            <h3 className="fabric-card__name">Supima®</h3>
            <p className="fabric-card__tagline">The World's Softest Cotton</p>
            <p className="fabric-card__desc">
              Extra-long staple fibres from American farms. Exceptionally soft, colour-fast, and twice as strong as regular cotton.
            </p>
            <ul className="fabric-card__attrs">
              <li>Ultra-soft handfeel</li>
              <li>Colour retention</li>
              <li>Anti-pilling</li>
              <li>200+ thread count</li>
            </ul>
            <div className="fabric-card__price-note">From <strong>₹799</strong></div>
            <a href="collection.html?fabric=supima" className="btn btn--outline fabric-card__btn">Shop Supima</a>
          </article>

          {/* <!-- Heavy Duty --> */}
          <article className="fabric-card fabric-card--featured" id="fabric-heavy">
            <div className="fabric-card__top">
              <div className="fabric-card__icon fabric-card__icon--heavy">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <span className="fabric-card__badge-featured">Best Seller</span>
            </div>
            <h3 className="fabric-card__name">Heavy Duty</h3>
            <p className="fabric-card__tagline">260 GSM Structured Cotton</p>
            <p className="fabric-card__desc">
              High-weight structured cotton that holds its shape wash after wash. Designed for those who want substance with their style.
            </p>
            <ul className="fabric-card__attrs">
              <li>260 GSM weight</li>
              <li>Shape-retaining</li>
              <li>Anti-shrink</li>
              <li>Structured drape</li>
            </ul>
            <div className="fabric-card__price-note">From <strong>₹699</strong></div>
            <a href="collection.html?fabric=heavy-duty" className="btn btn--primary fabric-card__btn">Shop Heavy Duty</a>
          </article>

          {/* <!-- Breezo --> */}
          <article className="fabric-card" id="fabric-breezo">
            <div className="fabric-card__top">
              <div className="fabric-card__icon fabric-card__icon--breezo">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" /></svg>
              </div>
              <span className="fabric-card__origin">Breathable Tech</span>
            </div>
            <h3 className="fabric-card__name">Breezo™</h3>
            <p className="fabric-card__tagline">Airy. Cool. All-Day.</p>
            <p className="fabric-card__desc">
              Proprietary open-weave structure that maximises airflow. Your go-to for warm weather, travel, and long days on the move.
            </p>
            <ul className="fabric-card__attrs">
              <li>Open-weave structure</li>
              <li>Moisture-wicking</li>
              <li>Quick-dry</li>
              <li>Lightweight (140 GSM)</li>
            </ul>
            <div className="fabric-card__price-note">From <strong>₹599</strong></div>
            <a href="collection.html?fabric=breezo" className="btn btn--outline fabric-card__btn">Shop Breezo</a>
          </article>

        </div>

        {/* <!-- Fabric comparison bar --> */}
        <div className="fabric-compare">
          <div className="fabric-compare__label">Quick Compare</div>
          <div className="fabric-compare__row">
            <div className="fabric-compare__attr">Weight</div>
            <div className="fabric-compare__val">Breezo: 140gsm</div>
            <div className="fabric-compare__val">Heavy Duty: 260gsm</div>
            <div className="fabric-compare__val">Supima: 180gsm</div>
          </div>
          <div className="fabric-compare__row">
            <div className="fabric-compare__attr">Feel</div>
            <div className="fabric-compare__val">Airy &amp; Light</div>
            <div className="fabric-compare__val">Structured &amp; Dense</div>
            <div className="fabric-compare__val">Buttery &amp; Soft</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fabrics