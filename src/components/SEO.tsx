import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  ogLocale?: string;
  lang?: string;
  structuredData?: object;
}

const SEO = ({ title, description, canonical, ogImage, ogType = 'website', ogLocale = 'en_GB', lang = 'en', structuredData }: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title;
    document.documentElement.lang = lang;

    // Meta description
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const parts = selector.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/);
        if (parts) {
          el.setAttribute(parts[1], parts[2]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', ogType);
    setMeta('meta[property="og:locale"]', 'content', ogLocale);
    setMeta('meta[property="og:url"]', 'content', canonical || window.location.href);

    // Always set an image so client-side navigation never inherits a stale
    // per-page card; fall back to the branded site default.
    const image = ogImage || 'https://remoteyogacoach.com/og/default.png?v=3';
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:image:width"]', 'content', '1200');
    setMeta('meta[property="og:image:height"]', 'content', '630');
    setMeta('meta[property="og:image:alt"]', 'content', title);

    // Twitter card
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical || window.location.href);

    // Structured data
    if (structuredData) {
      const existingScript = document.getElementById('structured-data');
      if (existingScript) existingScript.remove();
      const script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, ogImage, ogType, ogLocale, lang, structuredData]);

  return null;
};

export default SEO;
