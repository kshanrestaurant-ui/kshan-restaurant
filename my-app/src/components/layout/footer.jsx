import React from "react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-10 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Branding Section */}
        <div className="mb-16 border-b border-stone-800 pb-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Kshan<span className="text-[#b65c3a]">.</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed font-light">
              Moments turned into memories. Experience the authentic taste of Maharashtra
              with our signature coastal flavors and rustic specialties in the heart of Navi Mumbai.
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          
          {/* Explore */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4 font-light text-sm tracking-wide">
              <li>
                <a href="/menu" className="hover:text-[#b65c3a] transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#b65c3a] transition-colors">
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-4 font-light text-sm tracking-wide">
              
              <li className="flex items-center gap-4 whitespace-nowrap">
                <span className="w-16">Lunch</span>
                <span className="text-white">12:30 pm - 3:30 pm</span>
              </li>

              <li className="flex items-center gap-4 whitespace-nowrap">
                <span className="w-16">Dinner</span>
                <span className="text-white">7:30 pm - 11:30 pm</span>
              </li>

              {/* <li className="mt-4 text-xs text-stone-500 italic">
                Open All Days except Thu
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 font-light text-sm tracking-wide">
              
              <li className="flex items-start gap-3">
                <span className="text-[#b65c3a] mt-1">📍</span>
                <span>
                  Shop no 1, Bhoomi Paradise,<br />
                  near Juinagar Railway Station, Sector 11,<br />
                  Sanpada, Navi Mumbai, Maharashtra 400705
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-[#b65c3a]">📞</span>
                <a
                  href="tel:+919326540761"
                  className="hover:text-white transition"
                >
                  +91 93265 40761
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-[#b65c3a]">✉️</span>
                <a
                  href="mailto:kshan.restaurant@gmail.com"
                  className="hover:text-white transition"
                >
                  kshan.restaurant@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kshan.restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-max h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-[#b65c3a] hover:text-white transition-all duration-300 border border-stone-800"
              >
                <span className="text-sm p-2 font-bold">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Kshan Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-stone-300 transition">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
