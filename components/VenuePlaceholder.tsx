import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft } from 'lucide-react';

interface Props {
  name: string;
}

const VenuePlaceholder: React.FC<Props> = ({ name }) => {
  const { selectVenue } = useNavigation();
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.05]">
          <svg width="100%" height="100%">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
      </div>

      <div className="z-10 relative max-w-2xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl text-white font-bold mb-6 uppercase tracking-tight">{name}</h1>
        <div className="w-24 h-1 bg-gray-700 mx-auto mb-8"></div>
        <p className="text-gray-400 mb-12 text-xl font-light">
          We are currently building our new online experience. <br/>Check back soon!
        </p>
        <button 
          onClick={() => selectVenue(null)}
          className="group flex items-center gap-2 px-8 py-4 bg-white/5 text-white rounded-sm hover:bg-white/10 border border-white/10 transition-all mx-auto uppercase tracking-widest text-sm font-bold"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to All Locations
        </button>
      </div>
    </div>
  );
};

export default VenuePlaceholder;