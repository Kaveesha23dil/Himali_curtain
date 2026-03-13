"use client";

import Image from "next/image";
import { Phone, ArrowUpRight, Search } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "./RevealText";
import BlueprintGrid from "./BlueprintGrid";
import TechLabel from "./TechLabel";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={targetRef} className="relative w-full min-h-[90vh] flex flex-col items-center justify-start overflow-hidden bg-[#fdfaf6] p-4 sm:p-6 lg:p-8">
      {/* Blueprint Grid Background */}
      <BlueprintGrid />

      {/* Container with specified radii and background image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
        className="relative w-full h-[85vh] rounded-[80px_10px_10px_10px] sm:rounded-[120px_20px_20px_20px] overflow-hidden flex flex-col shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-black/5"
      >
        {/* Background Image with Overlay and Parallax */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Modern Blinds"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Navbar is global */}

        {/* Hero Content (Left-Aligned) */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="relative z-10 flex-1 flex flex-col items-start justify-center text-left px-8 sm:px-12 lg:px-16 -mt-16"
        >
          <TechLabel 
            text="Himali Interior | REF: HM-2026" 
            className="mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          />
          <RevealText 
            text="Bring Magic to Home" 
            className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] max-w-4xl leading-[1.1]"
            delay={0.7}
          />
        </motion.div>

        {/* Carousel Indicators (Bottom Right) */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute bottom-0 right-0 z-20 bg-white rounded-tl-[40px] px-8 py-8 shadow-[-10px_-10px_30px_rgba(0,0,0,0.05)]"
        >
          <button className="group relative flex items-center gap-2.5 bg-[#f3f4f6] text-[#4d3a2e] pl-6 pr-2 py-2 rounded-full hover:bg-[#4d3a2e] hover:text-white transition-all duration-500 shadow-sm overflow-hidden border border-gray-100">
            <span className="text-sm font-bold tracking-wide uppercase">Discover More</span>
            <div className="bg-[#b38e5d] p-2.5 rounded-full group-hover:bg-white group-hover:text-[#4d3a2e] transition-all duration-500 group-hover:rotate-45 text-white">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
