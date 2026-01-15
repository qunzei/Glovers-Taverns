import React from 'react';
import { Clock, Tv, Beer, Utensils } from 'lucide-react';

const BlueCollarFeatures: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "All Day Kitchen",
      desc: "From early morning breakfast to late-night cravings, we're serving full meals 7 days a week."
    },
    {
      icon: <Tv className="w-6 h-6" />,
      title: "Game Day Ready",
      desc: "Surround yourself with the action. Plenty of TVs to catch the Packers, Brewers, and Bucks."
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Comfort Food",
      desc: "Hearty burgers, sandwiches, wraps, and pizza. Good food for hard-working people."
    },
    {
      icon: <Beer className="w-6 h-6" />,
      title: "Cold Drinks",
      desc: "A wide selection of ice-cold beer and spirits to wash it all down."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0f151f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
                <span className="text-bluecollar-blue text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                    Welcome to the Neighborhood
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-6 italic">
                    Casual Eats & <br/><span className="text-bluecollar-blue">Cold Drinks</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Blue Collar Bar & Grill is your hometown spot in Green Bay. We pride ourselves on being a friendly, 
                    casual hangout where you can grab a great meal any time of day. Whether you're here for breakfast 
                    after the night shift or closing down the bar after the game, we've got a seat for you.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="w-10 h-10 rounded-sm bg-bluecollar-blue/10 flex items-center justify-center text-bluecollar-blue flex-shrink-0">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-white font-bold uppercase text-sm mb-1">{feature.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Image Grid */}
            <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                    <img 
                        src="https://images.unsplash.com/photo-1619810816144-68dbc1f695e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Burger" 
                        className="rounded-sm w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1583106223774-3313c55721ed?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Pizza" 
                        className="rounded-sm w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 mt-8"
                    />
                </div>
                {/* Decorative border */}
                <div className="absolute top-4 bottom-4 left-4 right-4 border-2 border-bluecollar-blue/20 -z-10 transform translate-x-4 translate-y-4"></div>
            </div>

        </div>

        {/* Social Proof Snippet */}
        <div className="mt-20 text-center border-t border-white/5 pt-12">
            <div className="flex justify-center gap-1">
                {[1,2,3,4].map(i => (
                    <svg key={i} className="w-6 h-6 text-bluecollar-blue fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
                <svg className="w-6 h-6 text-bluecollar-blue fill-current" viewBox="0 0 20 20">
                    <defs>
                        <linearGradient id="half-star">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="#374151" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            </div>
            <p className="text-gray-500 text-sm mt-3 uppercase tracking-widest font-medium">Based on 220+ Google Reviews</p>
        </div>

      </div>
    </section>
  );
};

export default BlueCollarFeatures;