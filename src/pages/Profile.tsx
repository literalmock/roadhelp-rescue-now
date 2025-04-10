
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const Profile = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${isMobile ? 'pt-6' : 'pt-24'} ${isMobile ? 'pb-24' : 'pb-16'}`}>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
          <p className="text-lg text-gray-600 mb-8">Manage your account details and preferences.</p>
          
          {/* Placeholder content */}
          <div className="bg-gray-100 rounded-lg p-10 text-center">
            <p className="text-xl text-gray-500">Profile information will appear here</p>
          </div>
        </div>
      </main>
      {!isMobile && <Footer />}
    </div>
  );
};

export default Profile;
