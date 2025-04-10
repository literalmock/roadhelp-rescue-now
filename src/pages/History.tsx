
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const History = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Service History</h1>
          <p className="text-lg text-gray-600 mb-8">View your past roadside assistance requests.</p>
          
          {/* Placeholder content */}
          <div className="bg-gray-100 rounded-lg p-10 text-center">
            <p className="text-xl text-gray-500">Your service history will appear here</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;
