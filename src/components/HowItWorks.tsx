
import React from 'react';
import { MapPin, Wrench, Clock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="w-10 h-10 text-roadhelp-blue" />,
      title: "Locate yourself",
      description: "Share your location or enter your address to help mechanics find you quickly."
    },
    {
      icon: <Wrench className="w-10 h-10 text-roadhelp-blue" />,
      title: "Choose a mechanic",
      description: "Browse nearby mechanics, view ratings, and select the one that fits your needs."
    },
    {
      icon: <Clock className="w-10 h-10 text-roadhelp-blue" />,
      title: "Get help fast",
      description: "Track your mechanic's arrival in real-time and get back on the road quickly."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-roadhelp-darkgray mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting roadside assistance has never been easier. Follow these simple steps to get back on the road quickly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">Step {index + 1}: {step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
