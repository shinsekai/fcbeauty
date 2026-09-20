type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  label: string
  href?: string
  variant?: ButtonVariant
}

const BASE_CLASSES =
  'inline-block px-5 py-2 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-champagne text-espresso hover:bg-taupe',
  secondary: 'border border-champagne text-espresso hover:bg-ivory',
}

export default function Button({ label, href, variant = 'primary' }: ButtonProps) {
  const className = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]}`

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
    <button type="button" className={className}>
      {label}
    </button>
  )
}
