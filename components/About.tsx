"use client";

import Image from "next/image";
import { Award, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#fdfaf6] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Image with Badge */}
          <div className="relative w-full lg:w-1/2 group">
            <div className="relative h-[450px] sm:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/about-image.png"
                alt="Modern Curtains and Blinds"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-10 sm:-right-10 bg-[#b38e5d] text-white p-8 sm:p-10 rounded-[35px] shadow-2xl flex flex-col items-center text-center backdrop-blur-md border border-white/20 animate-in fade-in slide-in-from-bottom-5 duration-1000">
               <div className="bg-white/20 p-3 rounded-full mb-4">
                  <Award size={32} className="text-white" />
               </div>
               <span className="text-3xl sm:text-4xl font-black mb-1">15+ Years</span>
               <span className="text-sm sm:text-base font-medium opacity-90 uppercase tracking-[0.2em]">Expertise</span>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-[#b38e5d]" />
              <span className="text-[#b38e5d] text-sm font-black uppercase tracking-[0.4em]">Who we are</span>
            </div>
            
            <h2 className="text-[#4d3a2e] text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-[1.15]">
              About <span className="text-[#b38e5d]">Himali</span> Curtain
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              <p>
                Located in the heart of modern design, Himali Curtain is your one-stop, total service solution for all your interior window needs. Choose from a wide range of materials, designs, and layouts to suit your spaces.
              </p>
              <p>
                We cater to consumers at all levels, be it a first-time home owner or an expert designer. We guarantee that your interior decor answer is within our total solution. Our aim is to satisfy our customers with utmost value, convenience, and enhanced quality.
              </p>
              <p>
                Himali Curtain's expert sales team is more than capable of handling your needs and ready to breathe life into your ideas. Our team will work with you patiently and tirelessly to ensure your dream interior is realised without stress and worry.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10 w-full max-w-md">
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#b38e5d]" size={20} />
                    <span className="font-bold text-[#4d3a2e]">Premium Quality</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#b38e5d]" size={20} />
                    <span className="font-bold text-[#4d3a2e]">Expert Installation</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#b38e5d]" size={20} />
                    <span className="font-bold text-[#4d3a2e]">Custom Design</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#b38e5d]" size={20} />
                    <span className="font-bold text-[#4d3a2e]">Fast Support</span>
                </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f3eb] -z-10 rounded-l-[100px] hidden lg:block" />
    </section>
  );
}
