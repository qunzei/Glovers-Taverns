import React from 'react';

const BlueCollarFooter: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          
          {/* Logo */}
          <div className="flex flex-col items-center">
             <span className="font-display font-bold text-2xl text-white tracking-wider uppercase italic">BLUE COLLAR</span>
             <span className="font-display font-bold text-lg text-bluecollar-blue tracking-[0.3em] uppercase">BAR & GRILL</span>
          </div>
          
          {/* Info Line */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-gray-500 text-sm w-full">
            <span>Green Bay, Wisconsin</span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-bluecollar-blue"></span>
            <span>Hometown Sports Bar</span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-bluecollar-blue"></span>
            <a href="tel:9207705014" className="hover:text-bluecollar-blue transition-colors">(920) 770-5014</a>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/5 mt-8 pt-8 flex justify-center w-full">
          <p className="text-[10px] text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Blue Collar Bar & Grill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlueCollarFooter;