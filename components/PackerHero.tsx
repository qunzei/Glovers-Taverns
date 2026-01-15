import React from 'react';
import { Mouse } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const PackerHero: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-packer-green">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1610729866389-fbf90649c302?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Stadium Atmosphere"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-packer-dark via-packer-green/50 to-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="inline-block border-2 border-packer-gold px-6 py-2 mb-8 rounded-sm bg-black/30 backdrop-blur-sm">
            <span className="text-packer-gold text-sm font-bold tracking-[0.2em] uppercase">
            Est. Green Bay, WI
            </span>
        </div>
        
        <h1 className="font-display text-5xl md:text-8xl font-bold text-white mb-2 leading-none tracking-tighter uppercase drop-shadow-lg">
          The Packer
        </h1>
        <h2 className="font-display text-4xl md:text-7xl font-bold text-packer-gold mb-8 leading-none tracking-tight uppercase drop-shadow-lg">
          Stadium Lounge
        </h2>
        
        <p className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Your premier game day destination and neighborhood pub. 
          <br className="hidden md:block"/>
          Cold drinks, live music, and the best pregame energy in town.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button
            onClick={() => navigate('home', 'events')}
            className="px-8 py-3 bg-packer-gold text-packer-dark font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-yellow-400 transition-colors border border-packer-gold"
          >
            What's On
          </button>
          <button
            onClick={() => navigate('home', 'location')}
            className="px-8 py-3 bg-transparent border border-white/30 text-white font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-white hover:text-packer-dark transition-colors"
          >
            Find Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center animate-bounce text-packer-gold z-20">
        <Mouse className="w-6 h-6" />
      </div>
    </section>
  );
};

export default PackerHero;