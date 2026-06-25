import { Link } from 'react-router-dom'

const SignUpForm = () => {
    return (<main className="auth-main">
        <div className="auth-grid">
            {/* <!-- ── LEFT PANEL (Brand) ── --> */}
            <aside className="auth-brand-panel" aria-hidden="true">
                <div className="auth-brand-panel__inner">
                    <div className="auth-brand-panel__top">
                        <span className="label" style={{ color: "rgba(255,255,255,0.45)" }}>Join the Family</span>
                    </div>
                    <div className="auth-brand-panel__middle">
                        <h2 className="auth-brand-panel__headline">
                            Wear better.<br /><em>Live better.</em>
                        </h2>
                        <p className="auth-brand-panel__sub">
                            Every account gives you early access to new drops, a saved wishlist, and hassle-free returns.
                        </p>
                    </div>
                    <div className="auth-brand-panel__perks">
                        <div className="auth-perk">
                            <div className="auth-perk__icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" /><path d="M12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
                            </div>
                            <div>
                                <p className="auth-perk__title">New Member Offer</p>
                                <p className="auth-perk__desc">10% off your first order with code FIRST10</p>
                            </div>
                        </div>
                        <div className="auth-perk">
                            <div className="auth-perk__icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </div>
                            <div>
                                <p className="auth-perk__title">Faster Checkout</p>
                                <p className="auth-perk__desc">Saved addresses & payment for 1-click orders</p>
                            </div>
                        </div>
                        <div className="auth-perk">
                            <div className="auth-perk__icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>
                            </div>
                            <div>
                                <p className="auth-perk__title">Order History</p>
                                <p className="auth-perk__desc">Every purchase, size & colour on record</p>
                            </div>
                        </div>
                    </div>
                    <div className="auth-brand-panel__fabric-tag">
                        <span className="fabric-badge" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>
                            Supima® · Heavy Duty · Breezo™
                        </span>
                    </div>
                </div>
            </aside>
            {/* <!-- ── RIGHT PANEL (Form) ── --> */}
            <section className="auth-form-panel" aria-label="Create account form">
                <div className="auth-form-panel__inner">
                    {/* <!-- Header --> */}
                    <div className="auth-form-header">
                        <nav className="breadcrumb" aria-label="Breadcrumb">
                            <a href="index.html">Home</a>
                            <span className="breadcrumb__sep">/</span>
                            <span className="breadcrumb__current">Create Account</span>
                        </nav>
                        <h1 className="auth-form-title">Create account</h1>
                        <p className="auth-form-subtitle">Join N°1 Essentials — it's free, always.</p>
                    </div>
                    {/* <!-- Form --> */}
                    <form className="auth-form" id="register-form">
                        {/* <!-- Name row --> */}
                        <div className="form-row">
                            <div className="form-field">
                                <label className="form-label" htmlFor="first-name">First Name</label>
                                <div className="form-input-wrap">
                                    <input
                                        type="text"
                                        id="first-name"
                                        name="first_name"
                                        className="form-input"
                                        placeholder="Arjun"
                                        // autocomplete="given-name"
                                        required
                                        aria-describedby="fname-error"
                                    />
                                </div>
                                <p className="form-error" id="fname-error" role="alert"></p>
                            </div>
                            <div className="form-field">
                                <label className="form-label" htmlFor="last-name">Last Name</label>
                                <div className="form-input-wrap">
                                    <input
                                        type="text"
                                        id="last-name"
                                        name="last_name"
                                        className="form-input"
                                        placeholder="Sharma"
                                        // autocomplete="family-name"
                                        required
                                        aria-describedby="lname-error"
                                    />
                                </div>
                                <p className="form-error" id="lname-error" role="alert"></p>
                            </div>
                        </div>

                        {/* <!-- Email --> */}
                        <div className="form-field">
                            <label className="form-label" htmlFor="reg-email">Email Address</label>
                            <div className="form-input-wrap">
                                <input
                                    type="email"
                                    id="reg-email"
                                    name="email"
                                    className="form-input"
                                    placeholder="you@example.com"
                                    // autocomplete="email"
                                    required
                                    aria-describedby="reg-email-error"
                                />
                                <div className="form-input-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                            </div>
                            <p className="form-error" id="reg-email-error" role="alert"></p>
                        </div>

                        {/* <!-- Phone --> */}
                        <div className="form-field">
                            <label className="form-label" htmlFor="phone">Phone Number <span style={{ color: "var(--color-mid-gray)", fontWeight: 400 }}>(optional)</span></label>
                            <div className="form-input-wrap" style={{display:"flex"}}>
                                <span className="phone-prefix">+91</span>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-input form-input--phone"
                                    placeholder="98765 43210"
                                    // autocomplete="tel"
                                    // maxlength="10"
                                />
                            </div>
                        </div>

                        {/* <!-- Password --> */}
                        <div className="form-field">
                            <label className="form-label" htmlFor="reg-password">Password</label>
                            <div className="form-input-wrap">
                                <input
                                    type="password"
                                    id="reg-password"
                                    name="password"
                                    className="form-input"
                                    placeholder="Min. 8 characters"
                                    // autocomplete="new-password"
                                    required
                                    aria-describedby="reg-pw-error"
                                />
                                <button type="button" className="form-input-icon form-input-icon--btn" id="toggle-reg-pw" aria-label="Toggle password visibility">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                </button>
                            </div>
                            {/* <!-- Password Strength --> */}
                            <div className="pw-strength" id="pw-strength-bars">
                                <div className="pw-strength__bar" id="bar1"></div>
                                <div className="pw-strength__bar" id="bar2"></div>
                                <div className="pw-strength__bar" id="bar3"></div>
                                <div className="pw-strength__bar" id="bar4"></div>
                            </div>
                            <p className="pw-strength__label" id="pw-strength-label" style={{color:"var(--color-mid-gray)"}}></p>
                            <p className="form-error" id="reg-pw-error" role="alert"></p>
                        </div>

                        {/* <!-- Confirm Password --> */}
                        <div className="form-field">
                            <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
                            <div className="form-input-wrap">
                                <input
                                    type="password"
                                    id="confirm-password"
                                    name="confirm_password"
                                    className="form-input"
                                    placeholder="Repeat your password"
                                    // autocomplete="new-password"
                                    required
                                    aria-describedby="confirm-pw-error"
                                />
                                <div className="form-input-icon" id="confirm-icon" style={{display:"none"}}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </div>
                            <p className="form-error" id="confirm-pw-error" role="alert"></p>
                        </div>

                        {/* <!-- Preferences --> */}
                        <fieldset className="form-fieldset">
                            <legend className="form-label" style={{marginBottom:"var(--space-md)"}}>Preferences (optional)</legend>
                            <div className="form-checks-grid">
                                <label className="form-check">
                                    <input type="checkbox" name="pref_supima" checked />
                                    <span className="form-check__box"></span>
                                    <span className="form-check__label">Supima® drops</span>
                                </label>
                                <label className="form-check">
                                    <input type="checkbox" name="pref_heavy" />
                                    <span className="form-check__box"></span>
                                    <span className="form-check__label">Heavy Duty drops</span>
                                </label>
                                <label className="form-check">
                                    <input type="checkbox" name="pref_breezo" />
                                    <span className="form-check__box"></span>
                                    <span className="form-check__label">Breezo™ drops</span>
                                </label>
                                <label className="form-check">
                                    <input type="checkbox" name="pref_offers" checked />
                                    <span className="form-check__box"></span>
                                    <span className="form-check__label">Exclusive offers</span>
                                </label>
                            </div>
                        </fieldset>

                        {/* <!-- Terms --> */}
                        <div className="form-field">
                            <label className="form-check" id="terms-check">
                                <input type="checkbox" name="terms" id="terms" required />
                                <span className="form-check__box"></span>
                                <span className="form-check__label" style={{fontSize:"12px",color:"var(--color-mid-gray)"}}>
                                    I agree to the <a href="#" className="form-link">Terms of Service</a> and <a href="#" className="form-link">Privacy Policy</a>
                                </span>
                            </label>
                            <p className="form-error" id="terms-error" role="alert"></p>
                        </div>

                        <button type="submit" className="btn btn--primary btn--full auth-submit-btn" id="register-btn">
                            Create Account
                        </button>

                        {/* <!-- Divider --> */}
                        <div className="auth-divider">
                            <span className="auth-divider__text">or sign up with</span>
                        </div>

                        {/* <!-- Social --> */}
                        <div className="auth-social">
                            <button type="button" className="social-btn" aria-label="Sign up with Google">
                                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                                Google
                            </button>
                            <button type="button" className="social-btn" aria-label="Sign up with Apple">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                                Apple
                            </button>
                        </div>
                    </form>
                    {/* <!-- Footer --> */}
                    <div className="auth-form-footer">
                        <p>Already have an account? <Link to="/sign-in" className="form-link form-link--strong">Sign in →</Link></p>
                    </div>
                </div>
            </section>
        </div>
    </main>)
}

export default SignUpForm
