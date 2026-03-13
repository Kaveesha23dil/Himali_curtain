"use client";

import React from "react";
import { motion } from "framer-motion";
import TechLabel from "./TechLabel";
import BlueprintGrid from "./BlueprintGrid";

const clients = [
  { name: "METRO RESIDENCY", ref: "CL-01" },
  { name: "SKYLINE HOTELS", ref: "CL-02" },
  { name: "ORCHID DESIGNS", ref: "CL-03" },
  { name: "URBAN SPACE", ref: "CL-04" },
  { name: "LUXE INTERIORS", ref: "CL-05" },
  { name: "GRAND STAGE", ref: "CL-06" },
  { name: "MODERN OFFICE", ref: "CL-07" },
  { name: "VISTA HOMES", ref: "CL-08" },
];

export default function Clients() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#fdfaf6] border-y border-black/5 overflow-hidden">
      <BlueprintGrid />
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-2">
          <div className="flex flex-col">
            <TechLabel text="NETWORK: TRUSTED PARTNERS" className="mb-4" />
            <h2 className="text-[#4d3a2e] text-3xl lg:text-4xl font-black uppercase tracking-tight">
              Collaborating with <br className="hidden md:block" /> Industry Leaders
            </h2>
          </div>
          <div className="flex items-center gap-4 border-l border-black/10 pl-8">
            <span className="text-4xl font-black text-[#b38e5d]">500+</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-tight">
              Projects <br /> Completed
            </span>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5 border border-black/5"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white group relative h-32 md:h-48 flex flex-col items-center justify-center p-6 transition-all duration-500 hover:bg-[#b38e5d]/5 overflow-hidden"
            >
              {/* Technical Marker */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <TechLabel text={client.ref} className="text-[#b38e5d]/40" />
              </div>
              
              {/* Logo Placeholder (Architectural Style) */}
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-[#4d3a2e] font-black text-sm md:text-lg tracking-[0.2em] uppercase group-hover:text-[#b38e5d] transition-colors duration-300">
                  {client.name}
                </span>
                <div className="w-0 h-px bg-[#b38e5d] mt-2 group-hover:w-full transition-all duration-500 ease-out" />
              </div>

              {/* Grid Background Overlay (Hover) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500">
                <BlueprintGrid />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Footer Line */}
        <div className="mt-12 flex justify-between items-center px-2 opacity-30">
          <TechLabel text="SRC: PARTNER-DIRECTORY-2026" />
          <div className="flex-1 border-t border-dashed border-black/20 mx-8" />
          <TechLabel text="STATUS: CERTIFIED" />
        </div>
      </div>
    </section>
  );
}
