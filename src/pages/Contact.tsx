import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import Button from '../components/Button'
import FadeIn from '../components/FadeIn'

const CONTACT_EMAIL = 'contact@fcbeauty.fr'

const LABEL_CLASSES = 'text-xs uppercase tracking-widest text-espresso/60'

const INPUT_CLASSES =
  'mt-2 block w-full rounded-lg border border-taupe/40 bg-white px-4 py-2.5 text-sm text-espresso focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/40'

interface QuoteFormData {
  name: string
  phone: string
  service: string
  message: string
}

const SERVICE_OPTIONS = [
  'Bridal Signature',
  'Brand & Editorial',
  'Private Events',
  'Autre demande',
] as const

const INITIAL_FORM_DATA: QuoteFormData = {
  name: '',
  phone: '',
  service: SERVICE_OPTIONS[0],
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_FORM_DATA)

  const handleChange =
    (field: keyof QuoteFormData) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ): void => {
      setFormData((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const subject = `Demande de devis — ${formData.service}`
    const body = [
      `Nom : ${formData.name}`,
      `Téléphone : ${formData.phone}`,
      '',
      formData.message,
    ].join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-center font-serif text-4xl font-semibold text-espresso">
        Contact
      </h1>

      <FadeIn>
        <section aria-labelledby="quote-title" className="mx-auto mt-12 max-w-2xl">
          <h2
            id="quote-title"
            className="text-center font-serif text-3xl font-semibold text-espresso"
          >
            Demande de devis
          </h2>
          <p className="mt-4 text-center text-sm leading-relaxed text-espresso/70">
            Les prestations signature sont réalisées sur devis. Décrivez votre
            projet : Flora vous répondra personnellement avec une proposition
            adaptée.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="quote-name" className={LABEL_CLASSES}>
                  Nom
                </label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange('name')}
                  className={INPUT_CLASSES}
                />
              </div>
              <div>
                <label htmlFor="quote-phone" className={LABEL_CLASSES}>
                  Téléphone
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  className={INPUT_CLASSES}
                />
              </div>
            </div>

            <div>
              <label htmlFor="quote-service" className={LABEL_CLASSES}>
                Prestation souhaitée
              </label>
              <select
                id="quote-service"
                required
                value={formData.service}
                onChange={handleChange('service')}
                className={INPUT_CLASSES}
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="quote-message" className={LABEL_CLASSES}>
                Votre projet
              </label>
              <textarea
                id="quote-message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange('message')}
                className={INPUT_CLASSES}
              />
            </div>

            <div className="flex flex-col items-center gap-3">
              <Button type="submit" label="Envoyer la demande" />
              <p className="text-center text-xs text-espresso/60">
                Votre messagerie s&rsquo;ouvrira avec la demande pré-remplie,
                à envoyer à {CONTACT_EMAIL}.
              </p>
            </div>
          </form>
        </section>
      </FadeIn>
    </main>
  )
}
