import type { ReactNode } from 'react'

type CardBackground = 'white' | 'ivory'

interface CardProps {
  children: ReactNode
  background?: CardBackground
}

const BACKGROUND_CLASSES: Record<CardBackground, string> = {
  white: 'bg-white',
  ivory: 'bg-ivory',
}

export default function Card({ children, background = 'white' }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-taupe/40 p-6 ${BACKGROUND_CLASSES[background]}`}
    >
      {children}
    </div>
  )
}
