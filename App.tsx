import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation, Navigate } from 'react-router-dom';
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

// Helper to handle hash scrolling and scroll-to-top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const GloversLayout = () => {
  return (
    <div className="min-h-screen bg-[#1a1d21] text-slate-200 font-sans selection:bg-glover-gold selection:text-glover-dark flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const BlueCollarLayout = () => {
  return (
    <div className="min-h-screen bg-bluecollar-dark text-slate-200 font-sans selection:bg-bluecollar-blue selection:text-black flex flex-col">
      <BlueCollarNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <BlueCollarFooter />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Glovers Bar & Grill */}
        <Route path="/glovers" element={<GloversLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<FullMenu />} />
          <Route path="events" element={<GloversEvents />} />
        </Route>

        {/* Packer Stadium Lounge */}
        <Route path="/packer-stadium" element={<PackerHome />} />

        {/* Blue Collar Bar & Grill */}
        <Route path="/blue-collar" element={<BlueCollarLayout />}>
          <Route index element={<BlueCollarHome />} />
          <Route path="menu" element={<BlueCollarMenu />} />
          <Route path="events" element={<BlueCollarUpcomingShows />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
