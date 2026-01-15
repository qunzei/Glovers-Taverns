import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const PackerContact: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#15201d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-packer-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white uppercase tracking-wide">
            Stop By The Lounge
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Map Side */}
          <div className="h-[400px] w-full rounded-sm overflow-hidden shadow-2xl border border-packer-gold/20 relative group">
             <iframe 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)'}} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.3846664988775!2d-88.02450592383995!3d44.5015056710743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802fb1b8a514d31%3A0xe534125712128889!2s1342%20S%20Broadway%2C%20Green%20Bay%2C%20WI%2054304!5e0!3m2!1sen!2sus!4v1709923456789!5m2!1sen!2sus">
              </iframe>
          </div>

          {/* Info Side */}
          <div className="space-y-10">
            
            <div className="flex gap-6 group">
              <div className="w-12 h-12 bg-packer-green border border-packer-gold/20 rounded-sm flex items-center justify-center flex-shrink-0 text-packer-gold group-hover:bg-packer-gold group-hover:text-packer-dark transition-colors">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white font-medium mb-1 uppercase">Address</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  1342 S Broadway<br />
                  Green Bay, WI 54304
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="w-12 h-12 bg-packer-green border border-packer-gold/20 rounded-sm flex items-center justify-center flex-shrink-0 text-packer-gold group-hover:bg-packer-gold group-hover:text-packer-dark transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white font-medium mb-1 uppercase">Phone</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <a href="tel:9205449450" className="hover:text-packer-gold transition-colors">(920) 544-9450</a>
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="w-12 h-12 bg-packer-green border border-packer-gold/20 rounded-sm flex items-center justify-center flex-shrink-0 text-packer-gold group-hover:bg-packer-gold group-hover:text-packer-dark transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white font-medium mb-1 uppercase">Email</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <a href="mailto:kglovertaverns@aol.com" className="hover:text-packer-gold transition-colors">kglovertaverns@aol.com</a>
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-packer-gold uppercase tracking-widest">
              <span className="font-bold">Open Daily:</span> Come for the game, stay for the fun.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PackerContact;