"use client";

import Image from "next/image";
import { Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import RevealText from "./RevealText";
import ScrollReveal from "./ScrollReveal";
import NotchedBox from "./NotchedBox";
import TechLabel from "./TechLabel";
import BlueprintGrid from "./BlueprintGrid";

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
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
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
        >
          
          {/* Left Side: Image with Badge */}
          <ScrollReveal direction="right" className="relative w-full lg:w-1/2 group">
            <NotchedBox notchSize={60} className="relative h-[450px] sm:h-[650px] w-full shadow-2xl overflow-hidden">
              <Image
                src="/about-image.png"
                alt="Modern Curtains and Blinds"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5" />
            </NotchedBox>

            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 sm:bottom-10 sm:-right-10 bg-[#b38e5d] text-white p-8 sm:p-10 rounded-[35px] shadow-2xl flex flex-col items-center text-center backdrop-blur-md border border-white/20"
            >
               <div className="bg-white/20 p-3 rounded-full mb-4 text-white">
                  <Award size={32} />
               </div>
               <span className="text-3xl sm:text-4xl font-black mb-1">15+ Years</span>
               <span className="text-sm sm:text-base font-medium opacity-90 uppercase tracking-[0.2em]">Expertise</span>
            </motion.div>
          </ScrollReveal>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="flex flex-col items-start gap-2 mb-8">
              <TechLabel text="CORE: WHO WE ARE" />
              <div className="w-12 h-[1px] bg-[#b38e5d]/30" />
            </div>
            
            <RevealText 
              text="About Himali Curtain" 
              highlight="Himali"
              className="text-[#4d3a2e] text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-[1.15]" 
            />

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              <motion.p variants={itemVariants}>
                Located in the heart of modern design, Himali Curtain is your one-stop, total service solution for all your interior window needs. Choose from a wide range of materials, designs, and layouts to suit your spaces.
              </motion.p>
              <motion.p variants={itemVariants}>
                We cater to consumers at all levels, be it a first-time home owner or an expert designer. We guarantee that your interior decor answer is within our total solution. Our aim is to satisfy our customers with utmost value, convenience, and enhanced quality.
              </motion.p>
              <motion.p variants={itemVariants}>
                Himali Curtain&apos;s expert sales team is more than capable of handling your needs and ready to breathe life into your ideas. Our team will work with you patiently and tirelessly to ensure your dream interior is realised without stress and worry.
              </motion.p>
            </div>

            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-6 mt-10 w-full max-w-md">
                <motion.div variants={itemVariants} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#b38e5d]" size={20} />
                    <span className="font-bold text-[#4d3a2e]">Premium Quality</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#b38e5d]" size={20} />
                    <span className="font-bold text-[#4d3a2e]">Expert Installation</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#b38e5d]" size={20} />
                    <span className="font-bold text-[#4d3a2e]">Custom Design</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#b38e5d]" size={20} />
                    <span className="font-bold text-[#4d3a2e]">Fast Support</span>
                </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>
      
      {/* Decorative background element */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f3eb] -z-10 rounded-l-[100px] hidden lg:block" 
      />
    </section>
  );
}
