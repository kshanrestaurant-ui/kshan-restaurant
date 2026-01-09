// File: app/menu/page.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Tag, Clock, ArrowRight } from "lucide-react"; // Make sure to install lucide-react if not present

// --- DATA: OFFERS ---
const currentOffers = [
  {
    id: 1,
    title: "Buy 2 get 1 chicken thali on every Tuesday and Thursday",
    desc: "Get 1 chicken thali free on 2 chicken thali.",
    code: "No code",
    tag: "Weekly Special",
    color: "bg-orange-50 border-orange-100 text-orange-900"
  },


  {
    id: 2,
    title: "Non-veg Popti Special",
    desc: "Seasonal Offer",
    code: "No code",
    tag: "Limited till 15 Jan 2026",
    color: "bg-stone-100 border-stone-200 text-stone-900"
  }
];

// --- DATA FROM PDF (With Veg/Non-Veg Tags) ---
const menuCategories = [
  // { id: "breakfast", label: "Breakfast (8-11:30 AM)" },
  { id: "soups", label: "Soups" },
  { id: "veg_starter", label: "Veg Starters" },
  { id: "non_veg_starter", label: "Non-veg Starters" },
  { id: "thali_veg", label: "Veg Thali" },
  { id: "thali_nonveg", label: "Non-veg thali" },
  { id: "Fish_thali", label: "Fish Thali" },
  { id: "veg_mains", label: "Main Course (Veg)" },
  { id: "nonveg_mains", label: "Main Course (Non-veg)" },
  { id: "Sea_main", label: "Sea Food Main Course" },
  { id: "breads", label: "Breads" },
  { id: "rice_veg", label: "Rice (Veg)"},
  { id: "rice_nonveg", label: "Rice (Non-veg)"},
  { id: "desserts", label: "Desserts" },
  { id: "beverages", label: "Beverages" },
  { id: "veg_combo", label: "Special Combo (Veg)" },
  { id: "nonveg_combo", label: "Special Combo (Non-veg)" },
  // { id: "seasonal_offer", label: "Seasonal Offers" },
];

