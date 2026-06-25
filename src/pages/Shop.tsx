import { useState } from 'react'

/* LAYOUT */
import MainLayout from '../layouts/MainLayout'

/* COMPONENTS */
// import Breadcrumbs from '../components/common/Breadcrumbs'
// import ProductCard from '../components/product/ProductCard'

// /* DATA */
// import { products } from '../data/products'

const Shop = () => {
    const [view, setView] = useState<'grid' | 'list'>('grid')
    // const [selectedCategory, setSelectedCategory] =useState('all')

    // const [selectedFabric, setSelectedFabric] =useState('all')

    // const [sortBy, setSortBy] =useState('featured')

    // /* FILTERS */
    // const filteredProducts = useMemo(() => {
    //     let filtered = [...products]
    //     // CATEGORY
    //     if (selectedCategory !== 'all') {
    //         filtered = filtered.filter(
    //             product =>
    //                 product.category.toLowerCase() ===
    //                 selectedCategory
    //         )
    //     }

    //     // FABRIC
    //     if (selectedFabric !== 'all') {
    //         filtered = filtered.filter(
    //             product =>
    //                 product.fabric.toLowerCase() ===
    //                 selectedFabric
    //         )
    //     }

    //     // SORTING
    //     if (sortBy === 'price-low') {
    //         filtered.sort((a, b) => a.price - b.price)
    //     }

    //     if (sortBy === 'price-high') {
    //         filtered.sort((a, b) => b.price - a.price)
    //     }

    //     return filtered

    // }, [
    //     selectedCategory,
    //     selectedFabric,
    //     sortBy,
    // ])

    return (
        <MainLayout>
            <main>
                <div className="shop-layout">

                    {/* <!-- ── SIDEBAR FILTERS ── --> */}
                    <aside className="shop-sidebar" id="shop-sidebar" aria-label="Filters">
                        <div className="shop-sidebar__inner">
                            <div className="shop-sidebar__header">
                                <h2 className="shop-sidebar__title">Filter</h2>
                                <button className="shop-sidebar__clear" id="clear-filters">Clear All</button>
                            </div>

                            {/* <!-- Category Filter --> */}
                            <div className="filter-group" id="filter-category">
                                <h3 className="filter-group__label">Category</h3>
                                <div className="filter-group__options">
                                    <label className="filter-option">
                                        <input type="checkbox" name="category" value="all" checked />
                                        <span className="filter-option__text">All</span>
                                        <span className="filter-option__count">26</span>
                                    </label>
                                    <label className="filter-option">
                                        <input type="checkbox" name="category" value="tees" />
                                        <span className="filter-option__text">Regular Tees</span>
                                        <span className="filter-option__count">12</span>
                                    </label>
                                    <label className="filter-option">
                                        <input type="checkbox" name="category" value="oversized" />
                                        <span className="filter-option__text">Oversized Tees</span>
                                        <span className="filter-option__count">8</span>
                                    </label>
                                    <label className="filter-option">
                                        <input type="checkbox" name="category" value="polos" />
                                        <span className="filter-option__text">Polos</span>
                                        <span className="filter-option__count">6</span>
                                    </label>
                                </div>
                            </div>

                            <div className="filter-divider"></div>

                            {/* <!-- Fabric Filter --> */}
                            <div className="filter-group" id="filter-fabric">
                                <h3 className="filter-group__label">Fabric</h3>
                                <div className="filter-group__options">
                                    <label className="filter-option">
                                        <input type="checkbox" name="fabric" value="supima" />
                                        <span className="filter-option__text">Supima®</span>
                                        <span className="filter-option__count">10</span>
                                    </label>
                                    <label className="filter-option">
                                        <input type="checkbox" name="fabric" value="heavy-duty" />
                                        <span className="filter-option__text">Heavy Duty</span>
                                        <span className="filter-option__count">9</span>
                                    </label>
                                    <label className="filter-option">
                                        <input type="checkbox" name="fabric" value="breezo" />
                                        <span className="filter-option__text">Breezo™</span>
                                        <span className="filter-option__count">7</span>
                                    </label>
                                </div>
                            </div>

                            <div className="filter-divider"></div>

                            {/* <!-- Price Filter --> */}
                            <div className="filter-group" id="filter-price">
                                <h3 className="filter-group__label">Price</h3>
                                <div className="filter-group__options">
                                    <label className="filter-option">
                                        <input type="checkbox" name="price" value="under-699" />
                                        <span className="filter-option__text">Under ₹699</span>
                                    </label>
                                    <label className="filter-option">
                                        <input type="checkbox" name="price" value="699-799" />
                                        <span className="filter-option__text">₹699 – ₹799</span>
                                    </label>
                                    <label className="filter-option">
                                        <input type="checkbox" name="price" value="799-999" />
                                        <span className="filter-option__text">₹799 – ₹999</span>
                                    </label>
                                </div>
                            </div>

                            <div className="filter-divider"></div>

                            {/* <!-- Size Filter --> */}
                            <div className="filter-group" id="filter-size">
                                <h3 className="filter-group__label">Size</h3>
                                <div className="size-pills">
                                    <button className="size-pill filter-pill">XS</button>
                                    <button className="size-pill filter-pill">S</button>
                                    <button className="size-pill filter-pill active">M</button>
                                    <button className="size-pill filter-pill">L</button>
                                    <button className="size-pill filter-pill">XL</button>
                                    <button className="size-pill filter-pill">XXL</button>
                                </div>
                            </div>

                            <div className="filter-divider"></div>

                            {/* <!-- Color Filter --> */}
                            <div className="filter-group" id="filter-color">
                                <h3 className="filter-group__label">Colour</h3>
                                <div className="color-filter-row">
                                    <button className="color-filter-swatch active" style={{ background: "#0A0A0A" }} title="Black" aria-label="Black"></button>
                                    <button className="color-filter-swatch" style={{ background: "#FFFFFF", borderColor: "#ddd" }} title="White" aria-label="White"></button>
                                    <button className="color-filter-swatch" style={{ background: "#C4A882" }} title="Sand" aria-label="Sand"></button>
                                    <button className="color-filter-swatch" style={{ background: "#6B7F8E" }} title="Slate" aria-label="Slate"></button>
                                    <button className="color-filter-swatch" style={{ background: "#5C4B3A" }} title="Mocha" aria-label="Mocha"></button>
                                    <button className="color-filter-swatch" style={{ background: "#4A6B5C" }} title="Forest" aria-label="Forest"></button>
                                    <button className="color-filter-swatch" style={{ background: "#E8D9C8" }} title="Oat" aria-label="Oat"></button>
                                </div>
                            </div>

                        </div>
                    </aside>

                    {/* <!-- ── MAIN CONTENT ── --> */}
                    <section className="shop-main" aria-label="Products">

                        {/* <!-- Shop Header --> */}
                        <header className="shop-header">
                            <div className="shop-header__left">
                                <nav className="breadcrumb" aria-label="Breadcrumb">
                                    <a href="index.html">Home</a>
                                    <span className="breadcrumb__sep">/</span>
                                    <span className="breadcrumb__current">Shop All</span>
                                </nav>
                                <h1 className="shop-header__title">All Products</h1>
                                <p className="shop-header__count">26 products</p>
                            </div>
                            <div className="shop-header__right">
                                <div className="sort-control">
                                    <label htmlFor="sort-select" className="sort-control__label">Sort by</label>
                                    <select id="sort-select" className="sort-select">
                                        <option value="featured">Featured</option>
                                        <option value="best-selling">Best Selling</option>
                                        <option value="price-asc">Price: Low to High</option>
                                        <option value="price-desc">Price: High to Low</option>
                                        <option value="newest">Newest</option>
                                    </select>
                                </div>
                                <div className="view-toggle">
                                    <button className={`view-btn ${view === 'grid' ? 'active' : ''}`} onClick={() => setView('grid')} data-view="grid" aria-label="Grid view">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
                                    </button>
                                    <button className={`view-btn ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')} data-view="list" aria-label="List view">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                                    </button>
                                </div>
                            </div>
                        </header>

                        {/* <!-- Active Filters --> */}
                        <div className="active-filters">
                            <span className="active-filter-tag">Size: M<button className="active-filter-tag__remove" aria-label="Remove size filter">×</button></span>
                            <span className="active-filter-tag">Colour: Black<button className="active-filter-tag__remove" aria-label="Remove colour filter">×</button></span>
                        </div>

                        {/* <!-- Product Grid --> */}
                        <div className={view === 'grid' ? 'product-grid grid-4' : 'product-grid product-list'} id="product-grid">
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
                                        <span className="color-dot" style={{ background: "#FFFFFF", borderColor: "#ccc" }} title="White"></span>
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
                                    </div>
                                </div>
                            </article>

                            {/* <!-- Product 5 --> */}
                            <article className="product-card" data-product data-product-id="P005" data-product-name="Heavy Polo" data-product-price="849" data-product-fabric="Heavy Duty">
                                <a href="product.html?id=P005" className="product-card__image-wrap">
                                    <div className="product-card__image-placeholder" style={{ background: "#F2EEE9" }}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                                        <span>Product Image</span>
                                    </div>
                                    <div className="product-card__overlay">
                                        <button className="product-card__quick-add" data-quick-add>+ Quick Add</button>
                                    </div>
                                </a>
                                <div className="product-card__info">
                                    <p className="product-card__category">Polo · Heavy Duty</p>
                                    <h3 className="product-card__name">Heavy Polo</h3>
                                    <p className="product-card__fabric">240 GSM · Structured</p>
                                    <div className="product-card__price-row">
                                        <span className="product-card__price">₹849</span>
                                    </div>
                                    <div className="product-card__colors">
                                        <span className="color-dot active" style={{ background: "#2C3E2D" }} title="Olive"></span>
                                        <span className="color-dot" style={{ background: "#0A0A0A" }} title="Black"></span>
                                        <span className="color-dot" style={{ background: "#8B7355" }} title="Camel"></span>
                                    </div>
                                </div>
                            </article>

                            {/* <!-- Product 6 --> */}
                            <article className="product-card" data-product data-product-id="P006" data-product-name="Breezo Round Neck" data-product-price="599" data-product-fabric="Breezo">
                                <a href="product.html?id=P006" className="product-card__image-wrap">
                                    <div className="product-card__image-placeholder" style={{ background: "#EDF3F0" }}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                                        <span>Product Image</span>
                                    </div>
                                    <span className="product-card__badge">From ₹599</span>
                                    <div className="product-card__overlay">
                                        <button className="product-card__quick-add" data-quick-add>+ Quick Add</button>
                                    </div>
                                </a>
                                <div className="product-card__info">
                                    <p className="product-card__category">Regular Tee · Breezo</p>
                                    <h3 className="product-card__name">Breezo Round Neck</h3>
                                    <p className="product-card__fabric">140 GSM · Airy</p>
                                    <div className="product-card__price-row">
                                        <span className="product-card__price">₹599</span>
                                    </div>
                                    <div className="product-card__colors">
                                        <span className="color-dot active" style={{ background: "#FFFFFF", borderColor: "#ccc" }} title="White"></span>
                                        <span className="color-dot" style={{ background: "#C4A882" }} title="Sand"></span>
                                        <span className="color-dot" style={{ background: "#A8C4B0" }} title="Mint"></span>
                                        <span className="color-dot" style={{ background: "#B0A8C4" }} title="Lavender"></span>
                                    </div>
                                </div>
                            </article>

                            {/* <!-- Product 7 --> */}
                            <article className="product-card" data-product data-product-id="P007" data-product-name="Supima Polo" data-product-price="899" data-product-fabric="Supima">
                                <a href="product.html?id=P007" className="product-card__image-wrap">
                                    <div className="product-card__image-placeholder" style={{ background: "#F8F5F1" }}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                                        <span>Product Image</span>
                                    </div>
                                    <div className="product-card__overlay">
                                        <button className="product-card__quick-add" data-quick-add>+ Quick Add</button>
                                    </div>
                                </a>
                                <div className="product-card__info">
                                    <p className="product-card__category">Polo · Supima</p>
                                    <h3 className="product-card__name">Supima Polo</h3>
                                    <p className="product-card__fabric">200 GSM · Premium</p>
                                    <div className="product-card__price-row">
                                        <span className="product-card__price">₹899</span>
                                    </div>
                                    <div className="product-card__colors">
                                        <span className="color-dot active" style={{ background: "#1A3A5C" }} title="Navy"></span>
                                        <span className="color-dot" style={{ background: "#FFFFFF", borderColor: "#ccc" }} title="White"></span>
                                        <span className="color-dot" style={{ background: "#C4A882" }} title="Sand"></span>
                                    </div>
                                </div>
                            </article>

                            {/* <!-- Product 8 --> */}
                            <article className="product-card" data-product data-product-id="P008" data-product-name="Heavy Oversized" data-product-price="999" data-product-fabric="Heavy Duty">
                                <a href="product.html?id=P008" className="product-card__image-wrap">
                                    <div className="product-card__image-placeholder" style={{ background: "#EBEBEB" }}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" /></svg>
                                        <span>Product Image</span>
                                    </div>
                                    <span className="product-card__badge">Max Value</span>
                                    <div className="product-card__overlay">
                                        <button className="product-card__quick-add" data-quick-add>+ Quick Add</button>
                                    </div>
                                </a>
                                <div className="product-card__info">
                                    <p className="product-card__category">Oversized Tee · Heavy Duty</p>
                                    <h3 className="product-card__name">Heavy Oversized</h3>
                                    <p className="product-card__fabric">280 GSM · Max weight</p>
                                    <div className="product-card__price-row">
                                        <span className="product-card__price">₹999</span>
                                    </div>
                                    <div className="product-card__colors">
                                        <span className="color-dot active" style={{ background: "#0A0A0A" }} title="Black"></span>
                                        <span className="color-dot" style={{ background: "#3D3B38" }} title="Charcoal"></span>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* <!-- Load More --> */}
                        <div className="load-more-wrap">
                            <button className="btn btn--outline" id="load-more">Load More (18 remaining)</button>
                        </div>

                    </section>
                </div>
            </main>
        </MainLayout>
    )
}

export default Shop