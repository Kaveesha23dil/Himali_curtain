"use client";

import Image from "next/image";
import { Search, Phone, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-start overflow-hidden bg-[#fdfaf6] p-4 sm:p-6 lg:p-8">
      {/* Container with rounded corners and background image */}
      <div className="relative w-full h-[85vh] rounded-[40px] overflow-hidden flex flex-col">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Modern Blinds"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Top Navbar Layer */}
        <div className="relative z-20 w-full flex items-start justify-between p-4 sm:p-6 lg:p-8 pointer-events-none">
          {/* Logo Area - Matches the white box in reference */}
          <div className="bg-white rounded-2xl p-4 shadow-xl flex flex-col items-center pointer-events-auto min-w-[120px]">
            <div className="relative w-16 h-16 mb-2">
              <Image
                src="/logo.png"
                alt="Himali Curtain Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <span className="block text-xs font-black text-gray-800 uppercase tracking-tight leading-none">Himali Curtain</span>
              <span className="block text-[8px] text-gray-400 italic mt-1 font-medium italic">Quality you deserve</span>
            </div>
          </div>

          {/* Navigation and Contact Banner */}
          <div className="flex-1 max-w-[1100px] ml-4 sm:ml-8 pointer-events-auto">
            <div className="bg-[#4d3a2e] rounded-full px-6 py-2.5 flex items-center justify-between shadow-2xl border border-white/10">
              {/* Contact Info */}
              <div className="flex items-center gap-3">
                <div className="bg-[#b38e5d] p-2 rounded-full text-white shadow-lg">
                  <Phone size={14} className="fill-current" />
                </div>
                <span className="text-white text-sm font-semibold tracking-wide">+94 77 666 55 33</span>
              </div>

              {/* Nav Links */}
              <nav className="hidden lg:flex items-center gap-10">
                <a href="#" className="text-[#b38e5d] text-sm font-bold tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#b38e5d]">Home</a>
                <a href="#" className="text-white/90 text-sm font-bold tracking-wider hover:text-[#b38e5d] transition-colors">About Us</a>
                <a href="#" className="text-white/90 text-sm font-bold tracking-wider hover:text-[#b38e5d] transition-colors">Products</a>
                <a href="#" className="text-white/90 text-sm font-bold tracking-wider hover:text-[#b38e5d] transition-colors">Contact</a>
              </nav>

              {/* Search Bar */}
              <div className="relative hidden md:flex items-center">
                <input
                  type="text"
                  placeholder="Search ..."
                  className="bg-white rounded-full py-2 pl-5 pr-12 text-sm focus:outline-none w-44 lg:w-56 shadow-inner placeholder:text-gray-400 font-medium"
                />
                <button className="absolute right-1 px-3 py-1.5 bg-[#b38e5d] rounded-full text-white hover:bg-[#a07d50] transition-all flex items-center justify-center shadow-md">
                  <Search size={14} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content (Left-Aligned) */}
        <div className="relative z-10 flex-1 flex flex-col items-start justify-center text-left px-8 sm:px-12 lg:px-16 -mt-16">
          <span className="text-white text-base md:text-lg font-bold tracking-[0.4em] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] uppercase">
            Himali Interior
          </span>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] max-w-4xl leading-[1.1]">
            Bring Magic to <br className="hidden md:block" /> Home
          </h1>

          {/* Button removed from here */}
        </div>

        {/* Carousel Indicators (Bottom Right - White Box in corner) */}
        <div className="absolute bottom-0 right-0 z-20 bg-white rounded-tl-[40px] px-8 py-8 shadow-[-10px_-10px_30px_rgba(0,0,0,0.05)]">
          <button className="group relative flex items-center gap-2.5 bg-[#f3f4f6] text-[#4d3a2e] pl-6 pr-2 py-2 rounded-full hover:bg-[#4d3a2e] hover:text-white transition-all duration-500 shadow-sm overflow-hidden border border-gray-100">
            <span className="text-sm font-bold tracking-wide">About Us</span>
            <div className="bg-[#b38e5d] p-2.5 rounded-full group-hover:bg-white group-hover:text-[#4d3a2e] transition-all duration-500 group-hover:rotate-45 text-white">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