const menuItems = {
  // breakfast: [
  //   { name: "Pohe", price: "50", desc: "Traditional flattened rice.", type: "veg" },
  //   { name: "Sabudana Khichadi", price: "85", desc: "Sago pearl pilaf with peanuts.", type: "veg" },
  //   { name: "Sabudana Vade", price: "105", desc: "Crispy sago fritters.", type: "veg" },
  //   { name: "Thalipeeth", price: "125", desc: "Multigrain savory pancake.", type: "veg" },
  //   { name: "Vada Pav (2 pc)", price: "50", desc: "Mumbai's favorite burger.", type: "veg" },
  //   { name: "Misal Pav", price: "95", desc: "Spicy sprout curry with bread.", type: "veg" },
  //   { name: "Amboli", price: "105", desc: "Fermented rice pancake.", type: "veg" },
  //   { name: "Omlette Pav", price: "110", desc: "Masala omelette served with pav.", type: "non-veg" },
  //   { name: "Burji Pav", price: "130", desc: "Scrambled spiced eggs with pav.", type: "non-veg" },
  //   { name: "Chicken Kheema Pav", price: "160", desc: "Minced chicken curry with pav.", type: "non-veg" },
  // ],
  soups: [
    { name: "Shevga Ukad (Drumstick)", price: "150", desc: "Traditional drumstick soup.", type: "veg" },
    { name: "Fish Ukad", price: "200", desc: "Traditional drumstick soup.", type: "non-veg" },
    { name: "Chicken Ukad", price: "180", desc: "Traditional drumstick soup.", type: "non-veg" },
    
  ],
  veg_starter: [
    { name: "Masala Papad", price: "75", type: "veg" },
    { name: "Kothimbir Wadi", price: "170",  type: "veg" },
    { name: "Paneer Koliwada", price: "320", type: "veg" },
    { name: "Chana Koliwada", price: "230",type: "veg" },
    { name: "Fry Papad", price: "30", type: "veg" },
    { name: "Alu Wadi", price: "170",  type: "veg" },
    { name: "Shegaon Kachori", price: "150", type: "veg" },
    { name: "Batata Kaap", price: "180", type: "veg" },
  ],
  non_veg_starter: [
    { name: "Jawla Papad", price: "120", type: "non-veg" },
    { name: "Pomfret Fry", price: "690", type: "non-veg" },
    { name: "Fish Koliwada", price: "355", type: "non-veg" },
    { name: "Chicken Koliwada", price: "270",   type: "non-veg" },
    { name: "Crab Lollipop", price: "485",   type: "non-veg" },
    { name: "Surmai Fry", price: "530",   type: "non-veg" },
    { name: "Chicken Fry", price: "250",   type: "non-veg" },
    { name: "Bombil Fry", price: "455",   type: "non-veg" },
    { name: "Makul Ring Fry/Masala (Squid)", price: "455",   type: "non-veg" },
    { name: "Kolambi Fry", price: "400",   type: "non-veg" },
    { name: "Prawns Lollipop", price: "470",   type: "non-veg" },
    { name: "Pomfret Fry", price: "690",   type: "non-veg" },
    { name: "Chicken Cutlet", price: "250",   type: "non-veg" },
    { name: "Halwa Fry", price: "500",   type: "non-veg" },
    { name: "Prawns Popcorn", price: "450",   type: "non-veg" },
    { name: "Prawns Cutlet", price: "450",   type: "non-veg" },
    { name: "Prawns Fry", price: "430",   type: "non-veg" },
    { name: "Bangda Fry", price: "200",   type: "non-veg" },
    { name: "Prawns Koliwada", price: "430",   type: "non-veg" },
    { name: "Prawns Kothimbir Wadi", price: "299",   type: "non-veg" },
  ],
  thali_veg: [
    { name: "MarathI Swad Thali", price: "280", desc: "2 sabji of choice, dal, rice, 2 chapati / 1 bhakri, solkadhi, kothimbir vadi, chutney / thecha, salad, papad, sweet.", type: "veg",},
    { name: "Puranpoli Thali", price: "450", desc:"2 sabji, 2 puranpoli, dal/saar, rice, gulavani, milk, ghee, solkadi, kothimbir vadi, chutney/ thecha, salad, papad", type: "veg" },
    { name: "Annapurna Thali", price: "400", desc:"3 sabji of choice, dal, rice, 2 chapati/ 1 bhakri/ 4 puri/ 4 vade, solkadi, kothimbir vadi, chutney/thecha, salad, papad, special sweet, shrikhand", type: "veg" },
    { name: "Mas Wadi Thali (Sat-sun)", price: "450", desc:"5 mas vadi, rassa, rice, 2 chapati/ 1 bhakri/ 4 puri/ 4 vade, solkadi, bhaji, chutney/ thecha, salad, papad, sweet",  type: "veg" },
  ],
  thali_nonveg: [
    { name: "Chicken Thali", price: "375", desc:"Chicken Sukka, Chicken Rassa, Egg Masala, rice, 2 chapati/ 1 bhakri/4 vade, solkadi, chutney/thecha, salad, papad", type: "non-veg" },
    { name: "Mutton Thali", price: "560", desc:"Mutton Sukka, Mutton Rassa, Egg Masala, kheema, rice, 2 chapati/ 1 bhakri/4 vade, solkadi, chutney/ thecha, salad, papad", type: "non-veg" },
    { name: "Egg Thali", price: "280", desc:"Egg Sukka, Egg curry, Egg burji, rice, 2 chapati/ 1 bhakri/4 vade, solkadi, chutney/ thecha, salad,papad", type: "non-veg" },
  ],
  Fish_thali: [
    { name: "Pomfret Thali", price: "645", desc:"Pomfret fry, fish curry, sukkat, sukkhe bombil, rice, 2 chapati / 1 bhakri / 4 vade, solkadhi, chutney / thecha, salad.", type: "non-veg" },
    { name: "Surmai Thali", price: "575", desc:"Surmai fry, fish curry, sukkat, sukkhe bombil, rice, 2 chapati / 1 bhakri / 4 vade, solkadhi, chutney / thecha, salad.", type: "non-veg" },
    { name: "Halwa Thali", price: "645" , desc:"Halwa fry, fish curry, sukkat, sukkhe bombil, rice, 2 chapati / 1 bhakri / 4 vade, solkadhi, chutney / thecha, salad.", type: "non-veg" },
    { name: "Prawns Thali", price: "575", desc:"Prawns fry, prawns curry, sukkat, sukkhe bombil, rice, 2 chapati / 1 bhakri / 4 vade, solkadhi, chutney / thecha, salad.", type: "non-veg" },
    { name: "Bangda Thali", price: "335" , desc:"Bangda fry, fish curry, sukkat, sukkhe bombil, rice, 2 chapati / 1 bhakri / 4 vade, solkadhi, chutney / thecha, salad.", type: "non-veg" },
    { name: "Bombil Thali", price: "525" , desc:"Bombil fry, fish curry, sukkat, sukkhe bombil, rice, 2 chapati / 1 bhakri / 4 vade, solkadhi, chutney / thecha, salad.", type: "non-veg" },
    { name: "Shimpli Thali", price: "565" , desc:"Shimpli fry, fish curry, sukkat, sukkhe bombil, rice, 2 chapati / 1 bhakri / 4 vade, solkadhi, chutney / thecha, salad.", type: "non-veg" },
    { name: "Crab Thali", price: "595" , desc:"Crab fry, crab curry, sukkat, sukkhe bombil, rice, 2 chapati / 1 bhakri / 4 vade, solkadhi, chutney / thecha, salad.", type: "non-veg" },
    { name: "Jitada Thali", price: "APS" , desc:"Jitada fry, fish curry, sukkat, sukkhe bombil, rice, 2 chapati / 1 bhakri / 4 vade, solkadhi, chutney / thecha, salad.", type: "non-veg" },
    { name: "Rawas Thali", price: "APS" , desc:"Rawas fry, fish curry, sukkat, sukkhe bombil, rice, 2 chapati / 1 bhakri / 4 vade, solkadhi, chutney / thecha, salad.", type: "non-veg" },
  ],
  veg_mains: [
    { name: "Paneer Masala", price: "225", type: "veg" },
    { name: "Mix Veg", price: "285", type: "veg" },
    { name: "Mutter Paneer Masala", price: "355", type: "veg" },
    { name: "Kala Vatana", price: "250", type: "veg" },
    { name: "Vala Cha Birda", price: "270", type: "veg" },
    { name: "Chole Masala", price: "250", type: "veg" },
    { name: "Matki Usal", price: "250", type: "veg" },
    { name: "Chana Masala", price: "250", type: "veg" },
    { name: "Aloo Mutter", price: "250", type: "veg" },
    { name: "Dal Fry", price: "195", type: "veg" },
    { name: "Dal Tadka", price: "235", type: "veg" },
    { name: "Kothimbir Wadi", price: "300", type: "veg" },
    { name: "Sev Bhaji", price: "250", type: "veg" },
    { name: "Kaju Masala", price: "375", type: "veg" },
    { name: "Drumstick Masala", price: "275", type: "veg" },
    { name: "Bharleli Vangi", price: "280", type: "veg" },
  ],
  nonveg_mains: [
    { name: "Chicken Masala", price: "295", type: "non-veg" },
    { name: "Chicken Curry", price: "275", type: "non-veg" },
    { name: "Chicken Sukka", price: "305", type: "non-veg" },
    { name: "Chicken Lapeta", price: "390",  type: "non-veg" },
    { name: "Mutton Masala", price: "590", type: "non-veg" },
    { name: "Mutton Curry", price: "590", type: "non-veg" },
    { name: "Mutton Sukka", price: "600", type: "non-veg" },
    { name: "Mutton Lapeta", price: "650", type: "non-veg" },
    { name: "Egg Masala", price: "235", type: "non-veg" },
    { name: "Egg Curry", price: "225", type: "non-veg" },
    { name: "Egg Burji", price: "160", type: "non-veg" },
    { name: "Egg Omlette", price: "140", type: "non-veg" },
    { name: "Chicken Handi", price: "575", type: "non-veg" },
    { name: "Mutton Handi", price: "990", type: "non-veg" },
  ],
  sea_main: [
    { name: "Pomfret Masala", price: "695", type: "non-veg" },
    { name: "Pomfret Curry", price: "655", type: "veg" },
    { name: "Pomfret Green Masala", price: "695", type: "veg" },
    { name: "Surmai Masala", price: "570", type: "veg" },
    { name: "Surmai Curry", price: "550", type: "veg" },
    { name: "Prawns Masala", price: "530", type: "veg" },
    { name: "Prawns curry", price: "520", type: "veg" },
    { name: "Prawns Sukka", price: "550", type: "non-veg" },
    { name: "Prawns Green Masala", price: "535", type: "non-veg" },
    { name: "Prawns Kofta Masala", price: "505", type: "non-veg" },
    { name: "Crab Masala", price: "595",   type: "non-veg" },
    { name: "Crab Sukka", price: "635",   type: "non-veg" },
    { name: "Makul Masala (Squid)", price: "480",   type: "non-veg" },
    { name: "Makul Sukka (Squid)", price: "490",   type: "non-veg" },
    { name: "Shimpli Masala (Tisrya)", price: "485",   type: "non-veg" },
    { name: "Sukka Jawla", price: "295",   type: "non-veg" },
    { name: "Sukka Jawla Vangi", price: "315",   type: "non-veg" },
    { name: "Sukka Bombil", price: "295",   type: "non-veg" },
    { name: "Sukka Bombil Sheng", price: "325",   type: "non-veg" },
    { name: "Sukka Bombil Chutney", price: "295",   type: "non-veg" },
  ],
  breads: [
    { name: "Puri", price: "80", type: "veg" },
    { name: "Chapati", price: "20", type: "veg" },
    { name: "Puranpoli", price: "120", type: "veg" },
    { name: "Tandalachi Bhakri (Rice)", price: "35", desc: "Kokum and coconut milk with spices.", type: "veg" },
  ],
  rice_veg: [
    { name: "Jeera Rice", price: "135", type: "veg" },
    { name: "Dal Khichadi", price: "200", type: "veg" },
    { name: "Steam Rice", price: "145", type: "veg" },
    { name: "Massale Bhat", price: "220", type: "veg" },
    { name: "Lemon Rice", price: "185", type: "veg" },
    { name: "Veg Pulao", price: "245", type: "veg" },
    { name: "Indrayani Rice", price: "175", type: "veg" },
    { name: "Veg Biryani", price: "275", type: "veg" },
  ],

  rice_nonveg: [
    { name: "Chicken Biryani", price: "350", type: "non-veg" },
    { name: "Prawns Biryani", price: "455", type: "non-veg" },
    { name: "Kolambi Bhat", price: "395", type: "non-veg" },
    { name: "Mutton Biryani", price: "515", type: "non-veg" },
    { name: "Egg Biryani", price: "255", type: "non-veg" },
    { name: "Surmai Biryani", price: "435", type: "non-veg" },
  ],
  
  desserts: [
    { name: "Ukadiche Modak", price: "120", type: "veg" },
    { name: "Gulab Jamun", price: "90", type: "veg" },
    { name: "Puran Poli", price: "120", type: "veg" },
    { name: "Modak Ice Cream", price: "100", type: "veg" },
    { name: "Kharvas", price: "100", type: "veg" },
    { name: "Dudhi Halwa", price: "100", type: "veg" },
    { name: "Halwa", price: "120", type: "veg" },
  ],

  beverages: [
    { name: "Water (1L)", price: "20",  type: "veg" },
    { name: "Chaas", price: "50",  type: "veg" },
    { name: "Kokum Sherbet", price: "50",  type: "veg" },
    { name: "Lassi", price: "90",  type: "veg" },
    { name: "Solkadhi", price: "80", type: "veg" },
    { name: "Limbu Sherbet", price: "55", type: "veg" },
    { name: "Kokum Soda", price: "100",  type: "veg" },
    { name: "Kairi Sherbet", price: "80",  type: "veg" },
    { name: "Kairi Soda", price: "100",  type: "veg" },
  ],

  veg_combo: [
    { name: "Meal-Ful Kshan", price: "290", desc:"Drumstick Ukad (Soup), Kothimbir Vadi/ Alu Vadi, Veg Biryani, Solkadi.", type: "veg" },
    { name: "Godiche Kshan", price: "210", desc:"Milk, Gulavani, 2 Puranpoli.", type: "veg" },
    { name: "Aaji-che Kshan", price: "190", desc:"Pithala, 1 Bhakri, thecha, papad, solkadi.", type: "veg" },
  ],

  nonveg_combo: [
    { name: "Masali Kshan", price: "490", desc:"Fish Ukad (Soup), bangda fry, Kolambi Rice, Solkadi", type: "non-veg" },
    { name: "Gaavran Kshan", price: "390", desc:"Chicken Ukad (Soup), Chicken drumstick fry, Chicken Biryani, Solkadi", type: "non-veg" },
    { name: "Kokani Kshan", price: "290", desc:"Chicken Rassa, Vade, Solkadi.", type: "non-veg" },
    { name: "Koli Kshan", price: "290", desc:"Jawla/ Bombil, 1 Bhakri, Solkadi.", type: "non-veg" },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  // Handle Scroll Spy to update active category
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuCategories.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 150; // Offset for header

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveCategory(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
      setActiveCategory(id);
    }
  };

  return (
    <main className="bg-stone-50 min-h-screen text-stone-900">

      {/* Hero Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/*<Image 
          src="/home/menu.png" 
          alt="Menu Header" 
          fill 
          priority
          className="object-cover opacity-90" 
        />*/}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white mt-10">
          <span className="text-white font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-fade-in">
            Authentic Taste
          </span>
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4 drop-shadow-xl">Our Menu</h1>
          <p className="text-lg text-white/80 max-w-lg mx-auto font-light">
            Connecting moments over food.
          </p>
        </div>
      </section>

      {/* --- NEW: OFFERS SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 -mb-4 relative z-10">
         <div className="bg-white rounded-xl shadow-lg border border-stone-200 p-6 md:p-8 transform -translate-y-12">
            <div className="flex items-center gap-3 mb-6">
                <Tag className="w-5 h-5 text-[#b65c3a]" />
                <h2 className="text-2xl font-serif font-bold text-stone-900">Offers</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                {currentOffers.map((offer) => (
                    <div key={offer.id} className={`p-5 rounded-lg border ${offer.color} flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-transform hover:scale-[1.01]`}>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-white/60 rounded-full border border-black/5">
                                    {offer.tag}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold font-serif">{offer.title}</h3>
                            <p className="text-sm opacity-80 max-w-sm leading-relaxed">{offer.desc}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1 min-w-fit">
                            <span className="text-xs font-semibold uppercase opacity-60">Use Code</span>
                            <div className="text-lg font-mono font-bold tracking-widest bg-white/80 px-3 py-1 rounded border border-black/5 border-dashed">
                                {offer.code}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 pb-24 flex flex-col md:flex-row gap-12">
        
        {/* SIDEBAR NAVIGATION (Sticky) */}
        <aside className="md:w-1/4 md:sticky md:top-32 h-fit z-20">
           <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
             <h3 className="text-xl font-serif font-bold mb-6 px-2">Courses</h3>
             <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
               {menuCategories.map((cat) => (
                 <button
                   key={cat.id}
                   onClick={() => scrollToCategory(cat.id)}
                   className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                     activeCategory === cat.id
                       ? "bg-[#b65c3a] text-white shadow-md transform scale-105"
                       : "text-stone-500 hover:bg-stone-100 hover:text-stone-900"
                   }`}
                 >
                   {cat.label}
                 </button>
               ))}
             </nav>
           </div>
        </aside>

        {/* MENU CONTENT LIST */}
        <div className="md:w-3/4 space-y-20">
          {menuCategories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-32 animate-fade-in-up">
              {/* Category Title */}
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
                  {cat.label}
                </h2>
                <div className="h-px flex-1 bg-stone-300"></div>
              </div>

              {/* Items Grid */}
              <div className="grid gap-x-10 gap-y-12 md:grid-cols-1">
                {menuItems[cat.id]?.map((item, index) => (
                  <div key={index} className="group flex justify-between items-start gap-4 border-b border-stone-200 pb-6 last:border-0 hover:bg-white p-4 rounded-xl transition-all duration-300 hover:shadow-sm hover:-translate-y-1">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        
                        {/* 1. Veg/Non-Veg Visual Indicator */}
                        <div className={`
                            w-5 h-5 border-[2px] flex items-center justify-center rounded-sm
                            ${item.type === 'veg' ? 'border-green-600' : 'border-red-600'}
                        `}>
                            <div className={`
                                w-2.5 h-2.5 rounded-full
                                ${item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'}
                            `}></div>
                        </div>

                        <h3 className="text-xl font-serif font-medium text-stone-900 group-hover:text-[#b65c3a] transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-stone-500 text-sm font-light leading-relaxed max-w-md pl-8">
                        {item.desc}
                      </p>
                    </div>
                    <div className="text-xl font-serif font-semibold text-stone-900">
                      ₹{item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
