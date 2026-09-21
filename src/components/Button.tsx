import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  label: string
  href?: string
  to?: string
  variant?: ButtonVariant
  type?: 'submit'
}

const BASE_CLASSES =
  'inline-block px-5 py-2 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-champagne text-espresso hover:bg-taupe',
  secondary: 'border border-champagne text-espresso hover:bg-ivory',
}

export default function Button({
  label,
  href,
  to,
  variant = 'primary',
  type,
}: ButtonProps) {
  const className = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {label}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    )
  }

  return (
    <button type={type ?? 'button'} className={className}>
      {label}
    </button>
  )
}
