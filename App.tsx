import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FullMenu from './components/FullMenu';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import VenuePlaceholder from './components/VenuePlaceholder';
import PackerHome from './components/PackerHome';
import BlueCollarHome from './components/BlueCollarHome';
import BlueCollarNavbar from './components/BlueCollarNavbar';
import BlueCollarFooter from './components/BlueCollarFooter';
import BlueCollarMenu from './components/BlueCollarMenu';
import BlueCollarUpcomingShows from './components/BlueCollarUpcomingShows';
import GloversEvents from './components/GloversEvents';
import { NavigationProvider, useNavigation } from './context/NavigationContext';

const MainContent = () => {
  const { currentPage, currentVenue } = useNavigation();
  
  // If no venue is selected, show the Multi-Venue Landing Page
  if (!currentVenue) {
    return <LandingPage />;
  }

  // Glovers Bar & Grill
  if (currentVenue === 'glovers') {
    return (
      <div className="min-h-screen bg-[#1a1d21] text-slate-200 font-sans selection:bg-glover-gold selection:text-glover-dark flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {currentPage === 'home' && <Home />}
          {currentPage === 'full-menu' && <FullMenu />}
          {currentPage === 'events' && <GloversEvents />}
        </main>
        <Footer />
      </div>
    );
  }

  // Packer Stadium Lounge
  if (currentVenue === 'packer_stadium') {
    return <PackerHome />;
  }

  // Blue Collar Bar & Grill
  if (currentVenue === 'blue_collar') {
    return (
      <div className="min-h-screen bg-bluecollar-dark text-slate-200 font-sans selection:bg-bluecollar-blue selection:text-black flex flex-col">
        <BlueCollarNavbar />
        <main className="flex-grow">
          {currentPage === 'home' && <BlueCollarHome />}
          {currentPage === 'full-menu' && <BlueCollarMenu />}
          {currentPage === 'upcoming-shows' && <BlueCollarUpcomingShows />}
        </main>
        <BlueCollarFooter />
      </div>
    );
  }

  return <VenuePlaceholder name='Coming Soon' />;
};

function App() {
  return (
    <NavigationProvider>
      <MainContent />
    </NavigationProvider>
  );
}

export default App;