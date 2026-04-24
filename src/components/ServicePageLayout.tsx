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
  gallery?: { src: string; alt: string; position?: string }[];
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
  gallery,
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
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        ogImage={ogImage}
        structuredData={structuredData}
      />
      <div className="max-w-[860px] mx-auto">
        <Navbar />
        <main className="pt-24">
          {/* Visible Breadcrumb Trail */}
          <nav aria-label="Brödsmulor" className="px-4 pt-6">
            <ol className="max-w-2xl mx-auto flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.22em] text-dalashala-olive">
              <li>
                <Link to="/" className="hover:text-dalashala-earth transition-colors">Hem</Link>
              </li>
              <li aria-hidden="true" className="opacity-50">/</li>
              <li>
                <Link to="/#services" className="hover:text-dalashala-earth transition-colors">Tjänster</Link>
              </li>
              <li aria-hidden="true" className="opacity-50">/</li>
              <li aria-current="page" className="text-dalashala-earth truncate">{breadcrumbLabel}</li>
            </ol>
          </nav>
          {/* Hero Section */}
          <section className="relative py-14 md:py-20 px-4">
            <div className="relative max-w-2xl mx-auto text-center">
              <p className="font-inter text-xs md:text-sm uppercase tracking-[0.32em] text-dalashala-olive font-medium mb-6">
                {heroTag}
              </p>
              <h1 className="font-cormorant font-semibold text-4xl md:text-5xl lg:text-6xl text-dalashala-earth mb-6 leading-[1.05] tracking-tight">
                {heroHeading}
              </h1>
              <span className="block mx-auto w-14 h-[2px] bg-dalashala-honey mb-6 opacity-90 rounded-full" aria-hidden="true" />
              <p className="font-inter font-normal text-lg md:text-xl text-dalashala-earth mb-10 leading-relaxed max-w-xl mx-auto">
                {heroSubtitle}
              </p>
              <Button
                className="bg-dalashala-earth text-white hover:bg-dalashala-earthSoft hover:-translate-y-0.5 transition-all duration-300 font-inter py-4 px-10 rounded-full uppercase tracking-[0.2em] text-sm font-semibold"
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
            <section className="px-4 mb-16">
              <div className={`max-w-2xl mx-auto overflow-hidden rounded-2xl ${heroImageAspect || 'aspect-video'}`}>
                <img
                  src={heroImage}
                  alt={heroImageAlt || heroHeading}
                  className="w-full h-full object-cover"
                  style={heroImagePosition ? { objectPosition: heroImagePosition } : undefined}
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
            </section>
          )}

          {/* Gallery */}
          {gallery && gallery.length > 0 && (
            <section className="px-4 mb-16">
              <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
                {gallery.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-xl aspect-[3/4]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      style={img.position ? { objectPosition: img.position } : undefined}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Intro */}
          <section className="px-4 mb-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-cormorant font-semibold text-3xl md:text-4xl text-dalashala-earth mb-6 tracking-tight leading-snug">
                {introHeading}
              </h2>
              {introParagraphs.map((p, i) => (
                <p key={i} className="font-inter font-normal text-base md:text-lg text-dalashala-earth leading-relaxed mb-5 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* Highlights Grid */}
          <section className="px-4 mb-16">
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-white border border-dalashala-meadow/60 rounded-xl p-7 md:p-8 hover:border-dalashala-olive/60 transition-colors duration-300"
                >
                  <span className="block w-8 h-[2px] bg-dalashala-honey mb-4 rounded-full" aria-hidden="true" />
                  <h3 className="font-cormorant font-semibold text-2xl md:text-[1.625rem] text-dalashala-earth mb-3 tracking-tight leading-snug">
                    {h.heading}
                  </h3>
                  <p className="font-inter font-normal text-base text-dalashala-earth leading-relaxed">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          {pricing && pricing.length > 0 && (
            <section className="px-4 mb-14">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                  <p className="font-inter text-xs md:text-sm uppercase tracking-[0.32em] text-dalashala-olive font-medium mb-4">
                    Priser
                  </p>
                  <h2 className="font-cormorant font-semibold text-3xl md:text-4xl text-dalashala-earth tracking-tight">
                    Välj det som passar
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {pricing.map((tier, i) => (
                    <div
                      key={i}
                      className="bg-white border border-dalashala-meadow/60 rounded-xl p-7 md:p-8 text-center hover:border-dalashala-olive/60 transition-colors duration-300"
                    >
                      <p className="font-inter text-xs uppercase tracking-[0.28em] text-dalashala-honeyDeep font-semibold mb-3">
                        {tier.label}
                      </p>
                      <p className="font-cormorant font-semibold text-3xl md:text-[2rem] text-dalashala-earth mb-2 tracking-tight">
                        {tier.price}
                      </p>
                      {tier.note && (
                        <p className="font-inter font-normal text-sm text-dalashala-earth/80">
                          {tier.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <p className="font-inter font-normal text-sm text-dalashala-earth/70 text-center mt-6">
                  Alla priser är inklusive utrustning. Kontakta mig för skräddarsydd offert.
                </p>
              </div>
            </section>
          )}

          {/* Optional Details */}
          {detailsHeading && detailsParagraphs && (
            <section className="px-4 mb-16">
              <div className="max-w-2xl mx-auto bg-dalashala-creamDeep/60 rounded-xl p-8 md:p-10">
                <h2 className="font-cormorant font-semibold text-3xl md:text-4xl text-dalashala-earth mb-6 tracking-tight leading-snug">
                  {detailsHeading}
                </h2>
                {detailsParagraphs.map((p, i) => (
                  <p key={i} className="font-inter font-normal text-base md:text-lg text-dalashala-earth leading-relaxed mb-5 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          )}

          {/* Terms & Conditions Link */}
          {termsHref && (
            <section className="px-4 mb-8 -mt-8">
              <div className="max-w-2xl mx-auto text-center">
                <Link
                  to={termsHref}
                  className="font-inter text-[11px] uppercase tracking-[0.22em] text-dalashala-olive hover:text-dalashala-earth underline underline-offset-4 transition-colors"
                >
                  Deltagarvillkor / Participant T&amp;Cs →
                </Link>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          {faq && faq.length > 0 && (
            <section className="px-4 mb-16">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <p className="font-inter text-xs md:text-sm uppercase tracking-[0.32em] text-dalashala-olive font-medium mb-3">
                    Vanliga frågor
                  </p>
                  <h2 className="font-cormorant font-semibold text-3xl md:text-4xl text-dalashala-earth tracking-tight">
                    FAQ
                  </h2>
                </div>
                <div className="divide-y divide-dalashala-meadow/60 border-y border-dalashala-meadow/60">
                  {faq.map((item, i) => (
                    <details
                      key={i}
                      className="group"
                    >
                      <summary className="font-inter text-base md:text-lg text-dalashala-earth py-6 cursor-pointer list-none flex items-center justify-between gap-4 hover:text-dalashala-honeyDeep transition-colors">
                        <span className="font-semibold">{item.question}</span>
                        <span className="text-dalashala-honey ml-2 group-open:rotate-45 transition-transform text-2xl font-light shrink-0">+</span>
                      </summary>
                      <div className="pb-6">
                        <p className="font-inter font-normal text-base text-dalashala-earth leading-relaxed">
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
            <section className="px-4 mb-16">
              <div className="max-w-2xl mx-auto bg-dalashala-creamDeep/60 rounded-xl p-8 md:p-10">
                <p className="font-inter text-xs md:text-sm uppercase tracking-[0.32em] text-dalashala-olive font-medium mb-4">
                  English
                </p>
                <h2 className="font-cormorant font-semibold text-2xl md:text-3xl text-dalashala-earth mb-4 tracking-tight">
                  {englishKeywords.heading}
                </h2>
                <p className="font-inter font-normal text-base md:text-lg text-dalashala-earth leading-relaxed mb-6">
                  {englishKeywords.text}
                </p>
                <Button
                  className="bg-dalashala-earth text-white hover:bg-dalashala-earthSoft transition-all duration-300 font-inter py-3 px-8 rounded-full uppercase tracking-[0.2em] text-sm font-semibold"
                  asChild
                >
                  <a href="mailto:hello.yogawithcamilla@gmail.com">Send enquiry</a>
                </Button>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="px-4 mb-20">
            <div className="max-w-2xl mx-auto text-center py-16 border-t border-b border-dalashala-meadow/60">
              <h2 className="font-cormorant font-semibold text-4xl md:text-5xl text-dalashala-earth mb-5 tracking-tight leading-[1.05]">
                {ctaHeading}
              </h2>
              <p className="font-inter font-normal text-base md:text-lg text-dalashala-earth mb-8 leading-relaxed max-w-lg mx-auto">
                {ctaText}
              </p>
              <Button
                className="bg-dalashala-earth text-white hover:bg-dalashala-earthSoft hover:-translate-y-0.5 transition-all duration-300 font-inter py-4 px-10 rounded-full uppercase tracking-[0.2em] text-sm font-semibold"
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
            <section className="px-4 mb-20">
              <div className="max-w-2xl mx-auto">
                <p className="font-inter text-xs md:text-sm uppercase tracking-[0.32em] text-dalashala-olive font-medium mb-6 text-center">
                  Fler tjänster
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="font-inter text-sm font-semibold uppercase tracking-[0.18em] bg-white border border-dalashala-meadow/80 text-dalashala-earth px-5 py-3 rounded-full hover:border-dalashala-earth hover:bg-dalashala-earth hover:text-white transition-all"
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
