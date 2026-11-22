import { useLocation } from 'react-router-dom'
import { METRICOOL_TRACKER_HASH } from '../data/analytics'
import { useAnalyticsConsent } from '../utils/analyticsConsent'

const TRACKER_URL = 'https://tracker.metricool.com/c3po.jpg'

// Metricool tracking pixel. Renders nothing until the visitor accepts
// measurement. The key remounts the image on each
// route change so client-side navigation is also reported.
export default function MetricoolPixel() {
  const { pathname } = useLocation()
  const consent = useAnalyticsConsent()

  if (consent !== 'granted') {
    return null
  }

  return (
    <img
      key={pathname}
      src={`${TRACKER_URL}?hash=${encodeURIComponent(METRICOOL_TRACKER_HASH)}`}
      alt=""
      aria-hidden="true"
      width={1}
      height={1}
      className="pointer-events-none absolute h-px w-px opacity-0"
    />
  )
}
