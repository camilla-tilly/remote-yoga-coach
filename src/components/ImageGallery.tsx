
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ImageGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/7c04e5d1-c06e-4e32-ac57-b9cc48438631.jpg",
      alt: "Outdoor yoga deck with pine trees",
      heading: "OUR SPACE",
      subHeading: "a serene sanctuary in Dalarna"
    },
    {
      src: "/lovable-uploads/94dcd753-bf5e-440c-ab83-7f80b68598b8.jpg",
      alt: "Forest sunset in Dalarna",
      heading: "NATURE",
      subHeading: "Surrounded by Pristine Forests"
    },
    {
      src: "/lovable-uploads/6f462914-a6be-4f63-b61d-6c46be9ec25b.jpg",
      alt: "Yoga practice on wooden deck",
      heading: "PRACTICE",
      subHeading: "Find Your Flow in the Open Air"
    }
  ];

  // For mobile view, we'll use a carousel with increased height
  const MobileView = () => (
    <div className="block md:hidden mb-6">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[320px] rounded-md overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-4 text-white">
                  <div className="bg-black/50 p-2 rounded-sm backdrop-blur-sm">
                    <p className="text-sm font-medium uppercase tracking-wide mb-1">{image.heading}</p>
                    <h3 className="text-base font-cinzel break-words">{image.subHeading}</h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 bg-white/80 hover:bg-white border-none w-8 h-8" />
        <CarouselNext className="right-1 bg-white/80 hover:bg-white border-none w-8 h-8" />
      </Carousel>
    </div>
  );

  // For desktop view, show all images in a grid with increased height
  const DesktopView = () => (
    <div className="hidden md:grid md:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="relative h-[280px] lg:h-[320px] xl:h-[360px] rounded-md overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="bg-gradient-to-t from-black/70 to-transparent p-3 pb-4 text-white">
              <p className="text-xs lg:text-sm font-medium uppercase tracking-wide mb-0.5">{image.heading}</p>
              <h3 className="text-base lg:text-lg xl:text-xl font-cinzel leading-tight">{image.subHeading}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-6 lg:py-8 bg-dalashala-beige">
      <div className="container mx-auto px-3 max-w-[1100px]">
        <MobileView />
        <DesktopView />
      </div>
    </section>
  );
};

export default ImageGallery;
