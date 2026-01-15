import React from 'react';
import { Mic2, Trophy, Beer, Users } from 'lucide-react';

const PackerFeatures: React.FC = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Game Day HQ",
      desc: "The ultimate pregame meetup spot. Immerse yourself in the energy of Green Bay football."
    },
    {
      icon: <Mic2 className="w-8 h-8" />,
      title: "Live Entertainment",
      desc: "Regular live music and karaoke nights. The stage is always set for a good time."
    },
    {
      icon: <Beer className="w-8 h-8" />,
      title: "Full Bar",
      desc: "Ice cold beers on tap, classic cocktails, and everything you need to celebrate the win."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Local Vibe",
      desc: "A friendly, 'come as you are' neighborhood bar where everyone knows your name."
    }
  ];

  return (
    <section id="about" className="py-24 bg-packer-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-packer-green rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-packer-gold rounded-full blur-[100px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-packer-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white uppercase tracking-wide">
            Experience the Lounge
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-packer-green/30 p-8 rounded-sm border border-white/5 hover:border-packer-gold/50 transition-colors group backdrop-blur-sm">
              <div className="w-16 h-16 bg-packer-green rounded-full flex items-center justify-center text-packer-gold mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/5">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl text-white font-bold mb-3 tracking-wide uppercase">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof Snippet */}
        <div className="mt-20 text-center border-t border-white/5 pt-12">
            <p className="font-display text-2xl text-white italic opacity-90">
                "92% recommend us on Facebook"
            </p>
            <div className="flex justify-center gap-1 mt-3">
                {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-5 h-5 text-packer-gold fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">Based on 315+ Reviews</p>
        </div>
      </div>
    </section>
  );
};

export default PackerFeatures;