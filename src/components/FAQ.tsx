
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can I expect help to arrive?",
      answer: "Response times vary based on your location and mechanic availability, but our average response time is under 30 minutes in urban areas."
    },
    {
      question: "How much does the service cost?",
      answer: "Pricing depends on the type of service you need. Basic services start at $50, and you'll see the exact price before confirming your request."
    },
    {
      question: "Is Roadhelp available in my area?",
      answer: "Roadhelp is currently available in major cities across the United States. We're expanding rapidly to cover more areas."
    },
    {
      question: "How do I become a service provider?",
      answer: "Mechanics can register through our app or website. You'll need to provide proof of qualifications, insurance, and pass a background check."
    },
    {
      question: "What types of vehicle issues can be handled?",
      answer: "Our mechanics can help with common issues like flat tires, dead batteries, lockouts, fuel delivery, and minor repairs. More complex issues may require towing to a garage."
    }
  ];

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-roadhelp-darkgray mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about how Roadhelp works? Find answers to common questions below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
