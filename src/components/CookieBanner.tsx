import { Link } from 'react-router-dom'
import {
  setAnalyticsConsent,
  useAnalyticsConsent,
  useConsentPanelOpen,
} from '../utils/analyticsConsent'
import Button from './Button'

const FOCUS_CLASSES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'

// Shown until the visitor chooses, and again when they reopen it from the footer.
// Accept and refuse have the same look so neither choice is favoured.
export default function CookieBanner() {
  const consent = useAnalyticsConsent()
  const panelOpen = useConsentPanelOpen()

  if (consent !== null && !panelOpen) {
    return null
  }

  return (
    <section
      aria-label="Mesure d'audience"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-taupe/40 bg-white shadow-lg"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="text-sm text-espresso">
          Ce site peut mesurer sa fréquentation avec un pixel de suivi fourni
          par Metricool. Il lui transmet votre adresse IP, des informations sur
          votre navigateur et la page consultée. Il n&rsquo;est chargé
          qu&rsquo;avec votre accord, que vous pouvez modifier à tout moment.{' '}
          <Link
            to="/mentions-legales"
            className={`underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-espresso/70 ${FOCUS_CLASSES}`}
          >
            En savoir plus
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <Button
            label="Refuser"
            variant="secondary"
            onClick={() => setAnalyticsConsent('denied')}
          />
          <Button
            label="Accepter"
            variant="secondary"
            onClick={() => setAnalyticsConsent('granted')}
          />
        </div>
      </div>
    </section>
  )
}
