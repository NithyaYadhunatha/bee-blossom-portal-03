
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const NGOs = () => {
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
            Partner as an <span className="text-bumblebee-yellow">NGO</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join our network of NGO partners to expand your impact in fighting hunger
            while leveraging our technology platform.
          </p>
        </div>
      </div>
      
      <div className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-6">NGO Registration Coming Soon</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're currently developing our NGO partnership portal. 
            Check back soon to join our alliance against hunger!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NGOs;
