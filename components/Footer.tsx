import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#15171a] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          
          {/* Logo */}
          <div className="flex justify-center">
            <span className="font-display font-bold text-2xl text-glover-gold tracking-wider uppercase">GLOVERS <span className="text-gray-400 font-light">BAR & GRILL</span></span>
          </div>
          
          {/* Info Line */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-gray-400 text-sm w-full">
            <span>Abrams, Wisconsin</span>
            <span className="hidden md:inline-block w-1 h-1 rounded-full bg-glover-gold"></span>
            <span>Your neighborhood bar since day one</span>
            <span className="hidden md:inline-block w-1 h-1 rounded-full bg-glover-gold"></span>
            <a href="tel:9208263021" className="hover:text-glover-gold transition-colors">(920) 826-3021</a>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/5 mt-8 pt-8 flex justify-center w-full">
          <p className="text-[10px] text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Glovers Bar and Grill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;