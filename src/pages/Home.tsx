import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import FadeIn from '../components/FadeIn'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'

const HERO_IMAGE_URL = '/images/work-2.jpg'
const BRIDAL_IMAGE_URL = '/images/bridal-2.jpg'
const PORTRAIT_URL = '/images/flora-alpande.jpg'

const LABEL_CLASSES = 'text-xs uppercase tracking-widest text-espresso/60'

const FOCUS_CLASSES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'

function formatRating(rating: number): string {
  return `${rating.toLocaleString('fr-FR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })} / 5`
}

export default function Home() {
  const luxuryServices = services.filter(
    (service) => service.category === 'Luxury',
  )

  return (
    <main>
      <section className="relative flex min-h-[80vh] items-center justify-center">
        <img
          src={HERO_IMAGE_URL}
          alt="Palettes de maquillage, pinceaux et parfums disposés sur la table de travail de Flora"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/40" aria-hidden="true" />
        <FadeIn>
          <div className="relative px-4 text-center">
            <h1 className="font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              L&rsquo;Art de la Beauté &amp; du Maquillage
            </h1>
            <div className="mt-8">
              <Button label="Prendre RDV" to="/contact" />
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center font-serif text-3xl font-semibold text-espresso">
            Une expertise dédiée à votre beauté
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-espresso/80">
            Maquilleuse professionnelle à Lagny-sur-Marne, Flora met son
            expertise au service des mariées, des marques et des clientèles
            privées en quête d&rsquo;un maquillage d&rsquo;exception.
            Attentive à chaque visage et à chaque occasion, elle conçoit des
            looks sur mesure, du naturel lumineux au glam le plus
            sophistiqué, pour révéler votre beauté en toute élégance.
          </p>
        </FadeIn>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center font-serif text-3xl font-semibold text-espresso">
              Prestations signature
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {luxuryServices.map((service) => (
                <Card key={service.id} background="ivory">
                  <h3 className="font-serif text-xl font-semibold text-espresso">
                    {service.name}
                  </h3>
                  {service.imageUrl !== undefined && (
                    <img
                      src={service.imageUrl}
                      alt={service.imageAlt ?? service.name}
                      loading="lazy"
                      className="mt-4 aspect-[4/5] w-full rounded-lg object-cover"
                    />
                  )}
                  <div className="mt-4 text-center">
                    <Button label="Prendre RDV" to="/contact" />
                  </div>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2">
            <div>
              <p className={LABEL_CLASSES}>La fondatrice</p>
              <h2 className="mt-1 font-serif text-3xl font-semibold text-espresso">
                Flora
              </h2>
              <p className="mt-6 leading-relaxed text-espresso/80">
                Spécialiste de la beauté du regard, experte en maquillage
                semi-permanent et en manucure brésilienne, elle reçoit chacun
                avec exigence et délicatesse.
              </p>
              <blockquote className="mt-8 border-l-4 border-champagne pl-6 font-serif text-xl italic text-espresso">
                « Hommes et femmes ont le droit au même traitement,
                c&rsquo;est-à-dire au meilleur ! »
              </blockquote>
              <Link
                to="/about"
                className={`mt-8 inline-block text-sm underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-espresso/70 ${FOCUS_CLASSES}`}
              >
                Découvrir son parcours
              </Link>
            </div>
            <img
              src={PORTRAIT_URL}
              alt="Portrait de Flora, maquilleuse professionnelle"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
          </div>
        </FadeIn>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2">
              <img
                src={BRIDAL_IMAGE_URL}
                alt="Mariée coiffée d’un bandeau perlé, maquillage doux et lumineux réalisé par Flora"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-lg object-cover"
              />
              <div>
                <p className={LABEL_CLASSES}>Prestation signature</p>
                <h2 className="mt-1 font-serif text-3xl font-semibold text-espresso">
                  Le maquillage de votre jour J
                </h2>
                <p className="mt-6 leading-relaxed text-espresso/80">
                  Parce qu&rsquo;un mariage se prépare dans les moindres
                  détails, Flora conçoit un maquillage à votre image :
                  lumineux, tenace et magnifique sous toutes les lumières, de
                  la cérémonie jusqu&rsquo;au bout de la nuit.
                </p>
                <p className="mt-4 leading-relaxed text-espresso/80">
                  Un essai préalable permet de définir ensemble la tenue
                  parfaite, pour que le jour venu, il ne reste qu&rsquo;à
                  briller.
                </p>
                <div className="mt-8">
                  <Button label="Prendre RDV" to="/contact" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center font-serif text-3xl font-semibold text-espresso">
            Témoignages
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <p className="text-lg text-champagne" aria-hidden="true">
                  {'★'.repeat(Math.round(testimonial.rating))}
                </p>
                <p className="text-sm text-espresso/60">
                  {formatRating(testimonial.rating)}
                </p>
                <blockquote className="mt-3 text-sm text-espresso/80">
                  {testimonial.text}
                </blockquote>
                <footer className="mt-4 text-sm">
                  <span className="font-medium text-espresso">
                    {testimonial.author}
                  </span>
                  <span className="text-espresso/60">
                    {' — '}
                    {testimonial.date}
                  </span>
                </footer>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
