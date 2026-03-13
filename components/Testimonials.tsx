"use client";

import Image from "next/image";
import {  } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="relative w-full bg-white pt-12 overflow-hidden">
      {/* SVG Clip Path Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="testimonial-notch" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 
                     L 0.2,0 
                     C 0.22,0 0.23,0.05 0.25,0.05 
                     L 0.75,0.05 
                     C 0.77,0.05 0.78,0 0.8,0 
                     L 1,0 
                     L 1,1 
                     L 0,1 
                     Z" />
          </clipPath>
        </defs>
      </svg>

      <div 
        className="relative w-full min-h-[90vh] bg-gray-900"
        style={{ clipPath: 'url(#testimonial-notch)' }}
      >
        {/* Background Image */}
        <Image
          src="/review-bg.png"
          alt="Luxury Interior"
          fill
          className="object-cover opacity-90 scale-105"
          priority
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Quote Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-center px-6 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight drop-shadow-2xl">
              “The elegance and quality of their curtains <br className="hidden md:block" />
              completely redefined our interior. From the fabric <br className="hidden md:block" />
              selection to the final installation, every <br className="hidden md:block" />
              step was professional and perfect.”
            </h2>
            
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <span className="text-white text-xl md:text-2xl font-bold tracking-tight">Samantha Wijesinghe</span>
                <span className="text-[#b38e5d] text-sm md:text-base font-bold uppercase tracking-[0.2em] mt-2">Interior Architect</span>
                <span className="text-white/70 text-base md:text-lg font-medium mt-3">S.W. Studios, Colombo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b38e5d]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>
    </section>
  );
}
