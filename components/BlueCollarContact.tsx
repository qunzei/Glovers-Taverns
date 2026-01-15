import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const BlueCollarContact: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#0b1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-bluecollar-blue text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight italic">
            Find Us on Broadway
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Map */}
          <div className="h-[400px] w-full rounded-sm overflow-hidden shadow-2xl border border-white/10 relative">
             <iframe 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)'}} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.3846664988775!2d-88.02450592383995!3d44.5015056710743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802fb1b8a514d31%3A0xe534125712128889!2s1313%20S%20Broadway%2C%20Green%20Bay%2C%20WI%2054304!5e0!3m2!1sen!2sus!4v1709923456789!5m2!1sen!2sus">
              </iframe>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-10">
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-transparent border border-bluecollar-blue rounded-sm flex items-center justify-center flex-shrink-0 text-bluecollar-blue">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white font-bold mb-1 uppercase">Location</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  1313 S Broadway<br />
                  Green Bay, WI 54304
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-transparent border border-bluecollar-blue rounded-sm flex items-center justify-center flex-shrink-0 text-bluecollar-blue">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white font-bold mb-1 uppercase">Phone</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <a href="tel:9207705014" className="hover:text-bluecollar-blue transition-colors">(920) 770-5014</a>
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-transparent border border-bluecollar-blue rounded-sm flex items-center justify-center flex-shrink-0 text-bluecollar-blue">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white font-bold mb-1 uppercase">Hours</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li className="flex justify-between w-48"><span>Mon - Thu</span> <span>10am - 2am</span></li>
                  <li className="flex justify-between w-48 text-white font-medium"><span>Fri - Sat</span> <span>6am - 2:30am</span></li>
                  <li className="flex justify-between w-48 text-white font-medium"><span>Sunday</span> <span>6am - 2am</span></li>
                </ul>
                <p className="text-bluecollar-blue text-xs mt-3 font-bold uppercase tracking-wider">Breakfast served weekends starting at 6am!</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BlueCollarContact;