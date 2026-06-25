import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    return (
        <nav className="nav" role="navigation" aria-label="Main Navigation">
            <div className="nav__inner">
                {/* <!-- Left Links --> */}
                <ul className="nav__links">
                    <li><Link to="/shop" className='nav__link'>Shop</Link></li>
                    <li><Link className="nav__link" to="/collection">Collections</Link></li>
                    <li><Link className="nav__link" to="/collection">Fabrics</Link></li>
                </ul>

                {/* <!-- Center Logo --> */}
                <Link className="nav__logo" to="/"> N°1 Essentials</Link>

                {/* <!-- Right Actions --> */}
                <div className="nav__actions">
                    {/* <button className="nav__action-btn" aria-label="Search">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                    </button> */}
                    <button className="nav__action-btn" data-action="cart" aria-label="Cart" onClick={()=>{navigate("/cart")}} >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                        <span className="nav__cart-count">0</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar