import React from 'react';
import { Mouse, ChevronDown } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const BlueCollarHero: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-bluecollar-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=2915&auto=format&fit=crop"
          alt="Bar Atmosphere"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-bluecollar-blue/10 mix-blend-overlay"></div>
        {/* Gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-bluecollar-dark via-bluecollar-dark/60 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
        
        <div className="mb-6 flex justify-center">
            <span className="bg-bluecollar-blue text-black px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
                Green Bay's Hometown Hangout
            </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none tracking-tighter uppercase italic">
          Blue Collar
        </h1>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-bluecollar-blue mb-10 leading-none tracking-widest uppercase">
          Bar & Grill
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm md:text-base font-medium tracking-wider uppercase mb-12">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-bluecollar-blue rounded-full"></span>Breakfast</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-bluecollar-blue rounded-full"></span>Lunch</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-bluecollar-blue rounded-full"></span>Dinner</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-bluecollar-blue rounded-full"></span>Late Night</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button
            onClick={() => navigate('full-menu')}
            className="px-8 py-3 bg-bluecollar-blue text-black font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-white transition-colors"
          >
            Menu
          </button>
          <button
            onClick={() => navigate('home', 'location')}
            className="px-8 py-3 bg-transparent border border-white/30 text-white font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-white hover:text-black transition-colors"
          >
            Visit Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center animate-pulse text-bluecollar-blue z-20">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default BlueCollarHero;