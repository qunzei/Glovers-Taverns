import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Music, MapPin, Loader2 } from 'lucide-react';

// ==================================================================================
// INSTRUCTIONS FOR UPDATING THE CALENDAR (NO CODING REQUIRED)
// ==================================================================================
// 1. Create a Google Sheet.
// 2. In the first row (headers), add these EXACT columns:
//    Day, Date, Band, Time, Genre, Description
// 3. Fill in your shows below the headers.
// 4. Go to "File" > "Share" > "Publish to web".
// 5. Change "Entire Document" to "Sheet1" (or your sheet name).
// 6. Change "Web page" to "Comma-separated values (.csv)".
// 7. Click "Publish", copy the link generated, and paste it inside the quotes below:
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vStCjLCpvVovkOdSBReMqXNkHx3i9SBS1zfI1W66cNElu6hlN9nx9dA38fXIh0xxU_zw_BfVp9aQj8z/pub?output=csv"; 
// Example: const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR..../pub?output=csv";
// ==================================================================================

interface Show {
  id: string | number;
  day: string;
  date: string;
  band: string;
  time: string;
  genre: string;
  desc: string;
}

const DEMO_SHOWS: Show[] = [
  {
    id: 1,
    day: "SAT",
    date: "Nov 16",
    band: "The Hook Up",
    time: "8:00 PM",
    genre: "Classic Rock / Country",
    desc: "Local favorites playing all the hits you know and love. Great energy and great times."
  },
  {
    id: 2,
    day: "FRI",
    date: "Nov 22",
    band: "Acoustic Soul",
    time: "7:00 PM",
    genre: "Acoustic Duo",
    desc: "Unwind on Friday night with smooth acoustic covers of pop and rock classics."
  },
  {
    id: 3,
    day: "WED",
    date: "Nov 27",
    band: "Thanksgiving Eve Bash w/ DJ Mike",
    time: "9:00 PM",
    genre: "Party Hits",
    desc: "The biggest bar night of the year! DJ Mike spinning tunes until close."
  },
  {
    id: 4,
    day: "SAT",
    date: "Dec 07",
    band: "Road Trip (Duo)",
    time: "8:30 PM",
    genre: "Rock Cover",
    desc: "Members of the famous Wisconsin band stripping it down for an intimate show."
  }
];

const BlueCollarUpcomingShows: React.FC = () => {
  const [shows, setShows] = useState<Show[]>(DEMO_SHOWS);
  const [loading, setLoading] = useState(false);
  const [usingSheet, setUsingSheet] = useState(false);

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
            const parsedShows = rows.slice(1).map((row, index): Show | null => {
              // Split by comma, handling quotes
              const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(s => s.trim().replace(/^"|"$/g, ''));
              
              // Ensure we have enough columns (at least 4 for a valid show)
              if (cols.length < 4) return null;

              return {
                id: `sheet-${index}`,
                day: cols[0] || "",
                date: cols[1] || "",
                band: cols[2] || "",
                time: cols[3] || "8:00 PM",
                genre: cols[4] || "",
                desc: cols[5] || ""
              };
            }).filter((show): show is Show => show !== null);

            if (parsedShows.length > 0) {
              setShows(parsedShows);
              setUsingSheet(true);
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

  return (
    <section className="pt-32 pb-24 bg-[#0b1120] min-h-screen relative">
       {/* Decorative Elements */}
       <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#0f151f] to-[#0b1120]"></div>
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(#4dabe3 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-bluecollar-blue text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Live Music Calendar
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tight italic">
            Upcoming Shows
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
             Green Bay's best local talent, live on the Blue Collar stage. No cover charge unless noted!
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-bluecollar-blue animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {shows.map((show) => (
              <div 
                key={show.id}
                className="group bg-[#121926] border-l-4 border-bluecollar-blue hover:bg-[#161f2e] transition-colors p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 md:gap-8 relative overflow-hidden shadow-lg rounded-r-sm"
              >
                {/* Bg Icon */}
                <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
                   <Music className="w-64 h-64 text-bluecollar-blue" />
                </div>

                {/* Date Box */}
                <div className="flex-shrink-0 w-full md:w-24 h-20 md:h-24 bg-[#0b1120] border border-bluecollar-blue/20 flex flex-row md:flex-col items-center justify-center text-center rounded-sm gap-3 md:gap-0 px-4 md:px-0">
                  <span className="text-bluecollar-blue text-sm font-bold uppercase tracking-wider">{show.day}</span>
                  <span className="text-white font-display text-2xl md:text-3xl font-bold leading-none md:mt-1">{show.date}</span>
                </div>

                {/* Details */}
                <div className="flex-grow z-10 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h3 className="font-display text-2xl md:text-3xl text-white font-bold uppercase group-hover:text-bluecollar-blue transition-colors">
                      {show.band}
                      </h3>
                      {show.genre && (
                        <span className="inline-block px-3 py-1 bg-bluecollar-blue/10 text-bluecollar-blue text-xs font-bold uppercase rounded-sm border border-bluecollar-blue/20">
                            {show.genre}
                        </span>
                      )}
                  </div>
                  
                  {show.desc && (
                    <p className="text-gray-400 text-sm mb-4 max-w-2xl leading-relaxed">
                      {show.desc}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-white font-medium">
                          <Clock className="w-4 h-4 text-bluecollar-blue" /> {show.time}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                          <MapPin className="w-4 h-4" /> Blue Collar Stage
                      </div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex-shrink-0 mt-2 md:mt-0 z-10 self-start md:self-center">
                   <button className="px-6 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-bluecollar-blue hover:text-black hover:border-bluecollar-blue transition-all bg-transparent rounded-sm">
                      Details
                   </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center bg-[#121926] p-8 border border-white/5 rounded-sm">
          <p className="text-gray-400 text-sm">
            Interested in playing at Blue Collar? <a href="mailto:kglovertaverns@aol.com" className="text-bluecollar-blue hover:text-white underline">Contact us</a> for booking inquiries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlueCollarUpcomingShows;