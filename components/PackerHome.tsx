import React from 'react';
import PackerNavbar from './PackerNavbar';
import PackerHero from './PackerHero';
import PackerFeatures from './PackerFeatures';
import PackerEvents from './PackerEvents';
import PackerContact from './PackerContact';
import PackerFooter from './PackerFooter';

const PackerHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-packer-dark text-slate-200 font-sans selection:bg-packer-gold selection:text-packer-green flex flex-col">
      <PackerNavbar />
      <main className="flex-grow">
        <PackerHero />
        <PackerFeatures />
        <PackerEvents />
        <PackerContact />
      </main>
      <PackerFooter />
    </div>
  );
};

export default PackerHome;