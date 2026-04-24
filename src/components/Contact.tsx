import { Mail, Instagram } from 'lucide-react';

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.76.92V6.69Z"/>
  </svg>
);

const YouTubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
  </svg>
);

const Contact = () => {
  const links = [
    { Icon: Mail, label: 'Email', value: 'hello.yogawithcamilla@gmail.com', href: 'mailto:hello.yogawithcamilla@gmail.com', external: false },
    { Icon: Instagram, label: 'Instagram', value: '@yoga_with_camilla', href: 'https://www.instagram.com/yoga_with_camilla/', external: true },
    { Icon: TikTokIcon, label: 'TikTok', value: '@yoga_with_camilla', href: 'https://www.tiktok.com/@yoga_with_camilla', external: true },
    { Icon: YouTubeIcon, label: 'YouTube', value: '@camilla_yoga', href: 'https://www.youtube.com/@camilla_yoga', external: true },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-white">
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-when-visible" data-animation="fade-in">
          <p className="font-inter text-xs md:text-sm uppercase tracking-[0.32em] text-dalashala-olive font-medium mb-5">
            Kontakt
          </p>
          <h2 className="font-cormorant font-semibold text-4xl md:text-5xl lg:text-6xl text-dalashala-earth mb-6 tracking-tight leading-[1.05]">
            Hör av dig
          </h2>
          <span className="block mx-auto w-14 h-[2px] bg-dalashala-honey mb-6 opacity-90 rounded-full" aria-hidden="true" />
          <p className="font-inter font-normal text-base md:text-lg text-dalashala-earth max-w-lg mx-auto leading-relaxed">
            Frågor om ett pass, eller redo att boka?
          </p>
        </div>

        <div className="max-w-lg mx-auto animate-when-visible" data-animation="fade-in">
          <div className="divide-y divide-dalashala-meadow/60 border-y border-dalashala-meadow/60">
            {links.map(({ Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-5 py-6 hover:pl-2 transition-[padding] duration-300"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full border border-dalashala-meadow flex items-center justify-center text-dalashala-olive group-hover:bg-dalashala-earth group-hover:text-white group-hover:border-dalashala-earth transition-colors">
                  <Icon size={18} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-inter text-xs uppercase tracking-[0.28em] text-dalashala-olive font-semibold mb-1">
                    {label}
                  </p>
                  <p className="font-inter font-normal text-base md:text-lg text-dalashala-earth group-hover:text-dalashala-olive transition-colors truncate">
                    {value}
                  </p>
                </div>
                <span className="text-dalashala-olive opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
