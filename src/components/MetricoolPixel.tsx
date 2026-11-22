import { useLocation } from 'react-router-dom'

const TRACKER_URL = 'https://tracker.metricool.com/c3po.jpg'
const trackerHash: string | undefined = import.meta.env.VITE_METRICOOL_TRACKER_HASH

// Metricool tracking pixel. Renders nothing when VITE_METRICOOL_TRACKER_HASH is
// not set (local dev, previews). The key remounts the image on each route
// change so client-side navigation is also reported.
export default function MetricoolPixel() {
  const { pathname } = useLocation()

  if (!trackerHash) {
    return null
  }

  return (
    <img
      key={pathname}
      src={`${TRACKER_URL}?hash=${encodeURIComponent(trackerHash)}`}
      alt=""
      aria-hidden="true"
      width={1}
      height={1}
      className="pointer-events-none absolute h-px w-px opacity-0"
    />
  )
}
