import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const PLANITY_URL = 'https://www.planity.com/fc-beauty-77400-lagny-sur-marne'

interface NavLinkItem {
  to: string
  label: string
}

const NAV_LINKS: NavLinkItem[] = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

const FOCUS_CLASSES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = (): void => setIsMenuOpen(false)

  const desktopLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    [
      'border-b-2 pb-1 text-sm tracking-wide transition-colors',
      isActive
        ? 'border-champagne font-medium text-espresso'
        : 'border-transparent text-espresso hover:border-champagne',
      FOCUS_CLASSES,
    ].join(' ')

  const mobileLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    [
      'block border-l-4 py-3 pl-4 pr-10 text-sm tracking-wide transition-colors',
      isActive
        ? 'border-champagne bg-ivory font-medium text-espresso'
        : 'border-transparent text-espresso hover:bg-ivory',
      FOCUS_CLASSES,
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <NavLink
          to="/"
          className={`font-serif text-2xl font-semibold text-espresso ${FOCUS_CLASSES}`}
        >
          F&C Beauty
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={desktopLinkClasses}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-champagne px-5 py-2 text-sm font-medium tracking-wide text-espresso transition-colors hover:bg-taupe ${FOCUS_CLASSES}`}
          >
            Prendre RDV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className={`p-2 text-espresso md:hidden ${FOCUS_CLASSES}`}
        >
          {isMenuOpen ? (
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
          ) : (
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-taupe/40 bg-white shadow-sm md:hidden"
        >
          <ul className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={mobileLinkClasses}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="border-t border-taupe/40 px-4 py-4">
            <a
              href={PLANITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-champagne px-5 py-3 text-center text-sm font-medium tracking-wide text-espresso transition-colors hover:bg-taupe ${FOCUS_CLASSES}`}
            >
              Prendre RDV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
