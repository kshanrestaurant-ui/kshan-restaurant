"use client";
import { useState } from "react";

export default function ContactPage() {
  return (
    <main className="bg-stone-50 min-h-screen text-stone-900 flex flex-col">
      {/* 1. Header Section */}
      <section className="relative pt-32 pb-20 px-6 text-center bg-stone-900 text-white">
        <span className="text-[#b65c3a] uppercase tracking-[0.2em] text-sm font-semibold mb-4 block animate-fade-in">
          Get in Touch
        </span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
          Contact Us
        </h1>
        <p className="text-stone-400 max-w-xl mx-auto font-light text-lg">
          We are at your service for private events, press, and general inquiries.
        </p>
      </section>

      {/* 2. Main Content - Split Layout */}
      <section className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Info Card */}
          <div className="bg-stone-900 text-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[500px]">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-[60px]"></div>

            <h3 className="text-3xl font-serif font-bold mb-12 relative z-10">
              Direct Contact
            </h3>

            <div className="space-y-12 relative z-10">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-[#b65c3a] text-2xl flex-shrink-0 border border-white/5">
                  📍
                </div>
                <div>
                  <p className="font-bold text-lg mb-2">Location</p>
                  <p className="text-stone-400 font-light text-base leading-relaxed">
                  Shop no 1, Bhoomi Paradise, near Juinagar Railway Station, Sector 11, Sanpada, Navi Mumbai, Maharashtra 400705
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-[#b65c3a] text-2xl flex-shrink-0 border border-white/5">
                  📞
                </div>
                <div>
                  <p className="font-bold text-lg mb-2">Phone</p>
                  <p className="text-stone-400 font-light text-base mb-1">
                    +91 93265 40761
                  </p>
                  <p className="text-stone-500 text-xs uppercase tracking-wide">
                    Mon-Sun: 10am - 10pm
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-[#b65c3a] text-2xl flex-shrink-0 border border-white/5">
                  ✉️
                </div>
                <div>
                  <p className="font-bold text-lg mb-2">Email</p>
                  <a
                    href="mailto:kshan.restaurant@gmail.com"
                    className="text-stone-400 font-light text-base hover:text-[#b65c3a] transition-colors"
                  >
                    kshan.restaurant@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Styled Map (Dark Mode via CSS) */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-200 h-full min-h-[500px] relative group">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1659975502707!2d73.01193537466469!3d19.05643785258738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c12b3ec08c17%3A0x971243d190acfb27!2sKshan%20Restaurant!5e0!3m2!1sen!2sin!4v1766927965435!5m2!1sen!2sin"
              // The 'grayscale' and 'invert' filters create a fake Dark Mode map
              className="w-full h-full 
              filter grayscale contrast-125 invert 
              opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            ></iframe>
            
            {/* Overlay Label */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg">
              <p className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">Get Directions</p>
              <a href="https://maps.app.goo.gl/HcdboKJ65BGJAX2X8" className="text-stone-900 font-serif font-bold flex items-center gap-2 hover:text-[#b65c3a] transition-colors">
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. New Section: Frequently Asked Questions */}
      {/* <section className="bg-white py-20 px-6 border-t border-stone-100">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-12 text-center">Common Inquiries</h2>
           
           <div className="grid md:grid-cols-2 gap-8">
              <FaqItem 
                question="Do you host private events?" 
                answer="Absolutely. We offer exclusive buyouts for up to 150 guests. Please contact our events team at least 2 weeks in advance."
              />
              <FaqItem 
                question="Is there a dress code?" 
                answer="We encourage smart casual attire. We kindly ask guests to refrain from wearing beachwear or athletic apparel."
              />
              <FaqItem 
                question="Parking availability?" 
                answer="Valet parking is available every evening starting at 6pm. There is also a public garage located on 4th Avenue."
              />
              <FaqItem 
                question="Dietary restrictions?" 
                answer="Our kitchen is happy to accommodate vegetarian, vegan, and gluten-free requests with prior notice."
              />
           </div>
        </div>
      </section> */}
    </main>
  );
}

// Simple Helper Component for FAQ
function FaqItem({ question, answer }) {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-bold text-stone-800">{question}</h4>
      <p className="text-stone-500 leading-relaxed font-light">{answer}</p>
    </div>
  );
}
