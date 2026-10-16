import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'outline'
  to?: string
  href?: string
  download?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
}

const base =
  'inline-flex items-center justify-center rounded-sm border px-6 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary:
    'border-accent bg-accent text-white hover:border-accent-dark hover:bg-accent-dark',
  outline: 'border-ink text-ink hover:bg-ink hover:text-canvas',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  download,
  type = 'button',
  disabled,
}: ButtonProps) {
  const className = `${base} ${variants[variant]}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} download={download} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} className={className}>
      {children}
    </button>
  )
}