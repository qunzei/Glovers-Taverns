import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
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
    { name: 'About', path: '/glovers#features' },
    { name: 'Menu', path: '/glovers/menu' },
    { name: 'Events', path: '/glovers/events' },
    { name: 'Visit Us', path: '/glovers#location' },
  ];

  return (
    <div className="fixed w-full z-50">
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-glover-dark/95 backdrop-blur-sm shadow-lg py-3' : 'bg-glover-dark/50 backdrop-blur-sm py-4 border-b border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Centered Navigation Links (Desktop) */}
          <div className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
            <div className="pointer-events-auto flex space-x-8 z-20">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="text-gray-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-widest relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-glover-gold after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center h-10">

            {/* Left: Logo and Home Icon */}
            <div className="flex items-center gap-6 z-10 flex-shrink-0">
              {/* Home Icon (Back to Locations) */}
              <button
                onClick={() => navigate('/')}
                className="hidden xl:flex items-center justify-center text-gray-500 hover:text-white transition-colors border-r border-gray-600 pr-6 mr-2"
                title="View All Locations"
              >
                <Home className="w-5 h-5" />
              </button>

              <a href="#" onClick={(e) => handleNavClick(e, '/glovers')} className="flex items-center gap-2 group">
                <span className="font-display font-bold text-2xl tracking-wider text-glover-gold uppercase">GLOVERS <span className="text-gray-300 font-light hidden sm:inline">BAR & GRILL</span></span>
              </a>
            </div>

            {/* Right: Icons & Mobile Menu */}
            <div className="flex items-center gap-4 z-10">
              {/* Phone Icon */}
              <a
                href="tel:9208263021"
                className="group flex items-center justify-center text-gray-300 hover:text-glover-gold transition-colors"
                title="Call Us"
              >
                <div className="p-2 rounded-full border border-white/10 group-hover:border-glover-gold transition-colors bg-white/5 group-hover:bg-white/10">
                  <Phone className="h-4 w-4" />
                </div>
              </a>

              {/* Map/Location Icon */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=5891+Main+Street,+Abrams,+WI+54101"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center text-gray-300 hover:text-glover-gold transition-colors"
                title="Get Directions"
              >
                <div className="p-2 rounded-full border border-white/10 group-hover:border-glover-gold transition-colors bg-white/5 group-hover:bg-white/10">
                  <MapPin className="h-4 w-4" />
                </div>
              </a>

              {/* Mobile Menu Button */}
              <div className="md:hidden border-l border-gray-700 pl-4 ml-2">
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

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-glover-dark border-t border-gray-800 absolute w-full mt-3 shadow-xl h-screen">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="block px-3 py-4 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 border-b border-gray-800 last:border-0 text-center uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 mt-8 border-t border-gray-800">
                <button
                  onClick={() => {
                    navigate('/');
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 text-sm text-glover-gold uppercase tracking-widest py-4 border border-glover-gold/30 rounded-sm"
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

export default Navbar;
