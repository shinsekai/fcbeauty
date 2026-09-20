import Button from '../components/Button'
import FadeIn from '../components/FadeIn'

const PLANITY_URL = 'https://www.planity.com/fc-beauty-77400-lagny-sur-marne'
const MAPS_EMBED_URL = 'https://www.google.com/maps?q=Lagny-sur-Marne&output=embed'

const LABEL_CLASSES = 'text-xs uppercase tracking-widest text-espresso/60'

interface BusinessHours {
  day: string
  hours: string
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
    </main>
  )
}
