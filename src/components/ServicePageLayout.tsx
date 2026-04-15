import { useEffect } from 'react';
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

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageProps {
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  ogImage?: string;
  breadcrumbLabel: string;
  heroTag: string;
  heroHeading: string;
  heroSubtitle: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroImagePosition?: string;
  heroImageAspect?: string;
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
  faq?: FAQItem[];
}

const ServicePageLayout = ({
  seoTitle,
  seoDescription,
  canonical,
  ogImage,
  breadcrumbLabel,
  heroTag,
  heroHeading,
  heroSubtitle,
  heroImage,
  heroImageAlt,
  heroImagePosition,
  heroImageAspect,
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
  faq,
}: ServicePageProps) => {
  const faqStructuredData = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Hem",
        "item": "https://yogawithcamilla.se"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tjänster",
        "item": "https://yogawithcamilla.se/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": breadcrumbLabel,
        "item": canonical
      }
    ]
  };

  useEffect(() => {
    if (faqStructuredData) {
      const existingScript = document.getElementById('faq-structured-data');
      if (existingScript) existingScript.remove();
      const script = document.createElement('script');
      script.id = 'faq-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(faqStructuredData);
      document.head.appendChild(script);
      return () => { script.remove(); };
    }
  }, [faq]);

  useEffect(() => {
    const existingScript = document.getElementById('breadcrumb-structured-data');
    if (existingScript) existingScript.remove();
    const script = document.createElement('script');
    script.id = 'breadcrumb-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbStructuredData);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, [breadcrumbLabel, canonical]);

  return (
    <div className="min-h-screen bg-dalashala-cream relative overflow-x-hidden">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        ogImage={ogImage}
        structuredData={structuredData}
      />
      <div className="max-w-[750px] mx-auto">
        <Navbar />
        <main className="pt-20">
          {/* Visible Breadcrumb Trail */}
          <nav aria-label="Brödsmulor" className="px-4 pt-6">
            <ol className="max-w-2xl mx-auto flex items-center gap-2 font-montserrat text-[11px] uppercase tracking-wider text-dalashala-olive">
              <li>
                <Link to="/" className="hover:text-dalashala-earth transition-colors">Hem</Link>
              </li>
              <li aria-hidden="true" className="opacity-60">/</li>
              <li>
                <Link to="/#services" className="hover:text-dalashala-earth transition-colors">Tjänster</Link>
              </li>
              <li aria-hidden="true" className="opacity-60">/</li>
              <li aria-current="page" className="text-dalashala-earth truncate font-bold">{breadcrumbLabel}</li>
            </ol>
          </nav>
          {/* Hero Section */}
          <section className="relative py-12 md:py-16 px-4 overflow-hidden">
            <div className="blob-sage w-[400px] h-[400px] -top-20 -right-20 opacity-40" aria-hidden="true" />
            <div className="blob-meadow w-[350px] h-[350px] top-20 -left-20 opacity-40" aria-hidden="true" />
            <div className="relative max-w-2xl mx-auto text-center">
              <span className="inline-block tag-pill bg-dalashala-sage/15 text-dalashala-olive border border-dalashala-sage/40 mb-5">
                {heroTag}
              </span>
              <h1 className="font-cinzel-decorative text-2xl md:text-3xl lg:text-4xl text-dalashala-earth mb-5 font-bold leading-tight">
                {heroHeading}
              </h1>
              <div className="flex justify-center items-center gap-2 mb-5">
                <span className="h-px w-8 bg-dalashala-olive/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-dalashala-sage" />
                <span className="h-px w-8 bg-dalashala-olive/40" />
              </div>
              <p className="font-eb-garamond text-base md:text-lg text-dalashala-earthSoft mb-8 leading-relaxed">
                {heroSubtitle}
              </p>
              <Button
                className="bg-earth-gradient text-dalashala-cream hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 font-montserrat py-2.5 px-8 rounded-full uppercase tracking-wide text-sm shadow-card"
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
              <div className={`max-w-2xl mx-auto overflow-hidden rounded-3xl shadow-card border border-dalashala-meadow/25 ${heroImageAspect || 'aspect-video'}`}>
                <img
                  src={heroImage}
                  alt={heroImageAlt || heroHeading}
                  className="w-full h-full object-cover"
                  style={heroImagePosition ? { objectPosition: heroImagePosition } : undefined}
                />
              </div>
            </section>
          )}

          {/* Intro */}
          <section className="px-4 mb-14">
            <div className="max-w-2xl mx-auto card-soft p-6 md:p-10">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-dalashala-sage via-dalashala-meadow to-dalashala-olive rounded-full" />
              <h2 className="font-cinzel text-lg md:text-xl text-dalashala-earth mb-5 font-bold">
                {introHeading}
              </h2>
              {introParagraphs.map((p, i) => (
                <p key={i} className="font-eb-garamond text-sm md:text-base text-dalashala-earthSoft leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* Highlights Grid */}
          <section className="px-4 mb-14">
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="card-soft overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="bg-earth-gradient px-4 py-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dalashala-sage" />
                    <h3 className="font-cinzel text-dalashala-cream text-xs font-bold uppercase tracking-[0.2em]">
                      {h.heading}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="font-eb-garamond text-sm text-dalashala-earthSoft leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          {pricing && pricing.length > 0 && (
            <section className="px-4 mb-14">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <span className="inline-block tag-pill bg-dalashala-olive/15 text-dalashala-olive border border-dalashala-olive/30 mb-3">
                    Priser · Pricing
                  </span>
                  <h2 className="font-cinzel-decorative text-xl md:text-2xl text-dalashala-earth font-bold">
                    Välj det som passar
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pricing.map((tier, i) => (
                    <div
                      key={i}
                      className="relative card-soft p-6 text-center hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dalashala-sage to-dalashala-olive" />
                      <p className="font-montserrat text-[10px] uppercase tracking-widest text-dalashala-olive mb-2">
                        {tier.label}
                      </p>
                      <p className="font-cinzel text-lg md:text-xl text-dalashala-earth font-bold mb-1">
                        {tier.price}
                      </p>
                      {tier.note && (
                        <p className="font-eb-garamond text-xs text-dalashala-earthSoft/80 italic">
                          {tier.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <p className="font-eb-garamond text-xs text-dalashala-earthSoft/70 text-center mt-5 italic">
                  Alla priser är inklusive utrustning. Kontakta mig för skräddarsydd offert. · All prices include equipment. Contact for a custom quote.
                </p>
              </div>
            </section>
          )}

          {/* Optional Details */}
          {detailsHeading && detailsParagraphs && (
            <section className="px-4 mb-14">
              <div className="max-w-2xl mx-auto relative rounded-3xl overflow-hidden border border-dalashala-meadow/30 shadow-card">
                <div className="absolute inset-0 bg-gradient-to-br from-dalashala-sage/20 via-dalashala-meadow/15 to-dalashala-creamLight" />
                <div className="relative p-6 md:p-10">
                  <h2 className="font-cinzel text-lg md:text-xl text-dalashala-earth mb-5 font-bold">
                    {detailsHeading}
                  </h2>
                  {detailsParagraphs.map((p, i) => (
                    <p key={i} className="font-eb-garamond text-sm md:text-base text-dalashala-earthSoft leading-relaxed mb-4 last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>
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

          {/* FAQ Section */}
          {faq && faq.length > 0 && (
            <section className="px-4 mb-14">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <span className="inline-block tag-pill bg-dalashala-sage/15 text-dalashala-olive border border-dalashala-sage/40 mb-3">
                    Vanliga frågor · FAQ
                  </span>
                </div>
                <div className="space-y-3">
                  {faq.map((item, i) => (
                    <details
                      key={i}
                      className="card-soft overflow-hidden group hover:shadow-card-hover transition-shadow"
                    >
                      <summary className="font-montserrat text-sm text-dalashala-earth px-5 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-dalashala-sage/10 transition-colors">
                        <span className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-dalashala-sage group-open:bg-dalashala-olive transition-colors" />
                          {item.question}
                        </span>
                        <span className="text-dalashala-olive ml-2 group-open:rotate-45 transition-transform text-lg font-light">+</span>
                      </summary>
                      <div className="px-5 pb-5 pl-11">
                        <p className="font-eb-garamond text-sm text-dalashala-earthSoft leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* English Keywords Section */}
          {englishKeywords && (
            <section className="px-4 mb-14">
              <div className="max-w-2xl mx-auto relative rounded-3xl overflow-hidden border border-dalashala-meadow/30 shadow-card">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-dalashala-creamLight to-dalashala-sage/15" />
                <div className="relative p-6 md:p-8">
                  <span className="inline-block tag-pill bg-dalashala-meadow/25 text-dalashala-earth border border-dalashala-meadow/50 mb-3">
                    English
                  </span>
                  <h2 className="font-cinzel text-base md:text-lg text-dalashala-earth font-bold mb-4">
                    {englishKeywords.heading}
                  </h2>
                  <p className="font-eb-garamond text-sm md:text-base text-dalashala-earthSoft leading-relaxed">
                    {englishKeywords.text}
                  </p>
                  <div className="mt-5">
                    <Button
                      className="bg-earth-gradient text-dalashala-cream hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 font-montserrat py-2 px-6 rounded-full uppercase tracking-wide text-xs shadow-soft"
                      asChild
                    >
                      <a href="mailto:hello.yogawithcamilla@gmail.com">Send enquiry</a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="px-4 mb-16">
            <div className="max-w-2xl mx-auto relative text-center rounded-3xl overflow-hidden shadow-card">
              <div className="absolute inset-0 bg-earth-gradient" />
              {/* Olive glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-dalashala-olive/40 blur-3xl" aria-hidden="true" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-dalashala-sage/30 blur-3xl" aria-hidden="true" />
              <div className="relative p-8 md:p-12">
                <div className="flex justify-center items-center gap-2 mb-4 opacity-70">
                  <span className="h-px w-8 bg-dalashala-cream/50" />
                  <span className="w-1.5 h-1.5 rounded-full bg-dalashala-sage" />
                  <span className="h-px w-8 bg-dalashala-cream/50" />
                </div>
                <h2 className="font-cinzel-decorative text-xl md:text-2xl text-dalashala-cream mb-4 font-bold">
                  {ctaHeading}
                </h2>
                <p className="font-eb-garamond text-dalashala-cream/85 text-sm md:text-base mb-8 leading-relaxed max-w-lg mx-auto">
                  {ctaText}
                </p>
                <Button
                  className="bg-dalashala-cream text-dalashala-earth hover:bg-white hover:-translate-y-0.5 transition-all duration-300 font-montserrat py-2.5 px-8 rounded-full uppercase tracking-wide text-sm shadow-card"
                  asChild
                >
                  <a href={bookingHref || 'mailto:hello.yogawithcamilla@gmail.com'} target={bookingHref ? '_blank' : undefined} rel={bookingHref ? 'noopener noreferrer' : undefined}>
                    {bookingLabel || 'Skicka förfrågan'}
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Related Services */}
          {relatedServices && relatedServices.length > 0 && (
            <section className="px-4 mb-16">
              <div className="max-w-2xl mx-auto">
                <h2 className="font-cinzel text-xs text-dalashala-olive mb-5 uppercase tracking-[0.25em] text-center">
                  Fler tjänster · More services
                </h2>
                <div className="flex flex-wrap gap-3 justify-center">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="font-montserrat text-xs uppercase tracking-wider bg-white border border-dalashala-meadow/40 text-dalashala-earth px-4 py-2 rounded-full hover:bg-earth-gradient hover:text-dalashala-cream hover:border-dalashala-earth shadow-soft hover:shadow-card transition-all"
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
