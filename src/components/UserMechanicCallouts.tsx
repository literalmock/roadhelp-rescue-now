
import React from 'react';
import { Button } from '@/components/ui/button';
import { Car, Wrench } from 'lucide-react';

const UserMechanicCallouts = () => {
  return (
    <section className="py-16 bg-roadhelp-lightgray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* User Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-roadhelp-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">I need help</h3>
              <p className="text-gray-600 mb-6">
                Experiencing car trouble? Sign up as a user to quickly connect with nearby mechanics and get back on the road.
              </p>
              <Button className="bg-roadhelp-blue hover:bg-blue-700 text-white font-medium">
                Sign up as a Driver
              </Button>
            </div>
          </div>
          
          {/* Mechanic Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-roadhelp-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4">I'm a mechanic</h3>
              <p className="text-gray-600 mb-6">
                Join our network of trusted mechanics and grow your business by helping drivers in need of roadside assistance.
              </p>
              <Button className="bg-roadhelp-orange hover:bg-orange-600 text-white font-medium">
                Register as a Mechanic
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserMechanicCallouts;
