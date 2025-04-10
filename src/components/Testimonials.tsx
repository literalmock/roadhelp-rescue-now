
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Roadhelp saved me when I was stranded with a flat tire. A mechanic arrived within 20 minutes!",
      author: "Sarah T.",
      rating: 5
    },
    {
      quote: "As a mechanic, this app has helped me connect with customers in my area and grow my business.",
      author: "Michael L.",
      rating: 5
    },
    {
      quote: "The real-time tracking feature gave me peace of mind while waiting for assistance.",
      author: "James D.",
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-roadhelp-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-roadhelp-darkgray mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people are saying about Roadhelp.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
