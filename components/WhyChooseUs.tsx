"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Ruler, Heart, DollarSign, Headphones, ShieldCheck, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#fdfaf6] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-[2px] bg-[#b38e5d]" />
              <span className="text-[#b38e5d] font-bold tracking-[0.2em] uppercase text-[11px]">Why Choose Us</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-7xl font-black text-[#4d3a2e] leading-tight"
            >
              Elevating Interiors <br /> with Expertise.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#6b7280] text-lg max-w-sm"
          >
            We combine tradition with modern aesthetics to create window treatments that reflect your personality.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          
          {/* Card 1: Main Expertise (Large) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative group rounded-[40px] overflow-hidden bg-white shadow-sm border border-black/5"
          >
            <Image
              src="/bento-expertise.png"
              alt="Expertise"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-[#b38e5d] w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl">
                <Award size={24} />
              </div>
              <h3 className="text-white text-3xl font-black mb-4 leading-tight">15+ Years of <br /> Curated Excellence</h3>
              <p className="text-white/70 text-sm max-w-xs mb-6">
                A decade of experience in transforming homes across the island with premium fabrics and bespoke designs.
              </p>
              <button className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest group/btn">
                Our Story <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Professional Designs (Small) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 relative group rounded-[40px] overflow-hidden bg-gray-900 p-8 flex flex-col justify-between"
          >
            <Image
              src="/bento-design.png"
              alt="Design Process"
              fill
              className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="relative z-10 bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center text-white">
              <Ruler size={20} />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-xl font-bold mb-2">Architectural <br /> Precise Designs</h3>
              <p className="text-white/70 text-xs">Classy and sophisticated designs tailored to your space.</p>
            </div>
          </motion.div>

          {/* Card 3: 24/7 Support (Medium) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 relative group rounded-[40px] overflow-hidden bg-white p-8 flex flex-col justify-between border border-black/5"
          >
            <Image
              src="/bento-support.png"
              alt="Support"
              fill
              className="object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="relative z-10 bg-[#b38e5d]/10 w-10 h-10 rounded-xl flex items-center justify-center text-[#b38e5d]">
              <Headphones size={20} />
            </div>
            <div className="relative z-10">
              <h3 className="text-[#4d3a2e] text-xl font-bold mb-2">At Your <br /> Service 24/7</h3>
              <p className="text-[#6b7280] text-xs font-medium">Dedicated support team for selection to installation.</p>
            </div>
          </motion.div>

          {/* Card 4: Guaranteed Works (Long) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 relative group rounded-[40px] overflow-hidden bg-[#f3f4f6]"
          >
            <div className="absolute inset-0 flex">
              <div className="w-1/2 p-10 flex flex-col justify-center">
                <div className="bg-[#b38e5d] w-10 h-10 rounded-xl flex items-center justify-center text-white mb-6">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-[#4d3a2e] text-2xl font-black mb-2">Lifetime <br /> Warranty</h3>
                <p className="text-[#6b7280] text-sm font-medium">Guranteed shelf life on all our products.</p>
              </div>
              <div className="w-1/2 relative overflow-hidden">
                <Image
                  src="/bento-quality.png"
                  alt="Quality Texture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar: Affordable & Inquiry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 bg-white rounded-[30px] p-4 flex flex-col md:flex-row items-center justify-between shadow-sm border border-black/5"
        >
          <div className="flex items-center gap-4 px-4 py-2">
            <div className="bg-[#b38e5d] p-2 rounded-full text-white">
              <DollarSign size={16} />
            </div>
            <span className="text-[#4d3a2e] font-bold text-sm">Affordable Luxury Rates - High quality blinds to suit your budget.</span>
          </div>
          <button className="w-full md:w-auto bg-[#4d3a2e] text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#3d2e25] transition-colors shadow-lg">
            Start Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
