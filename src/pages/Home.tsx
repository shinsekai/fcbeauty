import Button from '../components/Button'
import Card from '../components/Card'
import FadeIn from '../components/FadeIn'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'

const PLANITY_URL = 'https://www.planity.com/fc-beauty-77400-lagny-sur-marne'
const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1613966802194-d46a163af70d?q=80&w=1920&auto=format&fit=crop'

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
          alt="Une maquilleuse applique un maquillage des paupières dans les tons rosés"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/40" aria-hidden="true" />
        <FadeIn>
          <div className="relative px-4 text-center">
            <h1 className="font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              L&rsquo;Art de la Beauté &amp; du Maquillage
            </h1>
            <div className="mt-8">
              <Button label="Prendre RDV" href={PLANITY_URL} />
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center font-serif text-3xl font-semibold text-espresso">
            Prestations signature
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {luxuryServices.map((service) => (
              <Card key={service.id}>
                <h3 className="font-serif text-xl font-semibold text-espresso">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-espresso/70">{service.price}</p>
              </Card>
            ))}
          </div>
        </FadeIn>
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
