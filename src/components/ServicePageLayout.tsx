import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { softenAmp } from '@/lib/amp';

interface ServiceHighlight {
  heading: string;
  text: string;
}

interface AudienceItem {
  heading: string;
  text: string;
}

interface OfferingItem {
  heading: string;
  text: string;
  included?: boolean;
}

interface AudienceSection {
  eyebrow?: string;
  heading?: string;
  items: AudienceItem[];
}

interface OfferingsSection {
  eyebrow?: string;
  heading?: string;
  items: OfferingItem[];
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
  heroGallery?: { src: string; alt: string; position?: string }[];
  gallery?: { src: string; alt: string; position?: string }[];
  introHeading: string;
  introParagraphs: string[];
  highlights?: ServiceHighlight[];
  audience?: AudienceSection;
  offerings?: OfferingsSection;
  pricing?: PricingTier[];
  detailsHeading?: string;
  detailsParagraphs?: (string | { subheading: string })[];
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
  heroGallery,
  gallery,
  introHeading,
  introParagraphs,
  highlights,
  audience,
  offerings,
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
      <Navbar />
      <main className="pt-24">
        {/* Visible Breadcrumb Trail */}
        <nav aria-label="Brödsmulor" className="px-4 pt-6">
          <ol className="max-w-[860px] mx-auto flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.22em] text-dalashala-olive">
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

        {/* Hero Section — generous, display-forward */}
        <section className="relative pt-12 md:pt-20 pb-12 md:pb-16 px-4">
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="font-inter text-sm md:text-base uppercase tracking-[0.42em] text-dalashala-olive font-bold mb-8">
              {heroTag}
            </p>
            <h1 className="font-fraunces text-4xl md:text-[4.5rem] lg:text-[5.5rem] text-dalashala-earth mb-8 leading-[0.98] tracking-[-0.03em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
              {softenAmp(heroHeading)}
            </h1>
            <span className="block mx-auto w-20 h-[2px] bg-dalashala-earth/60 mb-8 rounded-full" aria-hidden="true" />
            <p className="font-inter font-normal text-xl md:text-2xl text-dalashala-earth/85 mb-12 leading-relaxed max-w-2xl mx-auto">
              {heroSubtitle}
            </p>
            <Button
              className="bg-dalashala-earth text-white hover:bg-dalashala-earthSoft hover:-translate-y-0.5 transition-all duration-300 font-inter py-[1.125rem] px-12 rounded-full uppercase tracking-[0.22em] text-sm font-semibold shadow-card"
              asChild
            >
              <a href={bookingHref || 'mailto:hello.yogawithcamilla@gmail.com'} target={bookingHref ? '_blank' : undefined} rel={bookingHref ? 'noopener noreferrer' : undefined}>
                {bookingLabel || 'Boka nu'}
              </a>
            </Button>
          </div>
        </section>

        {/* Hero Gallery — click-through carousel */}
        {heroGallery && heroGallery.length > 0 ? (
          <HeroCarousel
            images={heroGallery}
            aspect={heroImageAspect || 'aspect-[16/10] md:aspect-[21/9]'}
            fallbackAlt={heroHeading}
          />
        ) : heroImage && (
          <section className="px-4 mb-20 mt-4">
            <div className={`relative max-w-5xl mx-auto overflow-hidden rounded-[28px] shadow-card ring-1 ring-dalashala-meadow/50 ${heroImageAspect || 'aspect-[16/10] md:aspect-[21/9]'}`}>
              <img
                src={heroImage}
                alt={heroImageAlt || heroHeading}
                className="w-full h-full object-cover"
                style={heroImagePosition ? { objectPosition: heroImagePosition } : undefined}
                loading="eager"
                fetchpriority="high"
              />
              {/* Gentle vignette for depth */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, rgba(45,63,47,0) 60%, rgba(45,63,47,0.18) 100%)' }}
              />
            </div>
          </section>
        )}

