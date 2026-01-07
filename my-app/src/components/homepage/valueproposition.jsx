export default function ValueProposition() {
  return (
    // Reduced padding: py-12 lg:py-20 (was py-20 lg:py-32)
    // Removed min-h-[60vh] if you want it even tighter based on content height
    <section className="w-full flex items-center justify-center bg-stone-50 px-6 md:px-12 py-4 lg:py-10 border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Tagline */}
        <span className="text-[#b65c3a] uppercase tracking-[0.25em] text-xs font-semibold mb-6">
          Moments. Meals. Memories.
        </span>

        {/* Main Title */}
        <h2 className="font-serif text-4xl md:text-6xl font-medium text-stone-900 leading-tight mb-8">
          Authentic Maharashtrian Cuisine, <br />
          <span className="italic text-[#b65c3a]/90">
            Served with Love & creating memories.
          </span>
        </h2>

        {/* Elegant Divider */}
        <div className="flex items-center justify-center w-full gap-4 mb-10 opacity-70">
          <div className="h-[1px] w-16 bg-[#b65c3a]"></div>
          <span className="text-[#b65c3a] text-lg">◆</span>
          <div className="h-[1px] w-16 bg-[#b65c3a]"></div>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light max-w-4xl mx-auto">
          Located in the heart of Sanpada, Kshan brings you the true taste of the coast. From our signature <span className="text-stone-800 font-normal">Seafood</span> to comforting<span className="text-stone-800 font-normal"> Thalis </span>and traditional <span className="text-stone-800 font-normal">Modak</span>, every dish is a tribute to tradition, authentic spices, sweets and the warmth of home-style cooking.
        </p>

      </div>
    </section>
  );
}
