
import { useEffect, useState, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Set up Intersection Observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.getAttribute('data-animation') || 'fade-in';
          element.classList.add(animationType);
          observer.unobserve(element);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const elementsToAnimate = document.querySelectorAll('.animate-when-visible');
    elementsToAnimate.forEach(el => observer.observe(el));

    // Get footer reference
    footerRef.current = document.querySelector('footer');

    // Handle scroll to top button visibility
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up event listeners
    return () => {
      elementsToAnimate.forEach(el => observer.unobserve(el));
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-dalashala-darkBrown/80 hover:bg-dalashala-darkBrown text-dalashala-beige rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