        {/* Body column — narrower for reading rhythm */}
        <div className="max-w-[860px] mx-auto">
          {/* Gallery */}
          {gallery && gallery.length > 0 && (
            <section className="px-4 mb-16">
              <div
                className="max-w-2xl mx-auto grid gap-4"
                style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, 220px), 1fr))` }}
              >
                {gallery.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl aspect-[3/4] shadow-sm ring-1 ring-dalashala-meadow/40">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
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
                {softenAmp(introHeading)}
              </h2>
              {introParagraphs.map((p, i) => (
                <p key={i} className="font-inter font-normal text-base md:text-lg text-dalashala-earth leading-relaxed mb-5 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* Highlights Grid (legacy single-section) */}
          {highlights && highlights.length > 0 && (
            <section className="px-4 mb-16">
              <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="bg-white border border-dalashala-meadow/60 rounded-xl p-7 md:p-8 hover:border-dalashala-olive/60 transition-colors duration-300"
                  >
                    <span className="block w-8 h-[2px] bg-dalashala-honey mb-4 rounded-full" aria-hidden="true" />
                    <h3 className="font-cormorant font-semibold text-2xl md:text-[1.625rem] text-dalashala-earth mb-3 tracking-tight leading-snug">
                      {softenAmp(h.heading)}
                    </h3>
                    <p className="font-inter font-normal text-base text-dalashala-earth leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Audience Section — who it's for */}
          {audience && audience.items.length > 0 && (
            <section className="px-4 mb-14">
              <div className="max-w-2xl mx-auto">
                {(audience.eyebrow || audience.heading) && (
                  <div className="text-center mb-8">
                    {audience.eyebrow && (
                      <p className="font-inter text-xs md:text-sm uppercase tracking-[0.32em] text-dalashala-olive font-medium mb-3">
                        {audience.eyebrow}
                      </p>
                    )}
                    {audience.heading && (
                      <h2 className="font-cormorant font-semibold text-3xl md:text-4xl text-dalashala-earth tracking-tight">
                        {softenAmp(audience.heading)}
                      </h2>
                    )}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {audience.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-dalashala-creamDeep/55 rounded-xl p-6 md:p-7 hover:bg-dalashala-creamDeep transition-colors duration-300"
                    >
                      <span className="block w-8 h-[2px] bg-dalashala-honey mb-3 rounded-full" aria-hidden="true" />
                      <h3 className="font-cormorant font-semibold text-xl md:text-[1.375rem] text-dalashala-earth mb-2 tracking-tight leading-snug">
                        {softenAmp(item.heading)}
                      </h3>
                      <p className="font-inter font-normal text-sm md:text-base text-dalashala-earth leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Offerings Section — what's included or can be added */}
          {offerings && offerings.items.length > 0 && (
            <section className="px-4 mb-16">
              <div className="max-w-2xl mx-auto">
                {(offerings.eyebrow || offerings.heading) && (
                  <div className="text-center mb-8">
                    {offerings.eyebrow && (
                      <p className="font-inter text-xs md:text-sm uppercase tracking-[0.32em] text-dalashala-olive font-medium mb-3">
                        {offerings.eyebrow}
                      </p>
                    )}
                    {offerings.heading && (
                      <h2 className="font-cormorant font-semibold text-3xl md:text-4xl text-dalashala-earth tracking-tight">
                        {softenAmp(offerings.heading)}
                      </h2>
                    )}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {offerings.items.map((item, i) => (
                    <div
                      key={i}
                      className="relative bg-white border border-dalashala-meadow/60 rounded-xl p-7 md:p-8 hover:border-dalashala-olive/60 transition-colors duration-300"
                    >
                      {item.included !== undefined && (
                        <span
                          className={`absolute top-4 right-4 font-inter text-[10px] uppercase tracking-[0.22em] font-semibold px-2.5 py-1 rounded-full ${
                            item.included
                              ? 'bg-dalashala-honey/25 text-dalashala-honeyDeep'
                              : 'bg-dalashala-meadow/50 text-dalashala-olive'
                          }`}
                        >
                          {item.included ? 'Ingår' : 'Tillval'}
                        </span>
                      )}
                      <span className="block w-8 h-[2px] bg-dalashala-honey mb-4 rounded-full" aria-hidden="true" />
                      <h3 className={`font-cormorant font-semibold text-2xl md:text-[1.625rem] text-dalashala-earth mb-3 tracking-tight leading-snug ${item.included !== undefined ? 'pr-20' : ''}`}>
                        {softenAmp(item.heading)}
                      </h3>
                      <p className="font-inter font-normal text-base text-dalashala-earth leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

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
              </div>
            </section>
          )}

          {/* Optional Details */}
          {detailsHeading && detailsParagraphs && (
            <section className="px-4 mb-16">
              <div className="max-w-2xl mx-auto bg-dalashala-creamDeep/60 rounded-xl p-8 md:p-10">
                <h2 className="font-cormorant font-semibold text-3xl md:text-4xl text-dalashala-earth mb-6 tracking-tight leading-snug">
                  {softenAmp(detailsHeading)}
                </h2>
                {detailsParagraphs.map((p, i) =>
                  typeof p === 'string' ? (
                    <p key={i} className="font-inter font-normal text-base md:text-lg text-dalashala-earth leading-relaxed mb-5 last:mb-0">
                      {renderInlineLinks(p)}
                    </p>
                  ) : (
                    <h3 key={i} className="font-cormorant font-semibold text-xl md:text-2xl text-dalashala-earth tracking-tight mt-2 mb-3 first:mt-0">
                      {softenAmp(p.subheading)}
                    </h3>
                  )
                )}
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
                  {softenAmp(englishKeywords.heading)}
                </h2>
                {englishKeywords.text.split(/\n\n+/).map((para, i, arr) => (
                  <p
                    key={i}
                    className={`font-inter font-normal text-base md:text-lg text-dalashala-earth leading-relaxed ${i === arr.length - 1 ? 'mb-6' : 'mb-4'}`}
                  >
                    {para}
                  </p>
                ))}
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
                {softenAmp(ctaHeading)}
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
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

const renderInlineLinks = (text: string) => {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const [, label, href] = match;
    if (href.startsWith('/')) {
      return (
        <Link
          key={i}
          to={href}
          className="text-dalashala-earth underline underline-offset-2 hover:text-dalashala-honeyDeep transition-colors"
        >
          {label}
        </Link>
      );
    }
    return (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-dalashala-earth underline underline-offset-2 hover:text-dalashala-honeyDeep transition-colors"
      >
        {label}
      </a>
    );
  });
};

interface HeroCarouselProps {
  images: { src: string; alt: string; position?: string }[];
  aspect: string;
  fallbackAlt: string;
}

const HeroCarousel = ({ images, aspect, fallbackAlt }: HeroCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const goTo = (i: number) => setCurrent(((i % total) + total) % total);
  const goPrev = () => goTo(current - 1);
  const goNext = () => goTo(current + 1);

  return (
    <section className="px-4 mb-20 mt-4">
      <div className={`relative max-w-5xl mx-auto overflow-hidden rounded-[28px] shadow-card ring-1 ring-dalashala-meadow/50 ${aspect}`}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt || fallbackAlt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
            style={img.position ? { objectPosition: img.position } : undefined}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchpriority={i === 0 ? 'high' : undefined}
            aria-hidden={i === current ? undefined : 'true'}
          />
        ))}

        {/* Vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(45,63,47,0) 60%, rgba(45,63,47,0.18) 100%)' }}
        />

        {/* Prev / Next buttons */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Föregående bild"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/85 backdrop-blur-sm text-dalashala-earth shadow-md flex items-center justify-center hover:bg-white transition-all"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Nästa bild"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/85 backdrop-blur-sm text-dalashala-earth shadow-md flex items-center justify-center hover:bg-white transition-all"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 md:bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Gå till bild ${i + 1}`}
              aria-current={i === current ? 'true' : undefined}
              className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white/80'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePageLayout;
