import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const MenuSection: React.FC = () => {
  const { navigate } = useNavigation();

  const highlights = [
    {
      title: "Classic Burgers",
      tag: "Fan Favorite",
      desc: "Hand-pattied beef burgers served with crispy fries. Add bacon, cheese, or go all out with our signature toppings.",
      image: "https://images.unsplash.com/photo-1644447381290-85358ae625cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Friday Fish Fry",
      tag: "Wisconsin Classic",
      desc: "A Wisconsin tradition! Beer-battered cod with coleslaw, tartar sauce, and potato pancakes. Fridays only.",
      image: "https://images.unsplash.com/photo-1565192259022-0427b058f372?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Cold Drinks",
      tag: "On Tap",
      desc: "Full bar with local beers on tap, craft selections, cocktails, and all your favorites. Always ice cold.",
      image: "https://plus.unsplash.com/premium_photo-1661410894962-13778bdd7ed9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-[#1a1d21] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-glover-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            What We Serve
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white uppercase tracking-wide mb-6">
            Menu Highlights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Classic American bar fare made with care. Fresh ingredients, generous portions, and recipes that keep folks coming back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden bg-[#23272e] border border-white/5">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-glover-gold text-glover-dark text-[10px] font-bold uppercase tracking-wider rounded-sm mb-4">
                  {item.tag}
                </span>
                <h3 className="font-display text-2xl text-white font-medium mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <button 
            onClick={() => navigate('full-menu')}
            className="group flex items-center gap-2 px-10 py-4 bg-glover-gold text-glover-dark font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-amber-400 transition-colors"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Plus appetizers, sandwiches, salads, and daily specials!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;