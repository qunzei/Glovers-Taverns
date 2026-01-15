import React from 'react';

const PackerFooter: React.FC = () => {
  return (
    <footer className="bg-[#0e1412] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          
          {/* Logo */}
          <div className="flex flex-col items-center">
             <span className="font-display font-bold text-2xl text-white tracking-wider uppercase">THE PACKER</span>
             <span className="font-display font-bold text-lg text-packer-gold tracking-[0.3em] uppercase">STADIUM LOUNGE</span>
          </div>
          
          {/* Info Line */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-gray-400 text-sm w-full">
            <span>Green Bay, Wisconsin</span>
            <span className="hidden md:inline-block w-1 h-1 rounded-full bg-packer-gold"></span>
            <span>Game Day Headquarters</span>
            <span className="hidden md:inline-block w-1 h-1 rounded-full bg-packer-gold"></span>
            <a href="tel:9205449450" className="hover:text-packer-gold transition-colors">(920) 544-9450</a>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/5 mt-8 pt-8 flex justify-center w-full">
          <p className="text-[10px] text-gray-600 text-center">
            &copy; {new Date().getFullYear()} The Packer Stadium Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PackerFooter;