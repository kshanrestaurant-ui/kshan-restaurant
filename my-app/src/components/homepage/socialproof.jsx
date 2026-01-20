"use client";

import { useState } from "react";
import Image from "next/image";

export default function SocialProof() {
  // =========================================
  // 1. INSTAGRAM DATA (Interactive Stack)
  // =========================================
  // Edit these items to change the photos in the interactive stack.
  const [instaCards, setInstaCards] = useState([
    {
      id: 1,
      src: "/social/insta/siddharth.jpg",      // Replace with your image path
      likes: "35k+",                       // Editable like count
      caption: "Moments like these makes Kshan truly special ✨ Featuring Siddhartha Jadhav", // Editable caption
      type: "reel"                        // 'image' or 'reel' (changes the icon)
    },
    {
      id: 2,
      src: "/social/insta/popti.jpg",
      likes: "19k+",
      caption: "Popti 🍲🔥",
      type: "reel"
    },
    {
      id: 3,
      src: "/social/insta/modak.jpg",
      likes: "126",
      caption: "Just modak things✨",
      type: "reel"
    },
    {
      id: 4,
      src: "/social/insta/kolambi.jpg",
      likes: "287",
      caption: "Kshan cha khas Kolambi Bhat",
      type: "reel"
    },
    {
      id: 5,
      src: "/social/insta/solkadi.jpg",
      likes: "55",
      caption: "The perfect cool down companion with every bite.❤️",
      type: "reel"
    },
  ]);

  // Logic to rotate the stack (Move top card to bottom)
  const handleNextInsta = () => {
    setInstaCards((prev) => {
      const newCards = [...prev];
      const firstCard = newCards.shift();
      if (firstCard) newCards.push(firstCard);
      return newCards;
    });
  };

  // =========================================
  // 2. GOOGLE REVIEWS DATA (Screenshots)
  // =========================================
  // Add your Google Maps screenshots here.
  const googleReviews = [
    { id: 1, src: "social/review/first.png", alt: "Review regarding Popti Party" },
    { id: 2, src: "social/review/second.png", alt: "Review regarding Seafood Thali" },
    { id: 3, src: "social/review/third.png", alt: "Review regarding Ambiance" },
    { id: 4, src: "social/review/fourth.png", alt: "Review regarding Service" },
    { id: 5, src: "social/review/fifth.png", alt: "Review regarding Solkadhi" },
    { id: 6, src: "social/review/sixth.png", alt: "Review regarding Family Dinner" },
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* ==========================
          SECTION 1: GOOGLE REVIEWS WALL
          (Dark Mode, Masonry, Tilted Cards)
      ========================== */}
      <section className="bg-stone-950 py-24 px-4 md:px-8 relative overflow-hidden">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-stone-900/80 border border-stone-800 rounded-full px-6 py-2 mb-8 backdrop-blur-sm shadow-xl">
              <span className="text-blue-500 text-lg font-bold">G</span>
              <span className="text-stone-300 text-xs font-bold tracking-widest uppercase">
                Rated 4.8/5 on Google Maps
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-white font-medium tracking-tight mb-6">
              Our Digital <span className="italic text-amber-500">Wall of Love</span>
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto text-lg">
              Don't just take our word for it. Here are unedited screenshots from our amazing community.
            </p>
          </div>

          {/* Masonry Grid with Creative Tilt */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 px-2">
            {googleReviews.map((review, index) => (
              <div 
                key={review.id}
                className={`
                  relative group break-inside-avoid
                  transform transition-all duration-500 ease-out
                  hover:z-20 hover:scale-105 hover:rotate-0
                  ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} 
                  ${index % 3 === 0 ? 'translate-y-4' : 'translate-y-0'}
                `}
              >
                {/* Glow Behind Card on Hover */}
                <div className="absolute inset-0 bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-3xl" />

                {/* The Screenshot Card */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-stone-800/50 bg-white">
                  {/* Glass Sheen Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none z-10" />
                  
                  <img
                    src={review.src}
                    alt={review.alt}
                    width={600}
                    height={400} 
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Decorative "Tape" Effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-stone-800/90 shadow-sm transform -rotate-2 z-20 backdrop-blur-md border border-stone-700/50 rounded-sm opacity-80" />
              </div>
            ))}
          </div>

          {/* 'Show More' Button */}
          <div className="mt-20 text-center">
            <a
              href="https://maps.app.goo.gl/8LqtaLPJeMstPi646" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-amber-500 text-amber-500 pb-1 hover:text-amber-400 hover:border-amber-400 transition-colors text-sm font-bold tracking-widest uppercase"
            >
              Read 150+ more reviews on Google ↗
            </a>
          </div>

        </div>
      </section>

      {/* ==========================
          SECTION 2: INSTAGRAM STACK
          (Light Mode, Interactive 3D Stack)
      ========================== */}
      <section className="bg-stone-50 py-24 relative overflow-hidden border-t border-stone-200">
        
        {/* Decorative Background Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* LEFT: Text Content */}
          <div className="text-center lg:text-left">
             <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight mb-6">
               From kitchen to<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-pink-600">
                 Kamera
               </span>
             </h2>
             
             <p className="text-stone-500 text-lg mb-8 max-w-md mx-auto lg:mx-0">
               Join 2k+ foodies sharing their #KshanMoments. Tag us to get featured on our wall of fame!
             </p>

             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <a 
                 href="https://instagram.com/kshan.restaurant" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-8 py-4 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-lg"
               >
                 Follow @kshan.restaurant
               </a>
               
             </div>
          </div>

          {/* RIGHT: Interactive 3D Card Stack */}
          <div className="relative h-[500px] flex items-center justify-center perspective-1000">
            
            {/* Stack Container Area */}
            <div 
               className="relative w-[320px] h-[420px] cursor-pointer"
               onClick={handleNextInsta}
               title="Click to see next photo"
            >
              {instaCards.map((card, index) => {
                // Stack Logic: Index 0 is top, Index 4 is bottom
                const isTop = index === 0;
                const scale = 1 - index * 0.05; // Creates depth: 1, 0.95, 0.90...
                const translateY = index * 15;  // Creates vertical stack: 0px, 15px...
                const zIndex = instaCards.length - index; // Ensures correct layering
                const opacity = 1 - index * 0.15; // Fades out the cards at the back

                return (
                  <div
                    key={card.id}
                    className={`
                      absolute top-0 left-0 w-full h-full rounded-3xl bg-white shadow-2xl p-3 border border-stone-100
                      transition-all duration-500 ease-out select-none
                      ${isTop ? 'hover:-translate-y-4 hover:rotate-1 cursor-pointer' : ''}
                    `}
                    style={{
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: opacity,
                    }}
                  >
                    {/* Card Image Container */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-stone-100">
                      <Image
                        src={card.src}
                        alt={card.caption}
                        fill
                        className="object-cover pointer-events-none" // Prevents image drag
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      
                      {/* Dark Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                      {/* Top Right Icon (Reel vs Image) */}
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/10 text-white shadow-sm">
                        {card.type === 'reel' ? (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 4h4v16h-4V4zm-6 16h4V4h-4v16zm-6 0h4V4H4v16z"/></svg>
                        ) : (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                        )}
                      </div>

                      {/* Bottom Info: Likes & Caption */}
                      <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform">
                        <div className="flex items-center gap-2 text-xs font-bold mb-2 text-amber-400">
                           ❤️ {card.likes} Likes
                        </div>
                        <p className="text-sm font-medium leading-relaxed line-clamp-2">
                          {card.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Desktop Hint: "Click to Next" */}
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce opacity-50">
                 <span className="text-stone-400 text-xs font-bold uppercase tracking-widest rotate-90 origin-center whitespace-nowrap">
                   Click for Next
                 </span>
              </div>

            </div>
          </div>
          <button 
                  onClick={handleNextInsta}
                  className="px-8 py-4 bg-white border border-stone-200 text-stone-900 font-bold rounded-xl hover:bg-stone-50 transition-all shadow-sm flex items-center justify-center gap-2 lg:hidden"
               >
                 Next Photo →
          </button>
        </div>
      </section>

    </div>
  );
}
