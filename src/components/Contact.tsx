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
  const googleMapsUrl = `https://www.google.com/maps/place/Högosta+43,+786+92+Dala-järna/@60.512699,14.4331426,17z/data=!3m1!4b1!4m6!3m5!1s0x465d58e842ea004f:0xd1d495f3a126010!8m2!3d60.512699!4d14.4331426!16s%2Fg%2F11w7q_9n1z?entry=ttu`;

  const links = [
    { Icon: Mail, label: 'Email', value: 'hello.yogawithcamilla@gmail.com', href: 'mailto:hello.yogawithcamilla@gmail.com', external: false },
    { Icon: Instagram, label: 'Instagram', value: '@yoga_with_camilla', href: 'https://www.instagram.com/yoga_with_camilla/', external: true },
    { Icon: TikTokIcon, label: 'TikTok', value: '@yoga_with_camilla', href: 'https://www.tiktok.com/@yoga_with_camilla', external: true },
    { Icon: YouTubeIcon, label: 'YouTube', value: '@camilla_yoga', href: 'https://www.youtube.com/@camilla_yoga', external: true },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden bg-dalashala-cream">
      {/* Decorative blobs */}
      <div className="blob-meadow w-[500px] h-[500px] -top-40 -left-40 opacity-50" aria-hidden="true" />
      <div className="blob-sage w-[400px] h-[400px] -bottom-20 -right-20 opacity-40" aria-hidden="true" />

      <div className="relative container-section px-3 mx-auto max-w-4xl">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 animate-when-visible" data-animation="fade-in">
            <span className="inline-block tag-pill bg-dalashala-sage/15 text-dalashala-olive border border-dalashala-sage/40 mb-4">
              Kontakt
            </span>
            <h2 className="font-cinzel-decorative text-2xl md:text-3xl lg:text-4xl text-dalashala-earth font-bold mb-3">
              Hör av dig
            </h2>
            <p className="font-eb-garamond text-base md:text-lg text-dalashala-earthSoft max-w-xl mx-auto">
              Frågor om ett pass, eller redo att boka?
            </p>
          </div>

          <div className="max-w-lg mx-auto animate-when-visible" data-animation="fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-dalashala-meadow/30">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-dalashala-creamLight to-dalashala-sage/10" />
              <div className="relative p-6 md:p-8 space-y-3">
                {links.map(({ Icon, label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center space-x-4 p-3 rounded-xl hover:bg-dalashala-sage/10 transition-colors"
                  >
                    <div className="bg-earth-gradient text-dalashala-cream p-2.5 rounded-full flex-shrink-0 shadow-soft group-hover:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="font-montserrat text-[10px] uppercase tracking-widest text-dalashala-olive mb-0.5">
                        {label}
                      </p>
                      <p className="font-eb-garamond text-sm md:text-base text-dalashala-earth group-hover:text-dalashala-olive transition-colors">
                        {value}
                      </p>
                    </div>
                    <span className="text-dalashala-olive opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
