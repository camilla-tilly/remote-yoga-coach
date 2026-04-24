
import { Button } from "@/components/ui/button";

const Events = () => {
  return (
    <section id="events" className="relative py-6 md:py-10 bg-dalashala-beige">
      <div className="container-section">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
            <div className="md:col-span-2">
              <span className="text-xs md:text-sm uppercase tracking-wider mb-0.5 font-cinzel text-dalashala-darkBrown font-bold">SERVICES</span>
              
              <h2 className="heading-lg text-left font-cinzel text-base md:text-lg lg:text-xl mb-2 font-bold tracking-wide text-dalashala-darkBrown">
                CONFERENCE YOGA
              </h2>
            </div>

            {/* Left - Text card */}
            <div className="self-stretch">
              <div className="bg-white p-3 md:p-4 rounded-2xl border border-dalashala-tan/20 shadow-sm h-full max-w-xl">
                <div className="space-y-2">
                  <p className="font-eb-garamond text-xs md:text-sm">
                    I offer specialized yoga sessions tailored for conferences, corporate events, and retreats throughout Dalarna. 
                    These sessions are designed to energize participants, enhance focus, and create moments of mindfulness 
                    during your event.
                  </p>
                  
                  <p className="font-eb-garamond text-xs md:text-sm">
                    Conference yoga provides a refreshing break from long meetings and presentations. 
                    It helps reduce stress, increase energy levels, and improve overall well-being 
                    for all participants, regardless of their yoga experience.
                    Email to discuss your event and receive a tailored quote.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right - Image */}
            <div className="self-stretch">
              <div className="overflow-hidden rounded-2xl shadow-lg w-full h-full">
                <img
                  src="/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
                  alt="Balanced stones in nature"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="md:col-start-1 flex gap-3">
              <Button 
                className="mt-2 bg-dalashala-darkBrown text-dalashala-beige hover:bg-dalashala-darkBrown/90 font-montserrat py-1.5 px-5 rounded-full uppercase tracking-wide text-xs md:text-sm transition-all"
                asChild
              >
                <a href="mailto:hello.yogawithcamilla@gmail.com">Book via Email</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
