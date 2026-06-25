// import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="hero" id="hero" aria-label="Hero">
            <div className="hero__inner">
                <div className="hero__content">
                    <span className="label hero__label">New Season — SS '25</span>
                    <h1 className="hero__headline">
                        Built for<br />
                        <em>Everyday</em><br />
                        Greatness.
                    </h1>
                    <p className="hero__subtext">
                        Premium essentials engineered from the world's finest fabrics.<br />
                        Nothing more. Nothing less.
                    </p>
                    <div className="hero__actions">
                        <a href="shop.html" className="btn btn--primary">Shop All</a>
                        <a href="collection.html" className="btn btn--outline">View Collections</a>
                    </div>
                </div>
                <div className="hero__visual">
                    <div className="hero__image-block hero__image-block--main">
                        <div className="hero__image-placeholder">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                            <span>Tee — Supima Black</span>
                        </div>
                        <span className="hero__image-tag">Supima Cotton</span>
                    </div>
                    <div className="hero__image-block hero__image-block--secondary">
                        <div className="hero__image-placeholder hero__image-placeholder--light">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                            <span>Oversized Tee</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__scroll-hint" aria-hidden="true">
                <span>Scroll</span>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none"><rect x="1" y="1" width="10" height="18" rx="5" stroke="currentColor" stroke-width="1.2" /><circle cx="6" cy="5" r="1.5" fill="currentColor"><animate attributeName="cy" from="5" to="14" dur="1.5s" repeatCount="indefinite" /></circle></svg>
            </div>
        </section>
    )
}

export default Hero