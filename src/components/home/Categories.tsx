// import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <section className="section categories-section" id="categories">
      <div className="container">
        <header className="section-header">
          <div className="section-header__left">
            <p className="section-header__label">Shop by Style</p>
            <h2 className="section-header__title">Three Silhouettes.<br />Endless Wear.</h2>
          </div>
          <a href="shop.html" className="section-header__link">
            Shop All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </a>
        </header>

        <div className="categories-grid">
          {/* <!-- Category: Tees --> */}
          <a href="collection.html?cat=tees" className="category-card" aria-label="Shop Regular Tees">
            <div className="category-card__image">
              <div className="category-card__placeholder category-card__placeholder--dark">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
              </div>
            </div>
            <div className="category-card__info">
              <p className="category-card__count">12 styles</p>
              <h3 className="category-card__name">Regular Tees</h3>
              <p className="category-card__desc">Classic round neck. Everyday weight.</p>
            </div>
            <span className="category-card__arrow">→</span>
          </a>

          {/* <!-- Category: Oversized --> */}
          <a href="collection.html?cat=oversized" className="category-card" aria-label="Shop Oversized Tees">
            <div className="category-card__image">
              <div className="category-card__placeholder category-card__placeholder--mid">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
              </div>
            </div>
            <div className="category-card__info">
              <p className="category-card__count">8 styles</p>
              <h3 className="category-card__name">Oversized Tees</h3>
              <p className="category-card__desc">Relaxed silhouette. Intentional drape.</p>
            </div>
            <span className="category-card__arrow">→</span>
          </a>

          {/* <!-- Category: Polos --> */}
          <a href="collection.html?cat=polos" className="category-card" aria-label="Shop Polos">
            <div className="category-card__image">
              <div className="category-card__placeholder category-card__placeholder--light">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
              </div>
            </div>
            <div className="category-card__info">
              <p className="category-card__count">6 styles</p>
              <h3 className="category-card__name">Polos</h3>
              <p className="category-card__desc">Refined collar. Elevated everyday.</p>
            </div>
            <span className="category-card__arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Categories