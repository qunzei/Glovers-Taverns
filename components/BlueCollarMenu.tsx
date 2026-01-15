import React, { useEffect } from 'react';
import { Utensils } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  extras?: string;
  tag?: string;
}

interface MenuSection {
  title: string;
  note?: string;
  items: MenuItem[];
}

const BlueCollarMenu: React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menuData: MenuSection[] = [
    {
      title: "Appetizers",
      note: "Served until 1am. Sauces: BBQ, buffalo, teriyaki, sweet chili, garlic parmesan, Korean pepper, mango habanero. Extra sauce $.50 each.",
      items: [
        { name: "Chicken Wings", price: "$13.00", description: "1# of wings served with your choice of dipping sauce" },
        { name: "Boneless Chicken Wings", price: "$11.00", description: "served with choice of our dipping sauce" },
        { name: "French Fries", price: "$4.00" },
        { name: "Onion Rings", price: "$5.50" },
        { name: "Tater Tots", price: "$4.00" },
        { name: "Mozzarella Sticks", price: "$6.00", description: "served with marinara sauce" },
        { name: "Cheese Curds", price: "$6.00" },
        { name: "Mini Tacos", price: "$6.00", description: "served with sour cream and salsa" },
        { name: "Mushrooms", price: "$6.00" },
        { name: "Fried Pickles", price: "$6.00", description: "served with Ranch dipping sauce" },
        { name: "Chips and Nacho Cheese", price: "$4.50", extras: "add jalapenos $.50 extra" },
      ]
    },
    {
      title: "Entrées",
      note: "Extras: fried onions $1.00, mushrooms $1.00, cheese $.50, two bacon strips $2.00, lettuce and tomato $.75, extra hamburger patty $2.50",
      items: [
        { name: "Blue Collar Burger", price: "$10.50", description: "Hamburger and a brat patty", tag: "Signature" },
        { name: "Hamburger", price: "$7.50" },
        { name: "Cheeseburger", price: "$8.00" },
        { name: "Bacon Cheese Burger", price: "$9.50" },
        { name: "Mushroom Swiss Burger", price: "$9.00" },
        { name: "Grilled Cheese Sandwich", price: "$6.50", description: "American, Swiss, Pepperjack or Cheddar cheese" },
        { name: "BLT", price: "$10.00", description: "Bacon, lettuce, tomato and mayo served on toast" },
        { name: "Loaded BLT", price: "$13.00", description: "Bacon, lettuce, tomato, fried egg, cheese and hash brown served on toast", tag: "Must Try" },
        { name: "Fish Sandwich", price: "$9.50", description: "Cod fish fillets, lettuce and tartar sauce" },
        { name: "Fish and Chips Basket", price: "$11.00", description: "Cod fish fillets, tartar sauce and French fries" },
        { name: "Grilled Chicken Sandwich", price: "$11.00", description: "Grilled chicken, lettuce, tomato and mayo" },
        { name: "Shrimp Basket", price: "$13.00", description: "Six shrimp served with cocktail sauce and French fries" },
        { name: "Chicken Cordon Bleu", price: "$11.50", description: "Grilled chicken, ham and Swiss cheese" },
        { name: "Chicken Strip Basket", price: "$12.00", description: "served with French fries and choice of dipping sauce" },
        { name: "Steak Sandwich", price: "$13.00", description: "6 oz. Ribeye steak. Add sautéed mushrooms and onions $1.00" },
      ]
    },
    {
      title: "Homemade Pizza",
      note: "Served until 1am. Toppings: sausage, pepperoni, ham, bacon, chicken, onions, green peppers, fresh mushrooms, green olives, black olives, jalapeno peppers and pineapple.",
      items: [
        { name: "Build Your Own (12\")", price: "$11.00+", description: "Cheese base. Additional toppings $1.50, meats $2.00" },
        { name: "Build Your Own (16\")", price: "$14.00+", description: "Cheese base. Additional toppings $2.00, meats $2.50" },
        { name: "Combination", price: "$17.50 / $22.00", description: "Sausage, pepperoni, fresh mushrooms, green peppers and onions" },
        { name: "Meat Lovers", price: "$17.00 / $21.00", description: "Sausage, Pepperoni, ham and bacon" },
        { name: "Sally's Special", price: "$20.00 / $25.00", description: "Extra cheese, extra sausage, extra pepperoni and extra mushrooms" },
        { name: "The \"GLOVERS\" Pizza", price: "$29.00", description: "16\" only. Pepperoni, ham, bacon, onions, green peppers, fresh mushrooms, green olives, black olives, pineapple and jalapeno peppers", tag: "Huge" },
      ]
    },
    {
      title: "Soups",
      items: [
        { name: "Chili", price: "$5.00 Cup / $6.00 Bowl", extras: "Add onions, cheese or sour cream $.25 ea" },
        { name: "Ramen Noodles", price: "$3.00", description: "Beef, chicken or shrimp flavors served with toast" },
      ]
    },
    {
      title: "Friday Fish Menu",
      note: "Served Friday | 4pm - 9pm. All dinners include housemade coleslaw, buttered rye bread, slice of onion & choice of potato (French Fries, Tator Tots, or Roasted Baby Reds).",
      items: [
        { name: "Two Piece Perch Dinner", price: "$14.00", description: "Two butterflies fried in our special blend of herbs & spices. Served with tartar." },
        { name: "Three Piece Perch Dinner", price: "$17.00", description: "Three butterflies fried in our special blend of herbs & spices. Served with tartar." },
        { name: "Four Piece Perch Dinner", price: "$20.00", description: "Four butterflies fried in our special blend of herbs & spices. Served with tartar." },
        { name: "Perch Sandwich", price: "$13.00", description: "Served on rye or hard roll with tartar" },
        { name: "Fried Cod Dinner", price: "$16.00", description: "Two piece cod fried in our special blend of herbs & spices. Served with tartar." },
        { name: "Baked Cod Dinner", price: "$16.00", description: "Two piece cod baked with choice of garlic butter, Cajun or lemon pepper seasoning. (30 min cook time)" },
        { name: "Cod Sandwich Dinner", price: "$16.00", description: "Fried cod served on rye or hard roll with tartar" },
        { name: "Frog Legs", price: "$16.00", description: "Four legs fried with our special blend of herbs & spices" },
        { name: "Fried Shrimp Dinner", price: "$14.00", description: "Six pieces fried. Served with cocktail sauce" },
        { name: "Baked Shrimp Dinner", price: "$14.00", description: "Six shrimp baked with choice of garlic butter, Cajun or lemon pepper seasoning" },
        { name: "Combo Platter", price: "$22.00", description: "Two piece perch, one piece cod (baked or fried) and four shrimp (baked or fried)" },
      ]
    }
  ];

  return (
    <section id="menu" className="pt-32 pb-24 bg-[#0b1120] relative min-h-screen">
       {/* Decorative Elements */}
       <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#0f151f] to-[#0b1120]"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-bluecollar-blue text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Kitchen Open Late
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tight italic">
            Full Menu
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
             Breakfast served weekends starting at 6am. Full menu available until 1am daily.
          </p>
        </div>

        <div className="space-y-16">
          {menuData.map((section, idx) => (
            <div key={idx} className="bg-[#121926] border border-bluecollar-blue/10 rounded-sm overflow-hidden relative">
              
              {/* Header */}
              <div className="bg-[#1a2333] px-6 py-4 border-b border-bluecollar-blue/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                 <h3 className="font-display text-2xl md:text-3xl text-white font-bold uppercase italic tracking-wider">
                    {section.title}
                 </h3>
                 {section.title.includes("Friday") && (
                     <span className="inline-flex items-center px-3 py-1 bg-bluecollar-blue text-black text-xs font-bold uppercase tracking-wider rounded-sm">
                        Friday 4pm - 9pm
                     </span>
                 )}
              </div>
              
              {/* Note */}
              {section.note && (
                  <div className="bg-bluecollar-blue/5 px-6 py-3 border-b border-bluecollar-blue/5">
                      <p className="text-bluecollar-blue text-xs md:text-sm italic opacity-90 leading-relaxed">
                          {section.note}
                      </p>
                  </div>
              )}

              {/* Items Grid */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8">
                 {section.items.map((item, itemIdx) => (
                     <div key={itemIdx} className="group">
                         <div className="flex justify-between items-baseline mb-1">
                             <div className="flex items-center gap-3">
                                <h4 className="text-white font-bold text-lg group-hover:text-bluecollar-blue transition-colors uppercase">
                                    {item.name}
                                </h4>
                                {item.tag && (
                                    <span className="px-2 py-0.5 bg-bluecollar-blue text-[10px] font-bold text-black uppercase rounded-sm">
                                        {item.tag}
                                    </span>
                                )}
                             </div>
                             <div className="flex-grow border-b border-gray-700 border-dotted mx-4 opacity-30 hidden sm:block"></div>
                             <span className="text-bluecollar-blue font-display font-bold text-xl whitespace-nowrap">
                                 {item.price}
                             </span>
                         </div>
                         {item.description && (
                             <p className="text-gray-400 text-sm leading-snug max-w-md">
                                 {item.description}
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
             <div className="inline-flex items-center gap-2 text-gray-400 text-sm border border-white/10 px-6 py-4 rounded-sm bg-[#1a2333]">
                 <Utensils className="w-4 h-4 text-bluecollar-blue" />
                 <span>Prices and availability subject to change. Takeout available.</span>
             </div>
        </div>

      </div>
    </section>
  );
};

export default BlueCollarMenu;