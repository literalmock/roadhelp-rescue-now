
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NearbyServices = () => {
  const navigate = useNavigate();
  
  const services = [
    { 
      id: 1, 
      name: 'Quick Fix Auto', 
      distance: 3.1,
      rating: 4.7,
      address: '123 Main St'
    },
    { 
      id: 2, 
      name: 'JK Auto Repair Service', 
      distance: 2.5,
      rating: 4.5,
      address: '456 Oak Ave'
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Nearby Repair Services</h2>
          <Button 
            variant="ghost" 
            className="text-roadhelp-blue flex items-center gap-1"
            onClick={() => navigate('/nearby')}
          >
            View all <ArrowRight size={16} />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service) => (
            <Card key={service.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <div className="flex items-center text-gray-500 mt-1">
                      <MapPin size={14} className="mr-1" /> 
                      <span>{service.address}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      Rating: {service.rating}/5.0
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-roadhelp-blue/10 text-roadhelp-blue px-2 py-1 rounded text-sm">
                      {service.distance} km
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyServices;
