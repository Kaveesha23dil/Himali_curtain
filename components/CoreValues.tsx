"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Heart, Award } from "lucide-react";
import TechLabel from "./TechLabel";

const values = [
  {
    title: "Quality First",
    description: "We use only the finest materials to ensure durability and lasting beauty in every piece.",
    icon: <ShieldCheck size={32} />,
    color: "#b38e5d",
  },
  {
    title: "Innovation",
    description: "Constantly evolving our designs to match modern trends and technological advancements.",
    icon: <Lightbulb size={32} />,
    color: "#4d3a2e",
  },
  {
    title: "Customer Centric",
    description: "Your vision is our mission. We work tirelessly to bring your dream interior to life.",
    icon: <Heart size={32} />,
    color: "#b38e5d",
  },
  {
    title: "Excellence",
    description: "Award-winning craftsmanship that sets a new standard in the interior decor industry.",
    icon: <Award size={32} />,
    color: "#4d3a2e",
  },
];

export default function CoreValues() {
  return (
    <section className="py-32 lg:py-48 bg-[#fdfaf6]">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center text-center mb-24">
          <TechLabel text="OUR PRINCIPLES" className="mb-6 text-[#b38e5d] border-[#b38e5d]/20" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#4d3a2e] text-4xl lg:text-6xl font-black mb-8"
          >
            Values that <span className="text-[#b38e5d]">Define Us</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#b38e5d] rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -15 }}
              className="bg-white p-12 lg:p-14 rounded-[50px] lg:rounded-[60px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(179,142,93,0.1)]"
            >
              <div 
                className="mb-10 p-6 lg:p-8 rounded-[30px] lg:rounded-[40px] text-white shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ backgroundColor: value.color }}
              >
                {value.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-[#4d3a2e] mb-6">{value.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
