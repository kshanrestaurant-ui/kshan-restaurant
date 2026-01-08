import Image from "next/image";

const menuItems = [
  {
    title: "Mutton Thali",
    description: "A fiery Maharashtrian feast featuring tender mutton sukka, mutton kheema,  authentic rassa, and soft bhakri.",
    image: "/home/mutton-thali.jpeg", 
  },
  {
    title: "Surmai Biryani",
    description: "A coastal delicacy—fresh Kingfish marinated in spices, layered with aromatic basmati rice.",
    image: "/home/surmai-biryani.jpeg", 
  },
  {
    title: "Ukadiche Modak",
    description: "Handcrafted steamed Modak stuffed with sweet coconut, jaggery, and cardamom, served warm with pure ghee.",
    image: "/home/modak.jpeg", 
  },
  {
    title: "Anapurna Thali",
    description: "A divine vegetarian spread featuring seasonal vegetables, dal, rice, solkadhi, and traditional sweets.",
    image: "/home/anapurna-thali.jpeg", 
  },
  {
    title: "Masvadi Thali",
    description: "A rustic specialty—spicy stuffed gram flour rolls served with bhakri.",
    image: "/home/masvadi.jpeg", 
  },
];

export default function MenuHighlights() {
  return (
    <section className="w-full py-4 lg:py-16 px-6 md:px-12 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#b65c3a] uppercase tracking-[0.2em] text-sm font-semibold">
            Taste of the Maharashtra
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-stone-900">
            Kshan Specials
          </h2>
          <div className="w-24 h-1 bg-[#b65c3a] mx-auto rounded-full mt-6 mb-6"></div>

        </div>

        {/* Menu Grid - Changed to Flex Wrap for centering last row */}
        <div className="flex flex-wrap justify-center gap-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.7rem)]"
            >
              {/* Image Container */}
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 text-center relative">
                 {/* Decorative Icon */}
                 <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-stone-100 z-10 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#b65c3a] text-xl">✦</span>
                </div>

                <h3 className="text-2xl font-serif font-medium text-stone-900 mb-3 mt-4 group-hover:text-[#b65c3a] transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm md:text-base mb-2 line-clamp-3 group-hover:text-stone-800 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <a
            href="/menu"
            className="inline-block px-10 py-4 border border-stone-900 text-stone-900 rounded-full font-semibold tracking-wide hover:bg-stone-900 hover:text-white transition-all duration-300 uppercase text-sm"
          >
            View Full Menu
          </a>
        </div>
        
      </div>
    </section>
  );
}
