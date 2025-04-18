
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Volunteers = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  
  const headerInView = useIntersectionObserver({
    ref: headerRef,
    triggerOnce: true,
  });

  return (
    <div className="pt-20">
      {/* Header section */}
      <div 
        ref={headerRef}
        className={`py-20 bg-bumblebee-black text-white text-center transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Join as a <span className="text-bumblebee-yellow">Volunteer</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Be the vital link in our food rescue chain. Volunteers are the heart of our operation,
            connecting donors with recipients.
          </p>
        </div>
      </div>
      
      <div className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-6">Volunteer Registration Coming Soon</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're currently developing our volunteer registration system. 
            Check back soon to join our community of change-makers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
