import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import type { PortfolioItem } from '../data/portfolio'

interface LightboxProps {
  item: PortfolioItem
  onClose: () => void
}

const FOCUS_CLASSES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'

export default function Lightbox({ item, onClose }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      previousFocusRef.current?.focus()
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/80 p-4"
      onClick={onClose}
    >
      <motion.figure
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className="max-h-[80vh] w-auto max-w-full object-contain"
        />
        <figcaption className="mt-4 text-center text-sm tracking-wide text-white/80">
          {item.title}
        </figcaption>
      </motion.figure>

      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className={`fixed right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 ${FOCUS_CLASSES}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </motion.div>
  )
}
