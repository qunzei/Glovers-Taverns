import React from 'react';
import { Mouse } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const Hero: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Background with Topographical Look */}
      <div className="absolute inset-0 z-0">
        {/* Using a verified Topographical Map texture */}
        <img
          src="https://images.unsplash.com/photo-1732783384071-0cdb7bbbad94?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Topographical Pattern"
          className="w-full h-full object-cover opacity-[0.15] invert contrast-125"
        />
        {/* Gradient Overlay for depth and smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d21] via-[#0f172a]/20 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <span className="block text-glover-gold text-sm font-bold tracking-[0.2em] mb-4 uppercase">
          Welcome to
        </span>
        <h1 className="font-display text-7xl md:text-9xl font-bold text-white mb-2 leading-none tracking-tight">
          GLOVERS
        </h1>
        <h2 className="font-display text-2xl md:text-4xl text-glover-gold tracking-[0.3em] uppercase mb-8">
          Bar & Grill
        </h2>

        <p className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed opacity-90">
          Your neighborhood spot in Abrams, Wisconsin for great food, cold drinks,
          and all the big games. Pull up a stool and stay awhile.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button
            onClick={() => navigate('full-menu')}
            className="px-8 py-3 bg-glover-gold text-glover-dark font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-amber-400 transition-colors"
          >
            View Menu
          </button>
          <button
            onClick={() => navigate('home', 'location')}
            className="px-8 py-3 bg-transparent border border-white/30 text-white font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-white hover:text-glover-dark transition-colors"
          >
            Find Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center animate-bounce text-gray-400 z-20">
        <Mouse className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;