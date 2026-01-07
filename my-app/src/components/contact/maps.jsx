import React from "react";

export default function MapSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-stone-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content: Info & Context */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-amber-500 uppercase tracking-[0.25em] text-sm font-semibold">
                Visit Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                A Destination Worth <br />
                <span className="italic text-white/80">The Journey</span>
              </h2>
              <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto lg:mx-0 mt-6"></div>
            </div>

            <p className="text-stone-300 text-lg leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
              Nestled in the heart of the city, our location offers a sanctuary from the bustle. 
              Whether you’re exploring the area or joining us for a special evening, 
              we are ready to welcome you.
            </p>

            {/* Quick Details Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6 text-left">
              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-colors">
                <h4 className="text-amber-400 font-serif text-lg mb-2">Location</h4>
                <p className="text-stone-300 text-sm leading-relaxed">
                  123 Culinary Avenue,<br />
                  Metropolis District,<br />
                  NY 10012
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-colors">
                <h4 className="text-amber-400 font-serif text-lg mb-2">Hours</h4>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Mon-Sun: 5pm - 11pm<br />
                  Happy Hour: 4pm - 6pm<br />
                  <span className="text-stone-500 text-xs mt-1 block">*Reservations Recommended</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Content: The Map */}
          <div className="w-full order-1 lg:order-2">
            <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-stone-800 group">
              {/* Google Map Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867495.57970536!2d74.1275402681546!3d18.8047856661642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc41e9c9cd6f9%3A0x1b2f22924be04fb6!2sMaharashtra!5e0!3m2!1sen!2sin!4v1764548505569!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kshan Location Map"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              ></iframe>
              
              {/* Overlay Label (Optional) */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-stone-900 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Open Now
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
