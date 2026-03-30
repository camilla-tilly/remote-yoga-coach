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

  return (
    <section id="contact" className="py-12 bg-dalashala-beige relative overflow-hidden">
      <div className="container-section px-3 mx-auto max-w-4xl">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 animate-when-visible" data-animation="fade-in">
            <h2 className="heading-lg mb-3 text-xl md:text-2xl lg:text-3xl">Kontakta mig</h2>
            <p className="text-body max-w-xl mx-auto text-sm md:text-base">
              Frågor om ett pass, eller redo att boka? Hör av dig.
            </p>
          </div>
          
          <div className="max-w-md mx-auto animate-when-visible" data-animation="fade-in">
              <div className="space-y-4 bg-white/40 rounded-lg p-5 shadow-sm border border-dalashala-tan/30">
                <div className="flex items-center space-x-4">
                  <div className="bg-dalashala-mediumBrown text-dalashala-beige p-2 rounded-full flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-base font-medium mb-1 text-dalashala-darkBrown">Email</h3>
                    <a 
                      href="mailto:hello.yogawithcamilla@gmail.com"
                      className="text-dalashala-darkBrown/80 hover:text-dalashala-darkBrown transition-colors text-sm"
                    >
                      hello.yogawithcamilla@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-dalashala-mediumBrown text-dalashala-beige p-2 rounded-full flex-shrink-0">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <a 
                      href="https://www.instagram.com/yoga_with_camilla/" 
                      className="text-dalashala-darkBrown/80 hover:text-dalashala-darkBrown transition-colors font-medium text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @yoga_with_camilla
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-dalashala-mediumBrown text-dalashala-beige p-2 rounded-full flex-shrink-0">
                    <TikTokIcon size={18} />
                  </div>
                  <div>
                    <a 
                      href="https://www.tiktok.com/@yoga_with_camilla" 
                      className="text-dalashala-darkBrown/80 hover:text-dalashala-darkBrown transition-colors font-medium text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @yoga_with_camilla
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-dalashala-mediumBrown text-dalashala-beige p-2 rounded-full flex-shrink-0">
                    <YouTubeIcon size={18} />
                  </div>
                  <div>
                    <a 
                      href="https://www.youtube.com/@camilla_yoga" 
                      className="text-dalashala-darkBrown/80 hover:text-dalashala-darkBrown transition-colors font-medium text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @camilla_yoga
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
