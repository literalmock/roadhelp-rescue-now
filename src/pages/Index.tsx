
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import UserMechanicCallouts from '../components/UserMechanicCallouts';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${isMobile ? 'pb-24' : ''}`}>
        <Hero />
        <HowItWorks />
        <UserMechanicCallouts />
        <Benefits />
        <Testimonials />
        <FAQ />
      </main>
      {!isMobile && <Footer />}
    </div>
  );
};

export default Index;
