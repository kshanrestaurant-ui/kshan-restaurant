// components/Hero.js
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-center overflow-hidden">
      
      {/* Background Image - Full Screen now, no margins */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/home/bg.jpeg"
          alt="Fine Dining"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <span className="text-[#b65c3a] font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-6 block animate-fade-in">
          Taste the Extraordinary
        </span>

        <h1 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 drop-shadow-2xl">
          Moments. Meals. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-[#b65c3a] italic">
            Memories.
          </span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Experience an unforgettable authentic Maharahstrain cuisine.
        </p>

        <a
          href="/menu"
          className="inline-block px-10 py-4 bg-[#b65c3a] hover:bg-amber-700 text-white rounded-full font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] transform hover:-translate-y-1"
        >
          EXPLORE MENU
        </a>
      </div>
    </section>
  );
}
