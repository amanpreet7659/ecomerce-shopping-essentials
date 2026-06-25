const NotFoundForm = () => {
    return (<main className="notfound-main" role="main">
        <div className="notfound-inner">

            {/* <!-- ── LEFT: Content ── --> */}
            <div className="notfound-content">
                <span className="notfound-eyebrow">Error — Page not found</span>

                <div className="notfound-code" aria-label="404">404</div>

                <div className="notfound-divider" aria-hidden="true"></div>

                <h1 className="notfound-title">
                    This page got<br />
                    <em style={{ fontStyle: "italic", color: "var(--color-dark-gray)" }}>lost in the fabric.</em>
                </h1>

                <p className="notfound-desc">
                    The page you're looking for has either moved, been removed, or never existed. Let's get you back to something worth wearing.
                </p>

                {/* <!-- Search --> */}
                <div className="notfound-search" role="search">
                    <input
                        type="search"
                        className="notfound-search-input"
                        id="notfound-search"
                        placeholder="Search for a product..."
                        aria-label="Search products"
                    />
                    <button className="notfound-search-btn" id="notfound-search-btn" aria-label="Submit search">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                        Search
                    </button>
                </div>

                {/* <!-- CTA buttons --> */}
                <div className="notfound-actions">
                    <a href="index.html" className="btn btn--primary">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                        Back to Home
                    </a>
                    <a href="shop.html" className="btn btn--outline">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                        Shop All Products
                    </a>
                </div>

                {/* <!-- Quick links --> */}
                <div className="notfound-links">
                    <p className="notfound-links__label">Or jump to</p>
                    <div className="notfound-links__row">
                        <a href="collection.html?cat=tees" className="notfound-link">Regular Tees</a>
                        <a href="collection.html?cat=oversized" className="notfound-link">Oversized Tees</a>
                        <a href="collection.html?cat=polos" className="notfound-link">Polos</a>
                        <a href="collection.html?fabric=supima" className="notfound-link">Supima®</a>
                        <a href="collection.html?fabric=heavy-duty" className="notfound-link">Heavy Duty</a>
                        <a href="collection.html?fabric=breezo" className="notfound-link">Breezo™</a>
                        <a href="cart.html" className="notfound-link">Your Cart</a>
                    </div>
                </div>
            </div>

            {/* <!-- ── RIGHT: Visual ── --> */}
            <div className="notfound-visual" aria-hidden="true">
                <div className="notfound-visual__grid">

                    {/* <!-- Tall dark card --> */}
                    <a href="shop.html" className="notfound-card notfound-card--dark notfound-card--tall">
                        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                        <span className="notfound-card__label">Heavy Duty</span>
                        <span className="notfound-card__price">From ₹699</span>
                    </a>

                    {/* <!-- Small card — top right --> */}
                    <a href="collection.html?fabric=supima" className="notfound-card">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                        <span className="notfound-card__label">Supima®</span>
                        <span className="notfound-card__price">From ₹799</span>
                    </a>

                    {/* <!-- Small card — bottom right --> */}
                    <a href="collection.html?fabric=breezo" className="notfound-card" style={{ background: "#EEF2F5" }}>
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                        <span className="notfound-card__label">Breezo™</span>
                        <span className="notfound-card__price">From ₹599</span>
                    </a>
                </div>

                {/* <!-- Floating tag --> */}
                <div className="notfound-visual__tag">All under ₹999</div>
            </div>

        </div>
    </main>)
}

export default NotFoundForm
