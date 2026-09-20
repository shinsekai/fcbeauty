const PLANITY_URL = 'https://www.planity.com/fc-beauty-77400-lagny-sur-marne'

const FOCUS_CLASSES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'

const LABEL_CLASSES = 'text-xs uppercase tracking-widest text-espresso/60'

export default function Footer() {
  return (
    <footer className="border-t border-taupe/40 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="font-serif text-2xl font-semibold text-espresso">
          F&C Beauty
        </p>

        <div className="mt-8 flex flex-col gap-8 text-sm text-espresso sm:grid sm:grid-cols-3">
          <div>
            <p className={LABEL_CLASSES}>Adresse</p>
            <address className="mt-2 not-italic">
              105 Av. du Général Leclerc
              <br />
              77400 Lagny-sur-Marne
            </address>
          </div>

          <div>
            <p className={LABEL_CLASSES}>Téléphone</p>
            <a
              href="tel:+33618334083"
              className={`mt-2 inline-block underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-espresso/70 ${FOCUS_CLASSES}`}
            >
              06 18 33 40 83
            </a>
          </div>

          <div>
            <p className={LABEL_CLASSES}>Réservation</p>
            <a
              href={PLANITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 inline-block underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-espresso/70 ${FOCUS_CLASSES}`}
            >
              Prendre RDV
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
