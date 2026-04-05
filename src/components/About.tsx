
import { useIsMobile } from "../hooks/use-mobile";

const About = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-10 relative overflow-hidden">
      <div className="container-section bg-white rounded-lg p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {!isMobile ? (
            <>
              {/* Header */}
              <div className="col-span-2 animate-when-visible text-center mb-8" data-animation="fade-in">
                <h4 className="text-dalashala-mediumBrown uppercase tracking-wide font-medium text-sm md:text-base mb-2">Meet Your Teacher</h4>
                <h2 className="heading-lg text-xl md:text-2xl lg:text-3xl">About Me</h2>
              </div>

              {/* Images Row */}
              <div className="col-span-2 grid grid-cols-3 gap-6 mb-6 animate-when-visible" data-animation="fade-in">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <img 
                    src="/lovable-uploads/c1e6d7f9-3ac6-42af-ac83-3058516ff2ef.png" 
                    alt="Yoga teacher Camilla practicing yoga outdoors" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 rounded-2xl"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <img 
                    src="/lovable-uploads/yoga-studio-interior.jpg" 
                    alt="Yoga studio interior at WD Wellness with mats and blocks prepared for class" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 rounded-2xl"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <img 
                    src="/lovable-uploads/yoga-outdoor-pose.jpg" 
                    alt="Camilla performing an advanced yoga pose outdoors on the deck" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 rounded-2xl"
                  />
                </div>
              </div>

              {/* Text Content - Newspaper-style columns */}
              <div className="col-span-2 animate-when-visible" data-animation="fade-in-up">
                <div className="columns-3 gap-6 text-xs md:text-sm font-eb-garamond leading-relaxed" style={{ columnFill: 'auto', height: '320px' }}>
                  <p className="mb-3">
                    Hi, my name is Camilla and I am a 500 hour certified yoga teacher based in Stockholm, with regular classes in Dalarna. I love movement, nature, and mindfulness — and I've experienced firsthand how much they give back when you make them part of everyday life.
                  </p>
                  <p className="mb-3">
                    I completed my 200-hour YTT at Rishikul Yogshala in Rishikesh, India, followed by a 300-hour YTT at Sampoorna Yoga Shala, Goa in Advanced Vinyasa Flow. My background spans seven years as a Les Mills Bodypump instructor across gyms in Australia and Sweden.
                  </p>
                  <p className="mb-3">
                    Over the last four years, I've become an ultra runner, completing five ultra marathons up to 100 kilometers. These events mirror yoga's essence—learning to witness experience without attachment.
                  </p>
                  <p className="mb-3">
                    My practice extends through meditation retreats with the Kadampa Buddhism meditation and Tranquil Wisdom Insight Meditation (TWIM), deepening my understanding of mindfulness.
                  </p>
                  <p>
                    I teach at WD Wellness in Vansbro, Hot Yoga Stockholm, Yogarummet Björkhagen, Brahma Yoga in Nacka, and as the SUP yoga teacher for Smashing Balance.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-span-1 animate-when-visible" data-animation="fade-in-left">
                <div className="mb-4">
                  <h4 className="text-dalashala-mediumBrown uppercase tracking-wide font-medium text-sm mb-2">Meet Your Teacher</h4>
                  <h2 className="heading-lg text-xl mb-4">About Me</h2>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-base md:text-lg font-eb-garamond">
                    Hi, my name is Camilla and I am a 500 hour certified yoga teacher based in Stockholm, with regular classes in Dalarna. I love movement, nature, and mindfulness — and I've experienced firsthand how much they give back when you make them part of everyday life.
                  </p>

                  <p className="text-base md:text-lg font-eb-garamond">
                    I completed my 200-hour YTT at Rishikul Yogshala in Rishikesh, India, followed by a 300-hour YTT at Sampoorna Yoga Shala, Goa in Advanced Vinyasa Flow. My background also spans seven years as a Les Mills Bodypump instructor across gyms in Australia and Sweden.
                  </p>

                  <p className="text-base md:text-lg font-eb-garamond">
                    Over the last four years, I've become an ultra runner, completing five ultra marathons up to 100 kilometers. These events mirror yoga's essence — learning to witness experience without attachment.
                  </p>

                  <p className="text-base md:text-lg font-eb-garamond">
                    My practice extends through meditation retreats with the Kadampa Buddhism meditation and Tranquil Wisdom Insight Meditation (TWIM), deepening my understanding of mindfulness.
                  </p>

                  <p className="text-base md:text-lg font-eb-garamond">
                    I teach at WD Wellness in Vansbro, Hot Yoga Stockholm, Yogarummet Björkhagen, Brahma Yoga in Nacka, and as the SUP yoga teacher for Smashing Balance.
                  </p>
                </div>
              </div>
              
              <div className="col-span-1 relative animate-when-visible" data-animation="fade-in-right">
                <div className="relative z-10 overflow-hidden rounded-2xl h-[550px]">
                  <img 
                    src="/lovable-uploads/c1e6d7f9-3ac6-42af-ac83-3058516ff2ef.png" 
                    alt="Yoga teacher Camilla practicing yoga outdoors" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 rounded-2xl"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
