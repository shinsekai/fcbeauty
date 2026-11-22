import { useSyncExternalStore } from 'react'

export type AnalyticsConsent = 'granted' | 'denied' | null

const STORAGE_KEY = 'fa-analytics-consent'

const listeners = new Set<() => void>()
let panelOpen = false

function readConsent(): AnalyticsConsent {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

function notify(): void {
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function setAnalyticsConsent(value: 'granted' | 'denied'): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Storage unavailable: the choice only applies to this page view.
  }
  panelOpen = false
  notify()
}

export function openConsentPanel(): void {
  panelOpen = true
  notify()
}

export function useAnalyticsConsent(): AnalyticsConsent {
  return useSyncExternalStore(subscribe, readConsent, () => null)
}

export function useConsentPanelOpen(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => panelOpen,
    () => false,
  )
}
