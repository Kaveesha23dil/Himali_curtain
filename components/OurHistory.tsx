"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { History, Target, Users } from "lucide-react";
import Image from "next/image";
import TechLabel from "./TechLabel";

const milestones = [
  {
    year: "2011",
    title: "The Beginning",
    description: "Himali Curtain was founded with a vision to provide premium interior solutions in the local market.",
    icon: <History size={24} />,
    image: "/milestone-1.png",
  },
  {
    year: "2015",
    title: "Expanding Horizons",
    description: "Expanded our catalog to include hotel and stage curtains, catering to large-scale commercial projects.",
    icon: <Target size={24} />,
    image: "/milestone-2.png",
  },
  {
    year: "2021",
    title: "Modern Revamp",
    description: "Integrated modern design technologies and bespoke customization for every unique customer need.",
    icon: <Users size={24} />,
    image: "/milestone-3.png",
  },
];

export default function OurHistory() {
  return (
    <section className="py-32 lg:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Left Side: Title & Intro */}
          <div className="lg:w-2/5 sticky top-32 h-fit">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[1px] h-12 bg-[#b38e5d]" />
              <TechLabel text="OUR HISTORY" className="border-none p-0 text-[#b38e5d] font-black" />
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#4d3a2e] text-5xl lg:text-7xl font-black mb-10 leading-[1.1]"
            >
              The Story <br />
              <span className="text-[#b38e5d]/60">Beyond the Fabric</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-500 text-xl leading-relaxed mb-12 max-w-md"
            >
              For more than a decade, we have been more than just a curtain provider. We are storytellers through design.
            </motion.p>
            
            <div className="flex items-center gap-6">
              <div className="bg-[#f8f3eb] p-6 rounded-[30px] border border-[#b38e5d]/10">
                <span className="block text-4xl font-black text-[#b38e5d]">15+</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years of Artistry</span>
              </div>
            </div>
          </div>

          {/* Right Side: Milestones */}
          <div className="lg:w-3/5 space-y-40 lg:space-y-64">
            {milestones.map((milestone, index) => (
              <MilestoneItem key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneItem({ milestone, index }: { milestone: any; index: number }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
      className="relative"
    >
      <div className="group relative mb-12">
        <div className="relative h-[450px] lg:h-[600px] rounded-[60px] lg:rounded-[100px] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
          <motion.div style={{ y: imgY }} className="absolute inset-0">
            <Image
              src={milestone.image}
              alt={milestone.title}
              fill
              className="object-cover scale-125"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          {/* Year Badge */}
          <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-xl">
             <span className="text-2xl font-black text-[#4d3a2e]">{milestone.year}</span>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-6">
           <div className="w-8 h-[2px] bg-[#b38e5d]" />
           <h4 className="text-2xl font-black text-[#b38e5d] uppercase tracking-wide">{milestone.title}</h4>
        </div>
        <p className="text-gray-600 text-xl leading-relaxed max-w-2xl font-medium">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
}
