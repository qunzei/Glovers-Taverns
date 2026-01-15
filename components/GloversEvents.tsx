import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Music, MapPin, Loader2, Trophy, Ticket } from 'lucide-react';

// ==================================================================================
// INSTRUCTIONS FOR UPDATING THE CALENDAR (NO CODING REQUIRED)
// ==================================================================================
// 1. Create a Google Sheet.
// 2. In the first row (headers), add these EXACT columns:
//    Day, Date, Event Name, Time, Category, Description
// 3. Fill in your events below the headers.
// 4. Go to "File" > "Share" > "Publish to web".
// 5. Change "Entire Document" to "Sheet1" (or your sheet name).
// 6. Change "Web page" to "Comma-separated values (.csv)".
// 7. Click "Publish", copy the link generated, and paste it inside the quotes below:
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4plpSqGFqF_-0qW_aEsJl_R_e3YAKr5lc2noQrEdJii-iJnJmMiFjGyfB9e-t7cYQmOmX53i2l37A/pub?output=csv"; 
// Example: const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR..../pub?output=csv";
// ==================================================================================

interface Event {
  id: string | number;
  day: string;
  date: string;
  title: string;
  time: string;
  category: string;
  desc: string;
}

const DEMO_EVENTS: Event[] = [
  {
    id: 1,
    day: "SUN",
    date: "Nov 17",
    title: "Packers vs. Bears",
    time: "12:00 PM",
    category: "Watch Party",
    desc: "The oldest rivalry in football! Free shots for every Packers touchdown."
  },
  {
    id: 2,
    day: "WED",
    date: "Nov 20",
    title: "Meat Raffle",
    time: "6:00 PM",
    category: "Community",
    desc: "Win big and stock your freezer! Proceeds benefit the local fire department."
  },
  {
    id: 3,
    day: "FRI",
    date: "Nov 22",
    title: "Friday Fish Fry",
    time: "4:00 PM - 9:00 PM",
    category: "Dining Special",
    desc: "Our famous beer-battered cod and perch served with all the fixings. Reservations recommended for groups of 6+."
  },
  {
    id: 4,
    day: "SAT",
    date: "Nov 30",
    title: "Live Music: Country Road",
    time: "8:00 PM",
    category: "Live Music",
    desc: "Local acoustic duo playing classic country hits."
  }
];

const GloversEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(DEMO_EVENTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (GOOGLE_SHEET_URL.length > 0) {
      setLoading(true);
      fetch(GOOGLE_SHEET_URL)
        .then(response => response.text())
        .then(csvText => {
          try {
            const rows = csvText.split('\n');
            // Assuming Row 0 is headers, start from Row 1
            const parsedEvents = rows.slice(1).map((row, index): Event | null => {
              // Split by comma, handling quotes
              const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(s => s.trim().replace(/^"|"$/g, ''));
              
              // Ensure we have enough columns (at least 4 for a valid event)
              if (cols.length < 4) return null;

              return {
                id: `sheet-${index}`,
                day: cols[0] || "",
                date: cols[1] || "",
                title: cols[2] || "",
                time: cols[3] || "TBD",
                category: cols[4] || "",
                desc: cols[5] || ""
              };
            }).filter((event): event is Event => event !== null);

            if (parsedEvents.length > 0) {
              setEvents(parsedEvents);
            }
          } catch (error) {
            console.error("Error parsing Google Sheet CSV:", error);
          } finally {
            setLoading(false);
          }
        })
        .catch(error => {
          console.error("Error fetching Google Sheet:", error);
          setLoading(false);
        });
    }
  }, []);

  const getEventIcon = (category: string) => {
    const lowerCat = category.toLowerCase();
    if (lowerCat.includes('music') || lowerCat.includes('band')) return <Music className="w-64 h-64 text-glover-gold" />;
    if (lowerCat.includes('game') || lowerCat.includes('sport') || lowerCat.includes('party')) return <Trophy className="w-64 h-64 text-glover-gold" />;
    if (lowerCat.includes('raffle') || lowerCat.includes('community')) return <Ticket className="w-64 h-64 text-glover-gold" />;
    return <Calendar className="w-64 h-64 text-glover-gold" />;
  };

  return (
    <section className="pt-32 pb-24 bg-[#1a1d21] min-h-screen relative">
       {/* Decorative Elements */}
       <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#0f172a] to-[#1a1d21]"></div>
       
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-glover-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            What's Happening
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">
            Upcoming Events
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
             From game days to community fundraisers, there's always something going on at Glovers.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-glover-gold animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {events.map((event) => (
              <div 
                key={event.id}
                className="group bg-[#23272e] border-l-4 border-glover-gold hover:bg-[#2a2f38] transition-colors p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 md:gap-8 relative overflow-hidden shadow-lg rounded-r-sm"
              >
                {/* Bg Icon */}
                <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
                   {getEventIcon(event.category)}
                </div>

                {/* Date Box */}
                <div className="flex-shrink-0 w-full md:w-24 h-20 md:h-24 bg-[#15171a] border border-glover-gold/20 flex flex-row md:flex-col items-center justify-center text-center rounded-sm gap-3 md:gap-0 px-4 md:px-0">
                  <span className="text-glover-gold text-sm font-bold uppercase tracking-wider">{event.day}</span>
                  <span className="text-white font-display text-2xl md:text-3xl font-bold leading-none md:mt-1">{event.date}</span>
                </div>

                {/* Details */}
                <div className="flex-grow z-10 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h3 className="font-display text-2xl md:text-3xl text-white font-bold uppercase group-hover:text-glover-gold transition-colors">
                      {event.title}
                      </h3>
                      {event.category && (
                        <span className="inline-block px-3 py-1 bg-glover-gold/10 text-glover-gold text-xs font-bold uppercase rounded-sm border border-glover-gold/20">
                            {event.category}
                        </span>
                      )}
                  </div>
                  
                  {event.desc && (
                    <p className="text-gray-400 text-sm mb-4 max-w-2xl leading-relaxed">
                      {event.desc}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-white font-medium">
                          <Clock className="w-4 h-4 text-glover-gold" /> {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                          <MapPin className="w-4 h-4" /> Glovers Bar & Grill
                      </div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex-shrink-0 mt-2 md:mt-0 z-10 self-start md:self-center">
                   <button className="px-6 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-glover-gold hover:text-black hover:border-glover-gold transition-all bg-transparent rounded-sm">
                      Details
                   </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center bg-[#23272e] p-8 border border-white/5 rounded-sm">
          <p className="text-gray-400 text-sm">
            Hosting an event? <a href="tel:9208263021" className="text-glover-gold hover:text-white underline">Call us</a> to reserve space for your party or gathering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GloversEvents;