"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-7xl transition-all duration-500 ease-in-out border border-white/10 rounded-full px-6 py-3 flex items-center justify-between
        ${scrolled 
          ? "bg-black/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] scale-100" 
          : "bg-black/40 backdrop-blur-md shadow-lg scale-[1.02]"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group z-20">
          <div className="w-8 h-8 rounded-full bg-[#b65c3a] flex items-center justify-center text-black font-bold font-serif text-lg">
            <img src="/logo/kshan.png" className="rounded-full" height={100} width={100} alt="Kshan" />
          </div>
          <span className="font-serif font-semibold text-white tracking-wide text-lg hidden sm:block">
            Kshan<span className="text-[#b65c3a]">.</span>
          </span>
        </Link>

        {/* DESKTOP LINKS (Centered) */}
        <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-black bg-[#b65c3a] shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* MOBILE TOGGLE (Moved to Right End) */}
        <div className="flex items-center z-20">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU (Slide Down from behind the capsule) */}
      <div
        className={`absolute top-20 left-4 right-4 bg-stone-900/95 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 origin-top shadow-2xl md:hidden ${
          open ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <div className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-white/90 hover:bg-white/10 hover:text-[#b65c3a] transition flex justify-between items-center group"
            >
              <span className="text-lg font-medium">{link.name}</span>
              <span className="opacity-0 group-hover:opacity-100 text-[#b65c3a]">→</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
