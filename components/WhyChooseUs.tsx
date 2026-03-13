"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TechLabel from "./TechLabel";
import BlueprintGrid from "./BlueprintGrid";
import { Award, Ruler, DollarSign, Headphones, ShieldCheck, ArrowRight } from "lucide-react";
import RevealText from "./RevealText";

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative w-full py-24 lg:py-40 bg-[#fdfaf6] overflow-hidden">
      <BlueprintGrid />
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24 px-4">
          <TechLabel text="SYSTEMS: WHY CHOOSE US" className="mb-4" />
          <RevealText 
            text="Elevating Interiors with Expertise" 
            className="text-[#4d3a2e] text-4xl sm:text-5xl lg:text-7xl font-black max-w-4xl" 
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-[#6b7280] text-lg mt-6 max-w-xl"
          >
            We combine tradition with modern aesthetics to create window treatments that reflect your personality and style.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {/* Card 1: Experience - Large Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 h-[450px] relative group overflow-hidden bg-white border border-black/5 flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 z-0">
               <Image 
                src="/why-choose-us.png" 
                alt="Expert Workmanship" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-50" 
              />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
            </div>
            
            <div className="relative z-10">
               <TechLabel text="REF: EXP-15Y" className="mb-4" />
               <h3 className="text-3xl lg:text-4xl font-black text-[#4d3a2e] mb-4">15+ Years of Mastery</h3>
               <p className="text-gray-600 mb-6 max-w-sm">Crafting premium window treatments with unmatched precision and artisanal quality across thousands of projects island-wide.</p>
               <button className="flex items-center gap-3 text-[#b38e5d] font-bold group/btn uppercase text-xs tracking-widest">
                  Our Legacy <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
               </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05]">
              <BlueprintGrid />
            </div>
          </motion.div>

          {/* Card 2: Expert Guidance */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 h-[450px] bg-white border border-black/5 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden"
          >
             <div className="w-16 h-16 bg-[#b38e5d]/10 rounded-2xl flex items-center justify-center mb-8">
                <Ruler className="w-8 h-8 text-[#b38e5d]" />
             </div>
             <TechLabel text="REF: CONSULT-01" className="mb-2" />
             <h3 className="text-3xl lg:text-4xl font-black text-[#4d3a2e] mb-4">Precision Measurements</h3>
             <p className="text-gray-600 max-w-sm">Our experts visit your site to ensure millimetre-perfect fitting for every single window, ensuring a flawless finish.</p>
             <div className="absolute bottom-0 right-0 w-48 h-48 opacity-[0.03]">
                <BlueprintGrid />
             </div>
          </motion.div>

          {/* Card 3: Warranty */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 bg-[#4d3a2e] text-white p-8 relative overflow-hidden group h-[300px] flex flex-col justify-between"
          >
             <ShieldCheck className="w-10 h-10 text-[#b38e5d]" />
             <div>
                <TechLabel text="REF: SECURE-W" className="mb-2 text-[#b38e5d]" />
                <h3 className="text-2xl font-bold mb-2">Full Warranty</h3>
                <p className="text-gray-300 text-sm">Long-term durability guaranteed with our premium fabrics and hardware.</p>
             </div>
             <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 blur-3xl group-hover:bg-[#b38e5d]/20 transition-all duration-700" />
          </motion.div>

          {/* Card 4: Support */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 bg-white border border-black/5 p-8 relative overflow-hidden group h-[300px] flex flex-col justify-between"
          >
             <Headphones className="w-10 h-10 text-[#b38e5d]" />
             <div>
                <TechLabel text="REF: SUP-24/7" className="mb-2" />
                <h3 className="text-2xl font-bold text-[#4d3a2e] mb-2">Lifetime Support</h3>
                <p className="text-gray-600 text-sm">Expert maintenance and care advice long after installation is complete.</p>
             </div>
             <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.02]">
               <BlueprintGrid />
             </div>
          </motion.div>

          {/* Card 5: Pricing */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 lg:col-span-2 bg-gradient-to-br from-[#b38e5d] to-[#d4af37] text-white p-8 relative overflow-hidden shadow-xl h-[300px] flex flex-col justify-between group"
          >
             <DollarSign className="w-10 h-10 text-white" />
             <div>
                <TechLabel text="REF: VALUE-P" className="text-white/80 mb-2" />
                <h3 className="text-2xl font-bold mb-2">Luxury, Accessible</h3>
                <p className="text-white/90 text-sm">Premium global quality at honest local prices. Premium shouldn&apos;t be prohibitive.</p>
             </div>
             <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Link href="/contact" className="px-10 py-5 bg-[#4d3a2e] text-white rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-[#3d2e25] transition-all flex items-center gap-4 mx-auto group w-max">
            Book a Free Site Visit
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center -mr-2 group-hover:bg-[#b38e5d] transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
