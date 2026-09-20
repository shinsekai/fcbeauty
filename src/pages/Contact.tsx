import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import Button from '../components/Button'
import FadeIn from '../components/FadeIn'

const PLANITY_URL = 'https://www.planity.com/fc-beauty-77400-lagny-sur-marne'
const MAPS_EMBED_URL = 'https://www.google.com/maps?q=Lagny-sur-Marne&output=embed'
const CONTACT_EMAIL = 'contact@fcbeauty.fr'

const LABEL_CLASSES = 'text-xs uppercase tracking-widest text-espresso/60'

const INPUT_CLASSES =
  'mt-2 block w-full rounded-lg border border-taupe/40 bg-white px-4 py-2.5 text-sm text-espresso focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/40'

interface BusinessHours {
  day: string
  hours: string
}

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

const BUSINESS_HOURS: BusinessHours[] = [
  { day: 'Lundi', hours: '09:30 - 18:00' },
  { day: 'Mardi', hours: '09:30 - 14:40' },
  { day: 'Mercredi', hours: 'Fermé' },
  { day: 'Jeudi', hours: '09:30 - 18:00' },
  { day: 'Vendredi', hours: '09:30 - 18:00' },
  { day: 'Samedi', hours: '09:30 - 17:00' },
  { day: 'Dimanche', hours: 'Fermé' },
]

const FOCUS_CLASSES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'

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
        <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2">
        <div>
          <p className={LABEL_CLASSES}>Adresse</p>
          <address className="mt-2 text-sm not-italic text-espresso">
            105 Av. du Général Leclerc
            <br />
            77400 Lagny-sur-Marne
          </address>

          <p className={`mt-6 ${LABEL_CLASSES}`}>Téléphone</p>
          <a
            href="tel:+33618334083"
            className={`mt-2 inline-block text-sm underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-espresso/70 ${FOCUS_CLASSES}`}
          >
            06 18 33 40 83
          </a>

          <p className={`mt-6 ${LABEL_CLASSES}`}>Horaires</p>
          <dl className="mt-2 text-sm">
            {BUSINESS_HOURS.map(({ day, hours }) => (
              <div
                key={day}
                className="flex justify-between gap-6 border-b border-taupe/40 py-1.5 last:border-b-0"
              >
                <dt className="text-espresso">{day}</dt>
                <dd
                  className={
                    hours === 'Fermé' ? 'text-espresso/50' : 'text-espresso/80'
                  }
                >
                  {hours}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <Button label="Prendre RDV" href={PLANITY_URL} />
          </div>
        </div>

        <iframe
          title="Carte — Lagny-sur-Marne"
          src={MAPS_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-80 w-full rounded-lg border border-taupe/40 md:h-auto md:min-h-[480px]"
        />
        </div>
      </FadeIn>

      <FadeIn>
        <section aria-labelledby="quote-title" className="mx-auto mt-16 max-w-2xl">
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
