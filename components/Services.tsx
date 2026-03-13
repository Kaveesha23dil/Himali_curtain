"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import TechLabel from "./TechLabel";
import BlueprintGrid from "./BlueprintGrid";
import NotchedBox from "./NotchedBox";
import RevealText from "./RevealText";

const services = [
  {
    title: "RESIDENTIAL SOLUTIONS",
    id: "REF: HM-001",
    image: "/services/house-curtains.png",
    description: "Precision-engineered window treatments for the modern home. Combining architectural form with light-blocking performance."
  },
  {
    title: "HOSPITALITY GRADE",
    id: "REF: HTL-002",
    image: "/services/hotel-curtains.png",
    description: "High-durability fire-retardant fabrics designed for premium hotel environments. Luxury that meets rigorous safety standards."
  },
  {
    title: "PERFORMANCE STAGE",
    id: "REF: STG-003",
    image: "/services/stage-curtains.png",
    description: "Heavy-weight acoustic velvet installations for theaters and auditoriums. Perfect draping with sound-dampening technology."
  },
  {
    title: "CORPORATE CONTROL",
    id: "REF: OFF-004",
    image: "/services/office-curtains.png",
    description: "Integrated solar control systems for focused workspace environments. Minimalist aesthetics with maximum visibility control."
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-white py-24 lg:py-40">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col mb-16 lg:mb-32">
          <TechLabel text="SERVICES: CAPABILITIES" className="mb-4" />
          <RevealText 
            text="Solutions for Every Space" 
            className="text-[#4d3a2e] text-4xl sm:text-5xl lg:text-7xl font-black" 
          />
        </div>

        <div className="space-y-40 lg:space-y-64">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={cardRef} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative">
      {/* Background Index */}
      <div className="absolute -top-20 -left-10 text-[120px] lg:text-[200px] font-black text-black/[0.03] leading-none select-none pointer-events-none">
        0{index + 1}
      </div>

      {/* Image Column */}
      <motion.div 
        style={{ y }}
        className="w-full lg:w-1/2"
      >
        <NotchedBox notchSize={60} className="relative h-[400px] lg:h-[600px] w-full shadow-2xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <BlueprintGrid />
          <div className="absolute inset-0 bg-black/10" />
        </NotchedBox>
      </motion.div>

      {/* Content Column */}
      <motion.div 
        style={{ opacity }}
        className="w-full lg:w-1/2 flex flex-col items-start"
      >
        <TechLabel text={service.id} className="mb-4 text-[#b38e5d]" />
        <h3 className="text-4xl lg:text-6xl font-black text-[#4d3a2e] mb-8 leading-tight">
          {service.title}
        </h3>
        <p className="text-[#6b7280] text-lg lg:text-xl leading-relaxed mb-12 max-w-md">
          {service.description}
        </p>
        
        <div className="flex items-center gap-6">
          <div className="h-px w-16 bg-[#b38e5d]" />
          <button className="text-xs font-black uppercase tracking-[0.3em] hover:text-[#b38e5d] transition-colors">
            Technical Specs
          </button>
        </div>
      </motion.div>
    </div>
  );
}
