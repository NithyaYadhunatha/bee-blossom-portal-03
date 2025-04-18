
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const heroElement = heroRef.current;
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    
    if (heroElement) observer.observe(heroElement);
    if (titleElement) observer.observe(titleElement);
    if (subtitleElement) observer.observe(subtitleElement);
    
    return () => {
      if (heroElement) observer.unobserve(heroElement);
      if (titleElement) observer.unobserve(titleElement);
      if (subtitleElement) observer.unobserve(subtitleElement);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-bumblebee-black/90 via-bumblebee-black/70 to-bumblebee-black/40 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Multiple Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-bumblebee-black/40 via-transparent to-bumblebee-black/40 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-bumblebee-yellow/10 to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-bumblebee-gold/5 via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 honeycomb-bg opacity-15"></div>
        
        {/* Animated Light Beams */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/4 w-[150px] h-[500px] bg-bumblebee-yellow/30 rotate-45 blur-3xl transform -translate-x-full animate-[moveLight_15s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/4 right-1/3 w-[100px] h-[600px] bg-bumblebee-gold/20 -rotate-45 blur-3xl transform translate-x-full animate-[moveLight_18s_ease-in-out_infinite_2s]"></div>
        </div>
      </div>
      
      {/* Content */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 py-16 pt-32 z-10 text-center transition-all duration-700 transform opacity-0 translate-y-10"
      >
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-300"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Aahara</span>
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-bumblebee-yellow to-bumblebee-gold animate-pulse-slow">Bridging Hunger and Hope</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light transition-all duration-1000 delay-500"
        >
          A platform connecting food donors, volunteers, and those in need to create a sustainable ecosystem of food rescue and distribution.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          <Link to="/provider" className="btn-primary animate-fade-in hover:shadow-glow" style={{ animationDelay: '0.2s' }}>
            Donate Food
          </Link>
          <Link to="/receiver" className="btn-primary animate-fade-in hover:shadow-glow" style={{ animationDelay: '0.3s' }}>
            Request Food
          </Link>
          <Link to="/volunteers" className="btn-primary animate-fade-in hover:shadow-glow" style={{ animationDelay: '0.4s' }}>
            Volunteer
          </Link>
          <Link to="/ngos" className="btn-primary animate-fade-in hover:shadow-glow" style={{ animationDelay: '0.5s' }}>
            NGO Register
          </Link>
          <Link to="/login" className="btn-primary animate-fade-in hover:shadow-glow" style={{ animationDelay: '0.6s' }}>
            Admin Login
          </Link>
        </div>
        
        <div className="mt-16 animate-bounce hover:animate-none cursor-pointer transition-all duration-300">
          <a href="#intro" className="inline-block">
            <ArrowDown className="mx-auto text-white/70 hover:text-bumblebee-yellow transition-colors duration-300" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
