type Props = {
    step: number
    label: string
    active?: boolean
    completed?: boolean
}

const CheckoutStep = ({ step, label, active, completed }: Props) => {
    return (
        <li className={`checkout-step ${active ? 'active' : ''} ${completed ? 'completed' : ''}`}>
            <span className="checkout-step__num">
                {completed ? (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                ) : (step)}
            </span>
            <span className="checkout-step__label">{label}</span>
        </li>
    )
}

export default CheckoutStep