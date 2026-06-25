import { useState, type SubmitEvent } from 'react'

const Newsletter = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email)
        setEmail('')
    }

    return (
        <section className="newsletter-section">
            <div className="container">
                <div className="newsletter-inner">
                    <div className="newsletter__text">
                        <p className="label" style={{ color: "var(--color-mid-gray)" }}>Stay in the loop</p>
                        <h3 className="newsletter__title">New drops. Fabric stories.<br />Nothing else.</h3>
                    </div>
                    <form className="newsletter-form" onSubmit={(event) => {
                        handleSubmit(event)
                    }}>
                        <input type="email" className="newsletter-input" placeholder="your@email.com" required aria-label="Email address" />
                        <button type="submit" className="btn btn--primary">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter