import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Music, Trophy, Loader2 } from 'lucide-react';

// ==================================================================================
// INSTRUCTIONS FOR UPDATING THE CALENDAR
// ==================================================================================
// 1. Create a Google Sheet.
// 2. In the first row (headers), add these EXACT columns:
//    Day, Date, Event Name, Time, Category, Description
// 3. Fill in your events below the headers.
//    - For "Category" (Column E): 
//      Type "Game" to make it YELLOW. 
//      Type "Music" to make it WHITE/GREY.
// 4. Go to "File" > "Share" > "Publish to web".
// 5. Change "Entire Document" to "Sheet1" (or your sheet name).
// 6. Change "Web page" to "Comma-separated values (.csv)".
// 7. Click "Publish", copy the link generated, and paste it inside the quotes below:
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9_11fY-YI_YzWzB_j5fVwFg3C8EeF4QZRbhI-YoMfJjAQgpD-JnsqdWM1l8ehoRUvMEagerdPcwCg/pub?output=csv"; 
// Example: const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR..../pub?output=csv";
// ==================================================================================

interface Event {
  id: string | number;
  day: string;
  date: string;
  title: string;
  time: string;
  desc: string;
  type: string;
}

const DEMO_EVENTS: Event[] = [
  {
    id: 1,
    day: "THU",
    date: "Weekly",
    title: "Karaoke Night",
    time: "8:00 PM - Close",
    desc: "Take the stage and sing your favorites.",
    type: "Music"
  },
  {
    id: 2,
    day: "SUN",
    date: "Oct 27",
    title: "Packers vs. Jaguars",
    time: "12:00 PM",
    desc: "Watch Party! Free shots for every Packers touchdown.",
    type: "Game"
  },
  {
    id: 3,
    day: "SAT",
    date: "Nov 02",
    title: "Live Music: The 4th Quarter",
    time: "9:00 PM",
    desc: "Local rock cover band playing 80s and 90s hits.",
    type: "Music"
  },
  {
    id: 4,
    day: "SUN",
    date: "Nov 03",
    title: "Packers vs. Lions",
    time: "3:25 PM",
    desc: "The big rivalry game. Drink specials all afternoon.",
    type: "Game"
  }
];

const PackerEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(DEMO_EVENTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
                type: cols[4] || "General",
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

  // Helper to determine styles based on the Category/Type column
  const getEventTheme = (type: string) => {
    const lowerType = type.toLowerCase();
    const isGame = lowerType.includes('game') || lowerType.includes('sport') || lowerType.includes('packers') || lowerType.includes('football');
    
    if (isGame) {
      return {
        borderColor: 'border-packer-gold',
        textColor: 'text-packer-gold',
        tagBg: 'bg-black/20',
        tagBorder: 'border-packer-gold/20',
        tagText: 'text-packer-gold',
        icon: <Trophy className="w-48 h-48 text-packer-gold" />
      };
    }
    
    // Default to Music/Other style (White/Grey)
    return {
      borderColor: 'border-white/20',
      textColor: 'text-white',
      tagBg: 'bg-white/10',
      tagBorder: 'border-white/20',
      tagText: 'text-white',
      icon: <Music className="w-48 h-48 text-white/20" />
    };
  };

  return (
    <section id="events" className="py-24 bg-[#182b26] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-packer-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              Mark Your Calendar
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white uppercase tracking-wide">
              Upcoming Events
            </h2>
          </div>
          <div className="flex gap-4">
             {/* Legend */}
             <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-packer-gold"></span> Game Day
             </div>
             <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-white"></span> Live Music
             </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-10 h-10 text-packer-gold animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {events.map((event) => {
              const theme = getEventTheme(event.type);
              
              return (
                <div 
                  key={event.id}
                  className={`group bg-[#203731] border-l-4 ${theme.borderColor} hover:bg-[#2a453d] transition-colors p-6 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden`}
                >
                  {/* Event Type Icon BG */}
                  <div className="absolute right-0 top-0 opacity-5 md:opacity-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
                    {theme.icon}
                  </div>

                  {/* Date Box */}
                  <div className="flex-shrink-0 w-20 h-20 bg-[#15201d] border border-white/10 flex flex-col items-center justify-center text-center rounded-sm">
                    <span className={`${theme.textColor} text-xs font-bold uppercase tracking-wider`}>{event.day}</span>
                    <span className="text-white font-display text-xl font-bold leading-none mt-1">{event.date}</span>
                  </div>

                  {/* Details */}
                  <div className="flex-grow z-10 w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`font-display text-2xl text-white font-bold uppercase group-hover:${theme.textColor} transition-colors`}>
                        {event.title}
                      </h3>
                      {event.type && (
                          <span className={`hidden sm:inline-block px-2 py-0.5 ${theme.tagBg} ${theme.tagText} text-[10px] font-bold uppercase rounded-sm border ${theme.tagBorder}`}>
                              {event.type}
                          </span>
                      )}
                    </div>
                    
                    {event.desc && (
                      <p className="text-gray-300 text-sm mb-3 max-w-xl">
                        {event.desc}
                      </p>
                    )}
                    <div className={`flex items-center gap-2 ${theme.textColor} text-xs font-bold uppercase tracking-widest`}>
                      <Clock className="w-4 h-4" /> {event.time}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm italic">
            * Events subject to change. Check our Facebook page for the latest updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackerEvents;