import React from 'react'
import Breadcrumbs from '../common/Breadcrumbs'
import { Link } from 'react-router-dom'

const SignInForm = () => {
    return (<main className="auth-main">
        <div className="auth-grid">
            {/* <!-- ── LEFT PANEL (Brand) ── --> */}
            <aside className="auth-brand-panel" aria-hidden="true">
                <div className="auth-brand-panel__inner">
                    <div className="auth-brand-panel__top">
                        <span className="label" style={{ color: "rgba(255,255,255,0.45)" }}>Members Only</span>
                    </div>
                    <div className="auth-brand-panel__middle">
                        <h2 className="auth-brand-panel__headline">
                            Your wardrobe,<br /><em>remembered.</em>
                        </h2>
                        <p className="auth-brand-panel__sub">
                            Track orders, save favourites, and get early access to new fabric drops.
                        </p>
                    </div>
                    <div className="auth-brand-panel__perks">
                        <div className="auth-perk">
                            <div className="auth-perk__icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                            </div>
                            <div>
                                <p className="auth-perk__title">Order Tracking</p>
                                <p className="auth-perk__desc">Real-time updates on every delivery</p>
                            </div>
                        </div>
                        <div className="auth-perk">
                            <div className="auth-perk__icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                            </div>
                            <div>
                                <p className="auth-perk__title">Saved Wishlist</p>
                                <p className="auth-perk__desc">Never lose track of your favourites</p>
                            </div>
                        </div>
                        <div className="auth-perk">
                            <div className="auth-perk__icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <div>
                                <p className="auth-perk__title">Early Access</p>
                                <p className="auth-perk__desc">New drops before the general public</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Decorative fabric tag --> */}
                    <div className="auth-brand-panel__fabric-tag">
                        <span className="fabric-badge" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>
                            Supima® · Heavy Duty · Breezo™
                        </span>
                    </div>
                </div>
            </aside>

            {/* <!-- ── RIGHT PANEL (Form) ── --> */}
            <section className="auth-form-panel" aria-label="Sign in form">
                <div className="auth-form-panel__inner">

                    {/* <!-- Header --> */}
                    <div className="auth-form-header">
                        <Breadcrumbs items={[{ label: "Home", path: "/home" }, { label: "Sign In", path: "sign-in" }]} />
                        <h1 className="auth-form-title">Welcome back</h1>
                        <p className="auth-form-subtitle">Sign in to your N°1 Essentials account</p>
                    </div>

                    {/* <!-- Form --> */}
                    <form className="auth-form" id="signin-form">
                        {/* novalidate> */}

                        <div className="form-field">
                            <label className="form-label" htmlFor="email">Email Address</label>
                            <div className="form-input-wrap">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="you@example.com"
                                    // autocomplete="email"
                                    required
                                    aria-describedby="email-error"
                                />
                                <div className="form-input-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                            </div>
                            <p className="form-error" id="email-error" role="alert"></p>
                        </div>

                        <div className="form-field">
                            <div className="form-label-row">
                                <label className="form-label" htmlFor="password">Password</label>
                                <a href="#" className="form-link" id="forgot-pw">Forgot password?</a>
                            </div>
                            <div className="form-input-wrap">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-input"
                                    placeholder="Enter your password"
                                    // autocomplete="current-password"
                                    required
                                    aria-describedby="password-error"
                                />
                                <button type="button" className="form-input-icon form-input-icon--btn" id="toggle-pw" aria-label="Toggle password visibility">
                                    <svg id="pw-eye" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                </button>
                            </div>
                            <p className="form-error" id="password-error" role="alert"></p>
                        </div>

                        <div className="form-check-row">
                            <label className="form-check">
                                <input type="checkbox" name="remember" id="remember-me" />
                                <span className="form-check__box"></span>
                                <span className="form-check__label">Keep me signed in</span>
                            </label>
                        </div>

                        <button type="submit" className="btn btn--primary btn--full auth-submit-btn" id="signin-btn">
                            Sign In
                        </button>

                        {/* <!-- Divider --> */}
                        <div className="auth-divider">
                            <span className="auth-divider__text">or continue with</span>
                        </div>

                        {/* <!-- Social Login --> */}
                        <div className="auth-social">
                            <button type="button" className="social-btn" aria-label="Sign in with Google">
                                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                                Google
                            </button>
                            <button type="button" className="social-btn" aria-label="Sign in with Apple">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                                Apple
                            </button>
                        </div>

                    </form>

                    {/* <!-- Footer --> */}
                    <div className="auth-form-footer">
                        <p>Don't have an account? <Link to="/sign-up" className="form-link form-link--strong">Create one →</Link></p>
                    </div>

                    {/* <!-- Guest Continue --> */}
                    <div className="auth-guest">
                        <p className="auth-guest__text">Prefer not to register?</p>
                        <Link to='/checkout' className="btn btn--ghost btn--full auth-guest-btn">Continue as Guest</Link>
                    </div>

                </div>
            </section>

        </div>
    </main>)
}

export default SignInForm
