import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Button from '../components/Button'
import FadeIn from '../components/FadeIn'
import Lightbox from '../components/Lightbox'
import { portfolioItems } from '../data/portfolio'
import type { PortfolioItem } from '../data/portfolio'

type Filter = 'All' | PortfolioItem['category']

const INSTAGRAM_URL = 'https://www.instagram.com/fcbeauty.77/'

const FILTERS: Filter[] = [
  'All',
  'Bridal',
  'Editorial',
  'Brand Events',
  'Semi-Permanent',
]

const FILTER_LABELS: Record<Filter, string> = {
  All: 'Tout',
  Bridal: 'Mariée',
  Editorial: 'Éditorial',
  'Brand Events': 'Événements de marque',
  'Semi-Permanent': 'Semi-permanent',
}

const FOCUS_CLASSES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const closeLightbox = useCallback((): void => {
    setSelectedItem(null)
  }, [])

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-center font-serif text-4xl font-semibold text-espresso">
        Portfolio
      </h1>

      <FadeIn>
        <div
          role="group"
          aria-label="Filtrer le portfolio"
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${FOCUS_CLASSES} ${
                activeFilter
                  ? 'border-champagne bg-champagne font-medium text-espresso'
                  : 'border-champagne/50 text-espresso hover:border-champagne hover:bg-ivory'
              }`}
            >
              {FILTER_LABELS[filter]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {filteredItems.map((item) => (
            <figure key={item.id}>
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                aria-label={`Agrandir : ${item.title}`}
                className={`block w-full cursor-zoom-in ${FOCUS_CLASSES}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-opacity hover:opacity-80"
                />
              </button>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            label="Voir plus sur Instagram"
            href={INSTAGRAM_URL}
            variant="secondary"
          />
        </div>
      </FadeIn>

      <AnimatePresence>
        {selectedItem !== null && (
          <Lightbox item={selectedItem} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </main>
  )
}
