import React from 'react';
import BlueCollarHero from './BlueCollarHero';
import BlueCollarFeatures from './BlueCollarFeatures';
import BlueCollarEvents from './BlueCollarEvents';
import BlueCollarContact from './BlueCollarContact';

const BlueCollarHome: React.FC = () => {
  return (
    <>
      <BlueCollarHero />
      <BlueCollarFeatures />
      <BlueCollarEvents />
      <BlueCollarContact />
    </>
  );
};

export default BlueCollarHome;