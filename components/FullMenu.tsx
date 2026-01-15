import React, { useEffect } from 'react';
import { Utensils } from 'lucide-react';

interface MenuItemType {
  name: string;
  price: string;
  desc?: string;
  extras?: string;
}

interface MenuCategoryType {
  title: string;
  items: MenuItemType[];
  notes?: string;
}

const FullMenu: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menuCategories: MenuCategoryType[] = [
    {
      title: "Appetizers",
      items: [
        { name: "French Fries", price: "$3.50" },
        { name: "Tater Tots", price: "$3.50" },
        { name: "Onion Rings", price: "$4.50" },
        { name: "Mushrooms", price: "$5.00" },
        { name: "Cheese Curds", price: "$5.50" },
        { name: "Fried Pickles", price: "$4.00", desc: "served with Ranch dipping sauce" },
        { name: "Mozzarella Sticks", price: "$5.00", desc: "served with marinara sauce" },
        { name: "Chicken Wings", price: "$11.00", desc: "served with choice of dipping sauce" },
        { name: "Boneless Chicken Wings", price: "$10.00", desc: "served with choice of dipping sauce" },
      ],
      notes: "Sauces: BBQ, buffalo, teriyaki, sweet chili, garlic parmesan, Korean pepper, mango habanero. Extra sauce $.50 each"
    },
    {
      title: "Soup",
      items: [
        { name: "Chili Cup", price: "$4.00" },
        { name: "Chili Bowl", price: "$5.00" }
      ],
      notes: "Add onions or cheese $.50"
    },
    {
      title: "Entrées",
      items: [
        { name: "Hamburger", price: "$6.50" },
        { name: "Cheeseburger", price: "$7.00" },
        { name: "Bacon Cheese Burger", price: "$8.50" },
        { name: "Mushroom Swiss Burger", price: "$7.50" },
        { name: "Popper Burger", price: "$9.00", desc: "cream cheese, fried jalapenos and a spicy raspberry jelly" },
        { name: "Pork Chop Sandwich", price: "$9.00", desc: "served with fried onions and mustard" },
        { name: "Slaw Dog", price: "$3.50", desc: "Hot dog served with chili, cole slaw, onions and mustard" },
        { name: "Plain Hot Dog", price: "$2.50", extras: "add chili $.50" },
        { name: "Steak Sandwich", price: "$11.00", desc: "6 oz. Tenderloin steak", extras: "Add sautéed mushrooms and onions $1.00" },
        { name: "Grilled Cheese Sandwich", price: "$5.50", desc: "American, Swiss, Pepperjack or Cheddar cheese" },
        { name: "BLT", price: "$7.50", desc: "Bacon, lettuce, tomato and mayo served on toast" },
        { name: "Fish Sandwich", price: "$7.50", desc: "cod fish fillets, lettuce and tartar sauce" },
        { name: "Fish and Chips Basket", price: "$9.50", desc: "cod fish fillets, tartar sauce and French fries" },
        { name: "Grilled Chicken Sandwich", price: "$8.50", desc: "grilled chicken, lettuce, tomato and mayo" },
        { name: "Chicken Strip Basket", price: "$8.50", desc: "served with French fries and choice of dipping sauce" },
      ],
      notes: "Extras: cheese $.50, Two bacon strips $1.50, lettuce and tomato $.75, hamburger patty $2.50"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1d21] pt-32 pb-24 relative">
       {/* Decorative Elements matching Glovers style */}
       <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#0f172a] to-[#1a1d21]"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-glover-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Delicious Eats
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">
            Our Menu
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
             Classic American bar fare made with care. Fresh ingredients, generous portions, and recipes that keep folks coming back.
          </p>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="bg-[#23272e] border border-glover-gold/10 rounded-sm overflow-hidden relative">
              
              {/* Header */}
              <div className="bg-[#15171a] px-6 py-4 border-b border-glover-gold/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                 <h3 className="font-display text-2xl md:text-3xl text-white font-bold uppercase tracking-wider">
                    {category.title}
                 </h3>
              </div>
              
              {/* Note */}
              {category.notes && (
                  <div className="bg-glover-gold/5 px-6 py-3 border-b border-glover-gold/5">
                      <p className="text-glover-gold text-xs md:text-sm italic opacity-90 leading-relaxed">
                          {category.notes}
                      </p>
                  </div>
              )}

              {/* Items Grid */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8">
                 {category.items.map((item, itemIdx) => (
                     <div key={itemIdx} className="group">
                         <div className="flex justify-between items-baseline mb-1">
                             <div className="flex items-center gap-3">
                                <h4 className="text-white font-bold text-lg group-hover:text-glover-gold transition-colors uppercase">
                                    {item.name}
                                </h4>
                             </div>
                             <div className="flex-grow border-b border-gray-700 border-dotted mx-4 opacity-30 hidden sm:block"></div>
                             <span className="text-glover-gold font-display font-bold text-xl whitespace-nowrap">
                                 {item.price}
                             </span>
                         </div>
                         {item.desc && (
                             <p className="text-gray-400 text-sm leading-snug max-w-md">
                                 {item.desc}
                             </p>
                         )}
                         {item.extras && (
                             <p className="text-gray-500 text-xs italic mt-1">
                                 {item.extras}
                             </p>
                         )}
                     </div>
                 ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-2 text-gray-400 text-sm border border-white/10 px-6 py-4 rounded-sm bg-[#23272e]">
                 <Utensils className="w-4 h-4 text-glover-gold" />
                 <span>Prices and availability subject to change. Takeout available.</span>
             </div>
        </div>

      </div>
    </div>
  );
};

export default FullMenu;