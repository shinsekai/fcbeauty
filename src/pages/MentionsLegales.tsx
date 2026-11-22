import FadeIn from '../components/FadeIn'
import { usePageMeta } from '../utils/usePageMeta'

const CLOUDEEFY_URL = 'https://cloudeefy.io'

const FOCUS_CLASSES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2'

const LINK_CLASSES = `underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-espresso/70 ${FOCUS_CLASSES}`

export default function MentionsLegales() {
  usePageMeta({
    title: 'Mentions légales - Flora Alpande',
    description:
      'Mentions légales du site Flora Alpande : éditrice, hébergement, propriété intellectuelle et données personnelles.',
  })

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-center font-serif text-4xl font-semibold text-espresso">
        Mentions légales
      </h1>

      <FadeIn>
        <div className="mx-auto mt-12 max-w-3xl text-sm leading-relaxed text-espresso/80">
          <section>
            <h2 className="font-serif text-xl font-semibold text-espresso">
              Éditrice du site
            </h2>
            <p className="mt-3">Le présent site est édité par :</p>
            <address className="mt-3 not-italic">
              Madame Flora Alpande — Entrepreneur individuel (nom commercial :
              F&C Beauty)
              <br />
              105 Avenue du Général Leclerc, 77400 Lagny-sur-Marne
            </address>
            <ul className="mt-3 space-y-1">
              <li>
                Téléphone :{' '}
                <a href="tel:+33618334083" className={LINK_CLASSES}>
                  06 18 33 40 83
                </a>
              </li>
              <li>SIRET : 841 693 765 00023</li>
              <li>N° de TVA intracommunautaire : FR05 841 693 765</li>
              <li>Activité : Soins de beauté (code NAF/APE 9602B)</li>
              <li>Immatriculée au Registre national des entreprises (RNE)</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-espresso">
              Directrice de la publication
            </h2>
            <p className="mt-3">Madame Flora Alpande</p>
          </section>

          <section className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-espresso">
              Hébergement
            </h2>
            <p className="mt-3">
              Le site est hébergé par Cloudeefy (
              <a
                href={CLOUDEEFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_CLASSES}
              >
                cloudeefy.io
              </a>
              ), s&rsquo;appuyant sur l&rsquo;infrastructure cloud européenne
              de Scaleway — Scaleway SAS, 8 rue de la Ville l&rsquo;Évêque,
              75008 Paris.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-espresso">
              Propriété intellectuelle
            </h2>
            <p className="mt-3">
              L&rsquo;ensemble des éléments composant ce site (textes, visuels,
              structure) est protégé par le droit de la propriété
              intellectuelle. Toute reproduction, représentation ou adaptation,
              totale ou partielle, sans autorisation écrite préalable de
              l&rsquo;éditrice est interdite.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-espresso">
              Photographies
            </h2>
            <p className="mt-3">
              Toutes les photographies présentées sur ce site sont des
              photographies officielles de l&rsquo;éditrice.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-espresso">
              Données personnelles et cookies
            </h2>
            <p className="mt-3">
              Ce site ne dépose aucun cookie.
            </p>
            <p className="mt-3">
              Formulaire de devis : les informations que vous saisissez (nom,
              téléphone, e-mail et date facultatifs, prestation, message et, si
              vous le souhaitez, la façon dont vous avez connu Flora) sont
              transmises à Formspark, prestataire d&rsquo;envoi de formulaires,
              qui les enregistre et les envoie par e-mail à l&rsquo;éditrice.
              Elles servent uniquement à répondre à votre demande. Vous pouvez
              demander l&rsquo;accès, la rectification ou la suppression de vos
              données en contactant l&rsquo;éditrice.
            </p>
            <p className="mt-3">
              Avec votre accord uniquement, ce site charge un pixel de mesure
              d&rsquo;audience fourni par Metricool (tracker.metricool.com).
              Lorsqu&rsquo;il est chargé, Metricool reçoit votre adresse IP, des
              informations sur votre navigateur et la page consultée, afin de
              mesurer la fréquentation du site. Sans votre accord, aucune
              requête n&rsquo;est envoyée à Metricool. Selon Metricool, ce
              pixel n&rsquo;utilise pas de cookie.
            </p>
            <p className="mt-3">
              Votre choix est conservé dans le stockage local de votre
              navigateur. Vous pouvez le modifier ou le retirer à tout moment
              avec le lien «&nbsp;Gérer mes préférences&nbsp;» en bas de chaque
              page.
            </p>
            <p className="mt-3">
              Pour toute question relative à ce site, vous pouvez contacter
              l&rsquo;éditrice par téléphone au{' '}
              <a href="tel:+33618334083" className={LINK_CLASSES}>
                06 18 33 40 83
              </a>
              .
            </p>
          </section>
        </div>
      </FadeIn>
    </main>
  )
}
