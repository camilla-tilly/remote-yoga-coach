
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dalashala-darkBrown text-dalashala-beige py-4 md:py-6 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-[1100px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <h2 className="text-lg md:text-xl font-cinzel-decorative font-bold text-dalashala-beige">
              Yoga with Camilla
            </h2>
          </div>
          <div className="text-center md:text-right">
            <p className="text-dalashala-beige/70 text-sm md:text-base">
              &copy; {currentYear} Yoga with Camilla. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
