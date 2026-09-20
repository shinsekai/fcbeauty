import { Link } from 'react-router-dom'

const PLANITY_URL = 'https://www.planity.com/fc-beauty-77400-lagny-sur-marne'
const INSTAGRAM_URL = 'https://www.instagram.com/fcbeauty.77/'
const INSTAGRAM_HANDLE = '@fcbeauty.77'

const FOCUS_CLASSES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'

const LABEL_CLASSES = 'text-xs uppercase tracking-widest text-espresso/60'

export default function Footer() {
  return (
    <footer className="border-t border-taupe/40 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="font-serif text-2xl font-semibold text-espresso">
          Flora Alpande
        </p>

        <div className="mt-8 flex flex-col gap-8 text-sm text-espresso sm:grid sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className={LABEL_CLASSES}>Adresse</p>
            <address className="mt-2 not-italic">
              105 Av. du Général Leclerc
              <br />
              77400 Lagny-sur-Marne
            </address>
          </div>

          <div>
            <p className={LABEL_CLASSES}>Téléphone</p>
            <a
              href="tel:+33618334083"
              className={`mt-2 inline-block underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-espresso/70 ${FOCUS_CLASSES}`}
            >
              06 18 33 40 83
            </a>
          </div>

          <div>
            <p className={LABEL_CLASSES}>Réservation</p>
            <a
              href={PLANITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 inline-block underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-espresso/70 ${FOCUS_CLASSES}`}
            >
              Prendre RDV
            </a>
          </div>

          <div>
            <p className={LABEL_CLASSES}>Instagram</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 inline-flex items-center gap-2 transition-colors hover:text-espresso/70 ${FOCUS_CLASSES}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                />
                <line
                  x1="17.5"
                  y1="6.5"
                  x2="17.51"
                  y2="6.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="underline decoration-champagne decoration-2 underline-offset-4">
                {INSTAGRAM_HANDLE}
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-taupe/40 pt-6 text-center text-sm text-espresso/60">
          <p>
            © {new Date().getFullYear()} Flora Alpande —{' '}
            <Link
              to="/mentions-legales"
              className={`underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-espresso/70 ${FOCUS_CLASSES}`}
            >
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
