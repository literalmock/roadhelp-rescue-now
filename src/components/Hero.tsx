
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-roadhelp-lightgray to-white"></div>
      <div className="absolute inset-0 -z-10 bg-[url('/images/road-map-bg.svg')] bg-no-repeat bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-roadhelp-darkgray">
              Stuck on the road? <br />
              <span className="text-roadhelp-blue">We've got your back.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Connect with nearby mechanics instantly for fast roadside assistance. 
              Help is just a tap away, no matter where you are.
            </p>
            
            <Button className="cta-button text-lg group" size="lg">
              Find Help Now
              <MapPin className="ml-2 h-5 w-5 group-hover:animate-pulse-light" />
            </Button>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <img 
                src="/images/hero-illustration.svg" 
                alt="Roadside assistance illustration" 
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x600/e0e8ff/0056b3?text=Roadhelp";
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
