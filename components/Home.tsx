import React from 'react';
import Hero from './Hero';
import Features from './Features';
import MenuSection from './MenuSection';
import ContactSection from './ContactSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <MenuSection />
      <ContactSection />
    </>
  );
};

export default Home;