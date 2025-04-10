
import React from 'react';
import { Clock, Shield, MapPin, Lock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-roadhelp-blue" />,
      title: "Quick response time",
      description: "Get connected with a mechanic in minutes, not hours."
    },
    {
      icon: <Shield className="h-8 w-8 text-roadhelp-blue" />,
      title: "Verified mechanics",
      description: "All service providers are vetted and reviewed for quality."
    },
    {
      icon: <MapPin className="h-8 w-8 text-roadhelp-blue" />,
      title: "Real-time tracking",
      description: "Know exactly when help will arrive with live GPS tracking."
    },
    {
      icon: <Lock className="h-8 w-8 text-roadhelp-blue" />,
      title: "Simple, secure interface",
      description: "Easy to use app with secure payment processing."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-roadhelp-darkgray mb-4">Why Choose Roadhelp</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform is designed to make roadside assistance as quick and hassle-free as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
