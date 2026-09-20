import FadeIn from '../components/FadeIn'

const PORTRAIT_URL = '/images/flora-alpande.jpg'

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-center font-serif text-4xl font-semibold text-espresso">
        À propos
      </h1>

      <FadeIn>
        <div className="mx-auto mt-12 grid max-w-4xl items-center gap-10 md:grid-cols-2">
        <img
          src={PORTRAIT_URL}
          alt="Portrait de Flora, maquilleuse professionnelle"
          loading="lazy"
          className="aspect-[4/5] w-full rounded-lg object-cover"
        />

        <div>
          <p className="text-xs uppercase tracking-widest text-espresso/60">
            Maquilleuse professionnelle
          </p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-espresso">
            Flora
          </h2>

          <p className="mt-6 leading-relaxed text-espresso/80">
            Maquilleuse professionnelle à Lagny-sur-Marne, Flora a fait de la
            beauté du regard sa signature : un maquillage des yeux subtil et
            lumineux, pensé pour sublimer chaque regard.
          </p>
          <p className="mt-4 leading-relaxed text-espresso/80">
            Experte en maquillage semi-permanent (dermographie) et en manucure
            brésilienne, elle accompagne chacun, du quotidien aux plus belles
            occasions, avec exigence et délicatesse.
          </p>

          <blockquote className="mt-8 border-l-4 border-champagne pl-6 font-serif text-xl italic text-espresso">
            « Hommes et femmes ont le droit au même traitement, c’est-à-dire au
            meilleur ! »
          </blockquote>
        </div>
        </div>
      </FadeIn>
    </main>
  )
}
