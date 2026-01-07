import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-stone-50 min-h-screen">

      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/home/bg.jpeg" 
          alt="Kshan Interior Ambiance"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-fade-in">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            The Soul of <br />
            <span className="italic text-amber-500">Maharashtra</span>
          </h1>
        </div>
      </section>

      {/* 2. The Narrative - Split Layout */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              Authentic Flavors, <br />
              Unforgettable Moments.
            </h2>
            <div className="w-20 h-1 bg-amber-500"></div>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Located in the heart of <strong>Sanpada, Navi Mumbai</strong>, Kshan began with a singular vision: to honor the robust, earthy flavors of Maharashtrian heritage while creating a modern dining sanctuary.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              From the coastal zest of our <strong>Seafood Thalis</strong> to the fiery depth of our <strong>Mutton Sukka</strong>, every dish is a tribute to the culinary traditions of the Konkan and Western Ghats. We believe that food is not just sustenance—it is a 'Kshan' (Moment) of pure joy shared with loved ones.
            </p>
            
            {/* Signature Block */}
            <div className="pt-6">
               <p className="font-serif text-xl italic text-stone-800">"चवीतला क्षण, आठवणीतला क्षण | A moment in taste, a memory for life"</p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
            <Image
              src="/about/about.jpg" 
              alt="Authentic Maharashtrian Thali"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </section>

      {/* 3. Philosophy Parallax Section */}
      <section className="relative py-32 bg-stone-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <span className="text-6xl text-amber-500 font-serif block mb-6">“</span>
          <h3 className="text-3xl md:text-5xl font-serif leading-snug mb-10 italic">
            "चवीसोबत आठवणींचे क्षण"<br/>
            <span className="text-2xl md:text-3xl not-italic text-stone-400 mt-4 block">
              Moments of memories with taste
            </span>
          </h3>
          <p className="text-lg text-stone-300 font-light max-w-2xl mx-auto">
            Our thought is simple: sourced locally, cooked with passion, and served with the warmth of an Maharashtrian home.
          </p>
        </div>
      </section>

      {/* 4. Meet the Team */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 uppercase tracking-widest text-xs font-bold">
              The Family
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mt-3">
              Meet Our Team
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                name: "Rohit Shashwat Mane",
                role: "Founder & Owner",
                img: "/about/rohit-m.jpeg",
                instagram: "https://www.instagram.com/mane.rohit11?igsh=dHR5amM3bjgyb2E4", // Update with real link
                about:
                  "I’m an engineer by education, but food has always been my first love. I grew up around the bold, comforting flavours of Maharashtrian cuisine, and cooking was never just a hobby — it was how I expressed myself. That passion led me to start a small venture called Anant Misal with my close friend Prathamesh, who shared the same love for authentic Maharashtrian food. What began as a simple idea soon became a purpose: to serve honest, flavourful food that stays true to its roots. KSHAN is a continuation of that journey — a space where tradition meets care, and every dish is made with respect for our cuisine. My aim is simple: to keep authentic flavours alive and share food that feels like home.",
              },
              {
                name: "Sonam Dongre",
                role: "Founder & Owner",
                img: "/about/sonam-d.jpeg",
                instagram: "https://www.instagram.com/sonam_dongre", // Update with real link
                about:
                  "I am a certified fitness coach and nutritionist with over 8 years of experience in the health and wellness industry—an experience that taught me discipline, consistency, and the value of hard work. My mother’s love for cooking inspired our family to start a small misal restaurant. With time, dedication, and passion, it grew beyond just a single dish. My brother Prathamesh and his friend Rohit later took charge of continuing and strengthening this journey, with my constant support. Yet, we always felt the urge to create something bigger—something truly our own. That defining moment became “Kshan.” Kshan is not just a restaurant; it is a reflection of passion, family values, and the belief that every great journey begins with one meaningful moment.",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center rounded-2xl overflow-hidden bg-stone-50 shadow-xl"
              >
                {/* Left: Image */}
                <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                    quality={90}
                  />
                </div>

                {/* Right: Text */}
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-serif text-stone-900">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-medium text-sm uppercase tracking-wide mt-2">
                    {member.role}
                  </p>

                  <p className="mt-6 text-stone-600 text-md leading-relaxed font-light">
                    {member.about}
                  </p>

                  <div className="mt-8">
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2 text-sm hover:bg-amber-500 transition"
                    >
                      Visit Instagram
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
