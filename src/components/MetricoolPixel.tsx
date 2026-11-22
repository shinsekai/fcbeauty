import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    __ENV__?: { METRICOOL_TRACKER_HASH?: string }
  }
}

const TRACKER_URL = 'https://tracker.metricool.com/c3po.jpg'

// Metricool tracking pixel. The hash comes from runtime-config.js, which the
// container generates at start from METRICOOL_TRACKER_HASH. Renders nothing
// when it is empty (local dev). The key remounts the image on each route
// change so client-side navigation is also reported.
export default function MetricoolPixel() {
  const { pathname } = useLocation()
  const trackerHash = window.__ENV__?.METRICOOL_TRACKER_HASH

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
