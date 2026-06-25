// import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="section brand-story" id="about">
      <div className="container">
        <div className="brand-story__inner">
          <div className="brand-story__visual">
            <div className="brand-story__image-block">
              <div className="brand-story__placeholder">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.7"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
              </div>
              <div className="brand-story__stat-card brand-story__stat-card--1">
                <span className="brand-story__stat-num">3</span>
                <span className="brand-story__stat-label">Fabrics<br />Curated</span>
              </div>
              <div className="brand-story__stat-card brand-story__stat-card--2">
                <span className="brand-story__stat-num">₹999</span>
                <span className="brand-story__stat-label">Maximum<br />Price</span>
              </div>
            </div>
          </div>
          <div className="brand-story__text">
            <p className="brand-story__eyebrow label">Our Story</p>
            <h2 className="brand-story__headline">
              We built a brand<br />
              around one question:
            </h2>
            <blockquote className="brand-story__quote">
              "Why can't a ₹999 tee feel like a ₹5,000 one?"
            </blockquote>
            <p className="brand-story__body">
              N°1 Essentials was born from frustration. Every tee either felt cheap or cost a fortune. We spent two years sourcing the best fabrics in the world — Supima cotton from American farms, heavy structured blends, and our own Breezo open-weave — and built a direct-to-customer brand that cuts out every middleman.
            </p>
            <p className="brand-story__body">
              No logos. No noise. Just fabric that speaks for itself.
            </p>
            <div className="brand-story__values">
              <div className="brand-story__value">
                <span className="brand-story__value-icon">◆</span>
                <div>
                  <strong>Fabric First</strong>
                  <p>We start with the material, not the design.</p>
                </div>
              </div>
              <div className="brand-story__value">
                <span className="brand-story__value-icon">◆</span>
                <div>
                  <strong>Radical Transparency</strong>
                  <p>We show you exactly what's in every tee.</p>
                </div>
              </div>
              <div className="brand-story__value">
                <span className="brand-story__value-icon">◆</span>
                <div>
                  <strong>Fair Pricing</strong>
                  <p>Premium quality. Always under ₹999.</p>
                </div>
              </div>
            </div>
            <a href="shop.html" className="btn btn--primary">Shop the Collection</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory