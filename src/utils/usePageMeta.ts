import { useEffect } from 'react'

interface PageMetaOptions {
  title: string
  description: string
}

export function usePageMeta({ title, description }: PageMetaOptions): void {
  useEffect(() => {
    document.title = title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
  }, [title, description])
}
