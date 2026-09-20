import Button from '../components/Button'
import Card from '../components/Card'
import FadeIn from '../components/FadeIn'
import { services } from '../data/services'
import type { Service } from '../data/services'

const PLANITY_URL = 'https://www.planity.com/fc-beauty-77400-lagny-sur-marne'

const CATEGORY_ORDER: Service['category'][] = [
  'Luxury',
  'Makeup',
  'Semi-Permanent',
]

const CATEGORY_TITLES: Record<Service['category'], string> = {
  Luxury: 'Prestations d’exception',
  Makeup: 'Maquillage',
  'Semi-Permanent': 'Maquillage semi-permanent',
}

export default function Services() {
  const servicesByCategory = CATEGORY_ORDER.map((category) => ({
    category,
    items: services.filter((service) => service.category === category),
  }))

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-center font-serif text-4xl font-semibold text-espresso">
        Nos prestations
      </h1>

      {servicesByCategory.map(({ category, items }) => (
        <section key={category} className="mt-14">
          <FadeIn>
            <h2 className="text-center font-serif text-2xl font-semibold text-espresso">
              {CATEGORY_TITLES[category]}
            </h2>
            <div className="mx-auto mt-8 max-w-3xl">
            <Card>
              <ul>
                {items.map((service) => (
                  <li
                    key={service.id}
                    className="border-b border-taupe/40 py-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <span className="font-medium text-espresso">
                        {service.name}
                      </span>
                      <span className="flex w-full shrink-0 justify-between gap-6 text-sm sm:w-auto sm:justify-start">
                        <span className="text-espresso/60">
                          {service.duration}
                        </span>
                        <span className="w-20 text-right font-medium text-espresso">
                          {service.price}
                        </span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
            <div className="mt-8 text-center">
              <Button label="Prendre RDV" href={PLANITY_URL} />
            </div>
            </div>
          </FadeIn>
        </section>
      ))}
    </main>
  )
}
