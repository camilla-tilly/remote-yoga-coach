export type BlogLanguage = 'en' | 'sv';

export interface BlogContentBlock {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'callout' | 'cta' | 'quote' | 'table' | 'faq' | 'image';
  text?: string;
  items?: string[];
  author?: string;
  ctaHref?: string;
  ctaLabel?: string;
  tableHead?: string[];
  tableRows?: string[][];
  faqItems?: Array<{ q: string; a: string }>;
  image?: { src: string; alt: string; caption?: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  publishDate: string;
  readingTime: string;
  category: string;
  excerpt: string;
  language?: BlogLanguage;
  relatedServiceHref?: string;
  relatedServiceLabel?: string;
  tableOfContents?: boolean;
  faqSchema?: boolean;
  relatedPosts: Array<{ slug: string; label: string }>;
  content: BlogContentBlock[];
  heroImage?: { src: string; alt: string };
}
