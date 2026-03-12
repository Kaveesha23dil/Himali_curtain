"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Ruler, Heart, DollarSign, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "15+ Years Expertise",
    description: "With more than a decade of decorating windows, we ensure that you work with the best team in hand.",
    icon: <Award className="w-6 h-6" />,
    side: "left"
  },
  {
    title: "Best Architectural Designs",
    description: "We house some of the finest architectural designers in the trade to bring you classy and sophisticated designs.",
    icon: <Ruler className="w-6 h-6" />,
    side: "left"
  },
  {
    title: "Quality Customer Service",
    description: "Our friendly team is here to assist you with every step, from selection to installation.",
    icon: <Heart className="w-6 h-6" />,
    side: "left"
  },
  {
    title: "Affordable Rates",
    description: "Our range doesn't break the bank. We offer superior value, high quality blinds to suit your budget.",
    icon: <DollarSign className="w-6 h-6" />,
    side: "right"
  },
  {
    title: "24/7 Support",
    description: "We are one call away, all 7 days of the week. We make sure that your concern is our number one priority.",
    icon: <Headphones className="w-6 h-6" />,
    side: "right"
  },
  {
    title: "Guaranteed Works",
    description: "We guarantee a lifetime shelf life on all our products and services with our quality warranty.",
    icon: <ShieldCheck className="w-6 h-6" />,
    side: "right"
  }
];

export default function WhyChooseUs() {
  const leftFeatures = features.filter(f => f.side === "left");
  const rightFeatures = features.filter(f => f.side === "right");

  return (
    <section className="py-24 bg-[#fdfaf6] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#b38e5d] animate-pulse" />
            <span className="text-[#b38e5d] font-bold tracking-[0.3em] uppercase text-[10px]">AMAZING FACTS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-[#4d3a2e]"
          >
            Why Choose Us
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Features */}
          <div className="w-full lg:w-1/3 flex flex-col gap-10 lg:gap-14">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#b38e5d] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-black text-[#4d3a2e] mb-2">{feature.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Image */}
          <div className="w-full lg:w-1/3 flex justify-center order-first lg:order-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]"
            >
              {/* Decorative Rings */}
              <div className="absolute inset-[ -20px] rounded-full border border-[#b38e5d]/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[ -10px] rounded-full border border-[#b38e5d]/20" />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)]">
                <Image
                  src="/why-choose-us.png"
                  alt="Why Choose Us"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Right Features */}
          <div className="w-full lg:w-1/3 flex flex-col gap-10 lg:gap-14">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#b38e5d] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-black text-[#4d3a2e] mb-2">{feature.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
