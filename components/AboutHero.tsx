"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "./RevealText";
import TechLabel from "./TechLabel";
import BlueprintGrid from "./BlueprintGrid";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={targetRef} className="relative w-full h-[60vh] lg:h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-[#fdfaf6] p-6 lg:p-12">
      <BlueprintGrid />
      
      {/* Background Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-x-6 lg:inset-x-12 inset-y-6 lg:inset-y-12 rounded-[40px] lg:rounded-[80px] overflow-hidden"
      >
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <Image
            src="/about_hero_bg_1773379506677.png"
            alt="Luxurious Curtains"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </motion.div>

      {/* Floating Header Box */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.33, 1, 0.68, 1] }}
        style={{ opacity }}
        className="relative z-10 bg-[#f8f3eb]/95 backdrop-blur-xl px-12 py-16 lg:px-24 lg:py-24 rounded-[50px] lg:rounded-[100px] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col items-center text-center max-w-4xl border border-white/40"
      >
        <Link href="/" className="absolute -top-6 left-1/2 -translate-x-1/2 group">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#b38e5d] text-white p-4 rounded-full shadow-lg border-4 border-[#fdfaf6]"
          >
            <ArrowLeft size={20} />
          </motion.div>
        </Link>

        <TechLabel 
          text="WHO WE ARE" 
          className="mb-8 text-[#b38e5d] border-[#b38e5d]/20 px-8 py-2 rounded-full font-bold tracking-widest"
        />
        
        <RevealText 
          text="About Himali Curtain" 
          className="text-[#4d3a2e] text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
          delay={0.8}
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="w-16 h-1 bg-[#b38e5d] rounded-full mb-8"
        />

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
        >
          A legacy of elegance, crafting bespoke interior solutions for over 15 years.
        </motion.p>
      </motion.div>
    </section>
  );
}
