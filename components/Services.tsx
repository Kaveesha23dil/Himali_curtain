"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import { LayoutGrid, Hotel, Theater, Briefcase } from "lucide-react";

const services = [
  {
    title: "House Curtains",
    description: "Transform your living spaces with our elegant home curtain collection. From sheer drapes that filter sunlight to blackout fabrics for ultimate privacy, we tailor every detail to match your interior style.",
    image: "/services/house-curtains.png",
    icon: <LayoutGrid size={24} />,
    color: "#b38e5d"
  },
  {
    title: "Hotel Curtains",
    description: "Experience luxury and functionality with our premium hotel window treatments. We provide high-durability, flame-retardant, and sound-insulating fabrics that create a serene atmosphere for your guests.",
    image: "/services/hotel-curtains.png",
    icon: <Hotel size={24} />,
    color: "#4d3a2e"
  },
  {
    title: "Stage Curtains",
    description: "Make every performance grand with our professional theater and stage curtains. Crafted from heavy velvet and premium fabrics, our curtains offer perfect draping and acoustic excellence.",
    image: "/services/stage-curtains.png",
    icon: <Theater size={24} />,
    color: "#b38e5d"
  },
  {
    title: "Office Curtains",
    description: "Boost productivity and aesthetics with our sleek corporate window solutions. Our range of vertical blinds, roller shades, and modern curtains provide perfect light control for a professional environment.",
    image: "/services/office-curtains.png",
    icon: <Briefcase size={24} />,
    color: "#4d3a2e"
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which card is active based on scroll progress
  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      const cardIndex = Math.floor(v * services.length);
      if (cardIndex !== activeCard && cardIndex < services.length) {
        setActiveCard(cardIndex);
      }
    });
  }, [scrollYProgress, activeCard]);

  return (
    <section ref={containerRef} className="relative bg-[#fdfaf6]">
      {/* Sticky Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#b38e5d]/5 rounded-full blur-[100px]" />
         <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#4d3a2e]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 min-h-[400vh]">
          
          {/* Left Column: Sticky Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-[20vh] h-[60vh] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-start"
                >
                  <div 
                    className="p-3.5 rounded-2xl mb-6 shadow-md transition-all duration-500 border"
                    style={{ 
                      backgroundColor: services[activeCard].color,
                      color: "white",
                      borderColor: services[activeCard].color + "20"
                    }}
                  >
                    {services[activeCard].icon}
                  </div>

                  <span className="text-[#b38e5d] font-bold tracking-[0.3em] uppercase text-[10px] mb-4">SERVICE {activeCard + 1}</span>

                  <h2 
                    className="text-5xl lg:text-7xl font-black mb-8 leading-[1.1] transition-all duration-500 text-[#4d3a2e]"
                  >
                    {services[activeCard].title}
                  </h2>

                  <p 
                    className="text-base lg:text-lg leading-relaxed transition-all duration-500 max-w-lg text-[#6b7280]"
                  >
                    {services[activeCard].description}
                  </p>
                  
                  <motion.button 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="mt-12 flex items-center gap-4 text-[#b38e5d] text-xs font-black uppercase tracking-[0.2em] group pointer-events-auto"
                  >
                    <span>EXPLORE COLLECTION</span>
                    <span className="w-12 h-[2px] bg-[#b38e5d]/40 group-hover:w-16 group-hover:bg-[#b38e5d] transition-all duration-500" />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Sticky Image */}
          <div className="hidden lg:block w-1/2">
            <div className="sticky top-[15vh] h-[70vh] w-full rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={services[activeCard].image}
                    alt={services[activeCard].title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>
              
              {/* Progress Indicator */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                {services.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-1 transition-all duration-500 rounded-full ${
                      activeCard === index ? "h-12 bg-white" : "h-3 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Images (Sequential) */}
          <div className="lg:hidden w-full space-y-12">
             {/* Note: In a real implementation, mobile might use a simpler layout, but for this WOW effect, stacking with small animations works well */}
          </div>

        </div>
      </div>
    </section>
  );
}
