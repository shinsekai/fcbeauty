import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-lg border border-taupe/40 bg-white p-6">{children}</div>
  )
}
