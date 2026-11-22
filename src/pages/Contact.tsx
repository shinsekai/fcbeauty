import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import FadeIn from '../components/FadeIn'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  QUOTE_FORM_ENDPOINT,
  SOURCE_OPTIONS,
  WHATSAPP_URL,
} from '../data/contact'
import { usePageMeta } from '../utils/usePageMeta'

const FOCUS_CLASSES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'

const LINK_CLASSES = `underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-espresso/70 ${FOCUS_CLASSES}`

const LABEL_CLASSES = 'text-xs uppercase tracking-widest text-espresso/60'

const INPUT_CLASSES =
  'mt-2 block w-full rounded-lg border border-taupe/40 bg-white px-4 py-2.5 text-sm text-espresso focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/40'

interface QuoteFormData {
  name: string
  phone: string
  email: string
  service: string
  eventDate: string
  source: string
  message: string
}

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error'

const SERVICE_OPTIONS = [
  'MakeUp Mariage',
  'MakeUp Médias',
  'MakeUp Artist',
  'MakeUp Studio',
  'Autre demande',
] as const

const INITIAL_FORM_DATA: QuoteFormData = {
  name: '',
  phone: '',
  email: '',
  service: SERVICE_OPTIONS[0],
  eventDate: '',
  source: '',
  message: '',
}

export default function Contact() {
  usePageMeta({
    title: 'Contact - Flora Alpande',
    description:
      'Demandez votre devis maquillage : mariage, médias, artistique ou studio. Flora, maquilleuse professionnelle à Lagny-sur-Marne, vous répond personnellement.',
  })

  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_FORM_DATA)
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleChange =
    (field: keyof QuoteFormData) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ): void => {
      setFormData((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault()
    const honeypot = new FormData(event.currentTarget).get('_honeypot')
    setStatus('sending')

    try {
      const response = await fetch(QUOTE_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          // An empty email would be used as the reply-to address
          ...(formData.email ? { email: formData.email } : {}),
          service: formData.service,
          eventDate: formData.eventDate,
          source: formData.source,
          message: formData.message,
          _honeypot: honeypot,
          _language: 'fr',
          _email: { subject: `Demande de devis — ${formData.service}` },
        }),
      })

      if (!response.ok) {
        throw new Error(`Form submission failed (${response.status})`)
      }

      setFormData(INITIAL_FORM_DATA)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
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

          {status === 'sent' ? (
            <p
              role="status"
              className="mt-8 rounded-lg border border-champagne bg-ivory px-4 py-6 text-center text-sm text-espresso"
            >
              Merci, votre demande a bien été envoyée. Flora vous répondra
              personnellement.
            </p>
          ) : (
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
                <label htmlFor="quote-email" className={LABEL_CLASSES}>
                  E-mail (facultatif)
                </label>
                <input
                  id="quote-email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  className={INPUT_CLASSES}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
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
                  <label htmlFor="quote-date" className={LABEL_CLASSES}>
                    Date de l&rsquo;événement (facultatif)
                  </label>
                  <input
                    id="quote-date"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange('eventDate')}
                    className={INPUT_CLASSES}
                  />
                </div>
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

              <div>
                <label htmlFor="quote-source" className={LABEL_CLASSES}>
                  Comment m&rsquo;avez-vous connue ? (facultatif)
                </label>
                <select
                  id="quote-source"
                  value={formData.source}
                  onChange={handleChange('source')}
                  className={INPUT_CLASSES}
                >
                  <option value="">Sélectionner</option>
                  {SOURCE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Spam trap: hidden from people, filled by bots */}
              <div aria-hidden="true" className="absolute -left-[9999px]">
                <label htmlFor="quote-website">Ne pas remplir</label>
                <input
                  id="quote-website"
                  type="text"
                  name="_honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    type="submit"
                    label={
                      status === 'sending' ? 'Envoi en cours…' : 'Envoyer la demande'
                    }
                    disabled={status === 'sending'}
                  />
                  <Button
                    label="Écrire sur WhatsApp"
                    href={WHATSAPP_URL}
                    variant="secondary"
                  />
                </div>
                {status === 'error' && (
                  <p
                    role="alert"
                    className="text-center text-sm text-espresso"
                  >
                    L&rsquo;envoi a échoué. Merci de réessayer, ou de contacter
                    Flora au{' '}
                    <a href={CONTACT_PHONE_HREF} className={LINK_CLASSES}>
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                    , par WhatsApp ou à {CONTACT_EMAIL}.
                  </p>
                )}
                <p className="text-center text-xs text-espresso/60">
                  Vos informations sont transmises à Formspark, prestataire
                  d&rsquo;envoi de formulaires, uniquement pour que Flora puisse
                  vous répondre.{' '}
                  <Link to="/mentions-legales" className={LINK_CLASSES}>
                    En savoir plus
                  </Link>
                </p>
              </div>
            </form>
          )}
        </section>
      </FadeIn>
    </main>
  )
}
