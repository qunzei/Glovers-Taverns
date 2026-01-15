import React from 'react';
import { Tv, Utensils, Beer, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Tv className="w-6 h-6" />,
      title: "Catch Every Game",
      desc: "Multiple TVs showing all the big games - Packers, Brewers, Badgers, and more."
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Comfort Food Done Right",
      desc: "From juicy burgers to our famous Friday fish fry, we serve hearty meals you'll love."
    },
    {
      icon: <Beer className="w-6 h-6" />,
      title: "Cold Drinks on Tap",
      desc: "Full bar with local favorites, craft beers, cocktails, and more."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Gathering Spot",
      desc: "Where neighbors become friends. A welcoming space for everyone."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#1a1d21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-glover-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white uppercase tracking-wide">
            Your Local Hangout
          </h2>
          <div className="mt-6 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            <p>
              Glovers Bar and Grill is where Abrams comes together. Whether you're catching the game, 
              grabbing lunch with coworkers, or enjoying a Friday night out with the family, 
              we've got a seat for you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#23272e] p-8 rounded-lg border border-white/5 hover:border-glover-gold/30 transition-colors group">
              <div className="w-12 h-12 bg-glover-gold rounded-lg flex items-center justify-center text-glover-dark mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg text-white font-medium mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof Snippet */}
        <div className="mt-20 text-center border-t border-white/5 pt-12">
            <div className="flex justify-center gap-1">
                {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-6 h-6 text-glover-gold fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <p className="text-gray-500 text-sm mt-3 uppercase tracking-widest font-medium">Based on 100+ Google Reviews</p>
        </div>

      </div>
    </section>
  );
};

export default Features;