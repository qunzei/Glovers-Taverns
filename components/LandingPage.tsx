import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const venues = [
    {
      id: 'packer_stadium',
      path: '/packer-stadium',
      name: "Packer Stadium Lounge",
      location: "Green Bay, WI",
      image: "https://images.unsplash.com/photo-1621870064669-c2e0e5cf19db?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Your premier game day destination just steps from the action.",
      accent: "text-green-500",
      bgHover: "group-hover:bg-green-500"
    },
    {
      id: 'glovers',
      path: '/glovers',
      name: "Glovers Bar & Grill",
      location: "Abrams, WI",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop",
      desc: "The classic neighborhood sports bar.",
      accent: "text-amber-500",
      bgHover: "group-hover:bg-amber-500"
    },
    {
      id: 'blue_collar',
      path: '/blue-collar',
      name: "Blue Collar Bar & Grill",
      location: "Green Bay, WI",
      image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=2915&auto=format&fit=crop",
      desc: "Hard work deserves a cold drink. Welcome to your local spot.",
      accent: "text-blue-500",
      bgHover: "group-hover:bg-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white overflow-hidden flex flex-col">
      {/* Simple Header - Reduced Height */}
      <div className="py-6 px-4 text-center z-10 relative bg-[#0f172a] border-b border-white/5">
        <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight uppercase mb-1">
          Glovers Taverns
        </h1>
        <p className="text-gray-400 text-xs md:text-sm font-light tracking-widest uppercase">
          Choose Your Destination
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 h-full min-h-[calc(100vh-120px)]">
        {venues.map((venue) => (
          <div
            key={venue.id}
            onClick={() => navigate(venue.path)}
            className="relative group cursor-pointer border-r border-white/5 last:border-r-0 border-b md:border-b-0 overflow-hidden"
          >
            {/* Bg Image */}
            <div className="absolute inset-0">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">

              {/* 
                   Wrapper for content that shifts. 
                   md:translate-y-12 pushes the content down initially to visually center the top portion 
                   (Location + Title) because the hidden Description below takes up space in the flex layout.
                   On hover, it translates back to 0 to accommodate the appearing description.
                */}
              <div className={`flex flex-col items-center transform transition-transform duration-500 md:translate-y-12 group-hover:translate-y-0 ${venue.id === 'glovers' ? '-mt-4 md:-mt-8' : ''}`}>

                {/* Location - Always Visible */}
                <span className={`text-xs font-bold tracking-[0.2em] uppercase mb-4 ${venue.accent}`}>
                  {venue.location}
                </span>

                <h2 className={`font-display text-3xl md:text-5xl font-bold uppercase mb-4 text-white transition-colors`}>
                  {venue.name}
                </h2>

                <div className={`h-0.5 w-12 bg-white/30 group-hover:w-24 ${venue.bgHover} transition-all duration-300 mb-6`} />

                {/* Description: Hidden on mobile, visible on tablet/desktop with hover */}
                <p className="hidden md:block text-gray-300 max-w-xs text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 leading-relaxed">
                  {venue.desc}
                </p>

                {/* Button: Visible on mobile, visible on hover for desktop */}
                <div className="mt-8 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-white/30 px-6 py-3 rounded-sm hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                    Enter Site <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;