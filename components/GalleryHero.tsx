"use client";

import { motion } from "framer-motion";
import BlueprintGrid from "./BlueprintGrid";
import TechLabel from "./TechLabel";
import RevealText from "./RevealText";

export default function GalleryHero() {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-start overflow-hidden bg-[#fdfaf6] p-4 sm:p-6 lg:p-8">
      {/* Blueprint Grid Background */}
      <BlueprintGrid />

      {/* Hero Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
        className="relative w-full h-[45vh] rounded-[80px_10px_10px_10px] sm:rounded-[120px_20px_20px_20px] overflow-hidden flex flex-col shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-black/5"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-[#4d3a2e]" />
        
        {/* Navbar is global - content starts below */}

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-start justify-center text-left px-8 sm:px-12 lg:px-16">
          <TechLabel 
            text="OUR PORTFOLIO | RECENT WORKS" 
            className="mb-4 text-white/80"
          />
          <RevealText 
            text="Project Gallery" 
            className="text-white text-4xl md:text-6xl lg:text-7xl font-black mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] max-w-4xl leading-[1.1]"
            delay={0.7}
          />
        </div>
      </motion.div>
    </section>
  );
}
