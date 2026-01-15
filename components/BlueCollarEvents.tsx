import React from 'react';
import { Ticket, Music2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const BlueCollarEvents: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section id="events" className="py-24 bg-bluecollar-dark border-t border-white/5 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{backgroundImage: 'radial-gradient(#4dabe3 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-bluecollar-blue text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            What's Happening
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight italic">
            Events & Specials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Meat Raffle Card */}
            <div className="bg-[#161f2e] border border-bluecollar-blue/10 p-8 rounded-sm relative group hover:border-bluecollar-blue/30 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Ticket className="w-24 h-24 text-bluecollar-blue" />
                </div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-bluecollar-blue text-black flex items-center justify-center rounded-sm mb-6">
                        <Ticket className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl text-white font-bold uppercase mb-4">Community Meat Raffles</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Join us for our famous meat raffles! Great prizes, great fun, and always supporting local causes. 
                        It's a community favorite you don't want to miss.
                    </p>
                    <a 
                        href="https://www.facebook.com/gbbroadwaybar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-black/30 border border-white/10 rounded-sm hover:bg-bluecollar-blue hover:text-black hover:border-bluecollar-blue transition-colors text-bluecollar-blue"
                    >
                        <span className="text-sm font-bold uppercase tracking-wider">Check Facebook for Dates</span>
                    </a>
                </div>
            </div>

            {/* Live Music Card */}
            <div className="bg-[#161f2e] border border-bluecollar-blue/10 p-8 rounded-sm relative group hover:border-bluecollar-blue/30 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Music2 className="w-24 h-24 text-bluecollar-blue" />
                </div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-bluecollar-blue text-black flex items-center justify-center rounded-sm mb-6">
                        <Music2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl text-white font-bold uppercase mb-4">Live Music</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        We host live local bands from time to time. Enjoy your dinner and drinks with some great tunes. 
                        Check out our calendar to see who's playing next.
                    </p>
                    <button 
                        onClick={() => navigate('upcoming-shows')}
                        className="inline-block px-6 py-3 bg-bluecollar-blue text-black font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white transition-colors"
                    >
                        Upcoming Events
                    </button>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default BlueCollarEvents;