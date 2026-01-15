import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlueCollarNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'About', path: '/blue-collar#about' },
    { name: 'Menu', path: '/blue-collar/menu' },
    { name: 'Events', path: '/blue-collar/events' },
    { name: 'Location', path: '/blue-collar#location' },
  ];

  return (
    <div className="fixed w-full z-50">
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-bluecollar-dark/95 backdrop-blur-sm shadow-lg py-3' : 'bg-bluecollar-dark/80 backdrop-blur-sm py-4 border-b border-bluecollar-blue/20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Centered Navigation Links (Desktop) */}
          <div className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
            <div className="pointer-events-auto flex space-x-8 z-20">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="text-gray-300 hover:text-bluecollar-blue font-medium transition-colors text-sm uppercase tracking-widest relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-bluecollar-blue after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center h-10">

            {/* Left: Logo and Home Icon */}
            <div className="flex items-center gap-6 z-10 flex-shrink-0">
              {/* Home Icon */}
              <button
                onClick={() => navigate('/')}
                className="hidden xl:flex items-center justify-center text-gray-500 hover:text-bluecollar-blue transition-colors border-r border-gray-600 pr-6 mr-2"
                title="View All Locations"
              >
                <Home className="w-5 h-5" />
              </button>

              <a href="#" onClick={(e) => handleNavClick(e, '/blue-collar')} className="flex items-center gap-2 group">
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl md:text-2xl tracking-tighter text-white uppercase leading-none italic">
                    BLUE COLLAR
                  </span>
                  <span className="font-display font-bold text-sm md:text-base tracking-[0.2em] text-bluecollar-blue uppercase leading-none">
                    BAR & GRILL
                  </span>
                </div>
              </a>
            </div>

            {/* Right: Icons & Mobile Menu */}
            <div className="flex items-center gap-4 z-10">
              <a
                href="tel:9207705014"
                className="group flex items-center justify-center text-gray-300 hover:text-bluecollar-blue transition-colors"
                title="Call Us"
              >
                <div className="p-2 rounded-full border border-white/10 group-hover:border-bluecollar-blue transition-colors bg-white/5 group-hover:bg-white/10">
                  <Phone className="h-4 w-4" />
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=1313+S+Broadway,+Green+Bay,+WI+54304"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center text-gray-300 hover:text-bluecollar-blue transition-colors"
                title="Get Directions"
              >
                <div className="p-2 rounded-full border border-white/10 group-hover:border-bluecollar-blue transition-colors bg-white/5 group-hover:bg-white/10">
                  <MapPin className="h-4 w-4" />
                </div>
              </a>

              <div className="md:hidden border-l border-gray-600 pl-4 ml-2">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-300 hover:text-white focus:outline-none flex items-center"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-bluecollar-dark border-t border-gray-700 absolute w-full mt-3 shadow-xl h-screen">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="block px-3 py-4 rounded-md text-lg font-medium text-gray-200 hover:text-bluecollar-blue hover:bg-black/20 border-b border-white/5 last:border-0 text-center uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 mt-8 border-t border-white/10">
                <button
                  onClick={() => {
                    navigate('/');
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 text-sm text-bluecollar-blue uppercase tracking-widest py-4 border border-bluecollar-blue/30 rounded-sm"
                >
                  <Home className="w-4 h-4" /> View All Locations
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default BlueCollarNavbar;