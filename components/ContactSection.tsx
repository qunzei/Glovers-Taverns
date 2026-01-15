import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#1f2329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-glover-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Stop By
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white uppercase tracking-wide">
            Find Us In Abrams
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Map Side */}
          <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group">
             {/* Using grayscale filter for the map to match the dark theme better */}
             <iframe 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)'}} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.3197771788734!2d-88.06458292383827!3d44.78221507107062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802e3077705128d%3A0xc06e3006243282c6!2sGlover&#39;s%20Bar%20%26%20Grill!5e0!3m2!1sen!2sus!4v1709923456789!5m2!1sen!2sus">
              </iframe>
              <div className="absolute top-4 left-4 bg-white p-3 rounded shadow-md text-gray-800 text-xs font-sans max-w-[150px]">
                <span className="font-bold block mb-1">View larger map</span>
              </div>
          </div>

          {/* Info Side */}
          <div className="space-y-10">
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-glover-gold rounded-lg flex items-center justify-center flex-shrink-0 text-glover-dark">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white font-medium mb-1">Address</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  5891 Main Street<br />
                  Abrams, WI 54101
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-glover-gold rounded-lg flex items-center justify-center flex-shrink-0 text-glover-dark">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white font-medium mb-1">Phone</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  (920) 826-3021
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-glover-gold rounded-lg flex items-center justify-center flex-shrink-0 text-glover-dark">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white font-medium mb-1">Hours</h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <p>Monday - Thursday: 11am - 10pm</p>
                  <p>Friday - Saturday: 11am - 12am</p>
                  <p>Sunday: 11am - 9pm</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-glover-gold">
              <span className="font-bold">Friday Fish Fry:</span> Join us every Friday for our famous Wisconsin fish fry tradition!
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;