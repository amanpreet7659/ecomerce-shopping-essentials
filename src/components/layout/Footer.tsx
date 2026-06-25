// import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo" >
            <div className="footer__inner">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <p className="footer__brand-name">N°1 Essentials</p>
                        <p className="footer__brand-desc">Premium everyday essentials. Supima, Heavy Duty &amp; Breezo fabrics. All under ₹999.</p>
                    </div>
                    <div>
                        <p className="footer__col-title">Shop</p>
                        <ul className="footer__col-links">
                            <li><a href="shop.html" className="footer__col-link">All Products</a></li>
                            <li><a href="collection.html?cat=tees" className="footer__col-link">Regular Tees</a></li>
                            <li><a href="collection.html?cat=oversized" className="footer__col-link">Oversized Tees</a></li>
                            <li><a href="collection.html?cat=polos" className="footer__col-link">Polos</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer__col-title">Fabrics</p>
                        <ul className="footer__col-links">
                            <li><a href="collection.html?fabric=supima" className="footer__col-link">Supima®</a></li>
                            <li><a href="collection.html?fabric=heavy-duty" className="footer__col-link">Heavy Duty</a></li>
                            <li><a href="collection.html?fabric=breezo" className="footer__col-link">Breezo™</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer__col-title">Help</p>
                        <ul className="footer__col-links">
                            <li><a href="#" className="footer__col-link">Size Guide</a></li>
                            <li><a href="#" className="footer__col-link">Care Instructions</a></li>
                            <li><a href="#" className="footer__col-link">Returns</a></li>
                            <li><a href="#" className="footer__col-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <span>© 2025 N°1 Essentials. All rights reserved.</span>
                    <span>Made with care in India</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer