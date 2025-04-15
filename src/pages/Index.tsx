
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import LiveDemo from '@/components/LiveDemo';
import UpcomingFeatures from '@/components/UpcomingFeatures';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <LiveDemo />
        <UpcomingFeatures />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
