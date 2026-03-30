import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

interface ServiceHighlight {
  heading: string;
  text: string;
}

interface PricingTier {
  label: string;
  price: string; // e.g. "Från 350 kr/person" or "PRIS_PLACEHOLDER"
  note?: string;
}

interface ServicePageProps {
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  heroTag: string;
  heroHeading: string;
  heroSubtitle: string;
  heroImage?: string;
  heroImageAlt?: string;
  introHeading: string;
  introParagraphs: string[];
  highlights: ServiceHighlight[];
  pricing?: PricingTier[];
  detailsHeading?: string;
  detailsParagraphs?: string[];
  ctaHeading: string;
  ctaText: string;
  bookingHref?: string;
  bookingLabel?: string;
  structuredData?: object;
  relatedServices?: { label: string; href: string }[];
  englishKeywords?: {
    heading: string;
    text: string;
  };
  termsHref?: string;
}

const ServicePageLayout = ({
  seoTitle,
  seoDescription,
  canonical,
  heroTag,
  heroHeading,
  heroSubtitle,
  heroImage,
  heroImageAlt,
  introHeading,
  introParagraphs,
  highlights,
  pricing,
  detailsHeading,
  detailsParagraphs,
  ctaHeading,
  ctaText,
  bookingHref,
  bookingLabel,
  structuredData,
  relatedServices,
  englishKeywords,
  termsHref,
}: ServicePageProps) => {
  return (
    <div className="min-h-screen bg-dalashala-beige relative overflow-x-hidden">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        structuredData={structuredData}
      />
      <div className="max-w-[750px] mx-auto">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-12 md:py-20 bg-dalashala-beige px-4">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs uppercase tracking-widest font-cinzel text-dalashala-mediumBrown mb-3 block">
                {heroTag}
              </span>
              <h1 className="font-cinzel-decorative text-2xl md:text-3xl lg:text-4xl text-dalashala-darkBrown mb-4 font-bold leading-snug">
                {heroHeading}
              </h1>
              <p className="font-eb-garamond text-base md:text-lg text-dalashala-mediumBrown mb-8 leading-relaxed">
                {heroSubtitle}
              </p>
              <Button
                className="bg-dalashala-darkBrown text-dalashala-beige hover:bg-dalashala-darkBrown/90 font-montserrat py-2 px-8 rounded-full uppercase tracking-wide text-sm"
                asChild
              >
                <a href={bookingHref || 'mailto:hello.yogawithcamilla@gmail.com'} target={bookingHref ? '_blank' : undefined} rel={bookingHref ? 'noopener noreferrer' : undefined}>
                  {bookingLabel || 'Boka nu'}
                </a>
              </Button>
            </div>
          </section>

          {/* Hero Image */}
          {heroImage && (
            <section className="px-4 mb-12">
              <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-lg aspect-video">
                <img
                  src={heroImage}
                  alt={heroImageAlt || heroHeading}
                  className="w-full h-full object-cover"
                />
              </div>
            </section>
          )}

          {/* Intro */}
          <section className="px-4 mb-12">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-dalashala-tan/20">
              <h2 className="font-cinzel text-lg md:text-xl text-dalashala-darkBrown mb-5 font-bold">
                {introHeading}
              </h2>
              {introParagraphs.map((p, i) => (
                <p key={i} className="font-eb-garamond text-sm md:text-base text-dalashala-mediumBrown leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* Highlights Grid */}
          <section className="px-4 mb-12">
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-dalashala-tan/20 shadow-sm overflow-hidden"
                >
                  <div className="bg-dalashala-darkBrown px-4 py-3">
                    <h3 className="font-cinzel text-dalashala-beige text-sm font-bold uppercase tracking-wider">
                      {h.heading}
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="font-eb-garamond text-sm text-dalashala-mediumBrown leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          {pricing && pricing.length > 0 && (
            <section className="px-4 mb-12">
              <div className="max-w-2xl mx-auto">
                <h2 className="font-cinzel text-base md:text-lg text-dalashala-darkBrown font-bold uppercase tracking-wider text-center mb-6">
                  Priser / Pricing
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pricing.map((tier, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-dalashala-tan/20 shadow-sm p-5 text-center"
                    >
                      <p className="font-montserrat text-xs uppercase tracking-wider text-dalashala-mediumBrown mb-2">
                        {tier.label}
                      </p>
                      <p className="font-cinzel text-lg md:text-xl text-dalashala-darkBrown font-bold mb-1">
                        {tier.price}
                      </p>
                      {tier.note && (
                        <p className="font-eb-garamond text-xs text-dalashala-mediumBrown/70 italic">
                          {tier.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <p className="font-eb-garamond text-xs text-dalashala-mediumBrown/60 text-center mt-4 italic">
                  Alla priser är inklusive utrustning. Kontakta mig för skräddarsydd offert. · All prices include equipment. Contact for a custom quote.
                </p>
              </div>
            </section>
          )}

          {/* Optional Details */}
          {detailsHeading && detailsParagraphs && (
            <section className="px-4 mb-12">
              <div className="max-w-2xl mx-auto bg-dalashala-tan/20 rounded-2xl p-6 md:p-10">
                <h2 className="font-cinzel text-lg md:text-xl text-dalashala-darkBrown mb-5 font-bold">
                  {detailsHeading}
                </h2>
                {detailsParagraphs.map((p, i) => (
                  <p key={i} className="font-eb-garamond text-sm md:text-base text-dalashala-mediumBrown leading-relaxed mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          )}

          {/* Terms & Conditions Link */}
          {termsHref && (
            <section className="px-4 mb-6 -mt-6">
              <div className="max-w-2xl mx-auto text-center">
                <Link
                  to={termsHref}
                  className="font-montserrat text-xs uppercase tracking-widest text-dalashala-mediumBrown hover:text-dalashala-darkBrown underline underline-offset-4 transition-colors"
                >
                  Deltagarvillkor / Participant T&amp;Cs →
                </Link>
              </div>
            </section>
          )}

          {/* English Keywords Section */}
          {englishKeywords && (
            <section className="px-4 mb-12">
              <div className="max-w-2xl mx-auto bg-white/60 rounded-2xl border border-dalashala-tan/20 p-6 md:p-8">
                <h2 className="font-cinzel text-base md:text-lg text-dalashala-darkBrown font-bold mb-4">
                  {englishKeywords.heading}
                </h2>
                <p className="font-eb-garamond text-sm md:text-base text-dalashala-mediumBrown leading-relaxed">
                  {englishKeywords.text}
                </p>
                <div className="mt-4">
                  <Button
                    className="bg-dalashala-darkBrown text-dalashala-beige hover:bg-dalashala-darkBrown/90 font-montserrat py-2 px-6 rounded-full uppercase tracking-wide text-xs"
                    asChild
                  >
                    <a href="mailto:hello.yogawithcamilla@gmail.com">Send enquiry</a>
                  </Button>
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="px-4 mb-16">
            <div className="max-w-2xl mx-auto text-center bg-dalashala-darkBrown rounded-2xl p-8 md:p-12">
              <h2 className="font-cinzel-decorative text-xl md:text-2xl text-dalashala-beige mb-4 font-bold">
                {ctaHeading}
              </h2>
              <p className="font-eb-garamond text-dalashala-beige/80 text-sm md:text-base mb-8 leading-relaxed">
                {ctaText}
              </p>
              <Button
                className="bg-dalashala-beige text-dalashala-darkBrown hover:bg-dalashala-beige/90 font-montserrat py-2 px-8 rounded-full uppercase tracking-wide text-sm"
                asChild
              >
                <a href={bookingHref || 'mailto:hello.yogawithcamilla@gmail.com'} target={bookingHref ? '_blank' : undefined} rel={bookingHref ? 'noopener noreferrer' : undefined}>
                  {bookingLabel || 'Skicka förfrågan'}
                </a>
              </Button>
            </div>
          </section>

          {/* Related Services */}
          {relatedServices && relatedServices.length > 0 && (
            <section className="px-4 mb-16">
              <div className="max-w-2xl mx-auto">
                <h2 className="font-cinzel text-base text-dalashala-darkBrown mb-4 uppercase tracking-wider text-center">
                  Fler tjänster / More services
                </h2>
                <div className="flex flex-wrap gap-3 justify-center">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="font-montserrat text-xs uppercase tracking-wider bg-white border border-dalashala-tan/40 text-dalashala-darkBrown px-4 py-2 rounded-full hover:bg-dalashala-darkBrown hover:text-dalashala-beige transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicePageLayout;
