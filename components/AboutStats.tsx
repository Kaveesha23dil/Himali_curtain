"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const stats = [
  { label: "Happy Clients", value: 5000, suffix: "+" },
  { label: "Completed Projects", value: 12000, suffix: "+" },
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Awards Won", value: 24, suffix: "" },
];

export default function AboutStats() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    const countElements = statsRef.current.querySelectorAll(".stat-value");
    
    countElements.forEach((el) => {
      const targetValue = parseInt(el.getAttribute("data-value") || "0");
      
      gsap.fromTo(el, 
        { innerText: "0" }, 
        {
          innerText: targetValue,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          onUpdate: function() {
            el.innerHTML = Math.ceil(this.targets()[0].innerText).toLocaleString();
          }
        }
      );
    });
  }, []);

  return (
    <section ref={statsRef} className="py-32 bg-[#4d3a2e] relative overflow-hidden mx-6 lg:mx-12 rounded-[60px] lg:rounded-[100px] mb-32">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -mr-64 -mt-64 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#b38e5d]/10 rounded-full -ml-64 -mb-64 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-baseline mb-4 group-hover:scale-110 transition-transform duration-500">
                <span 
                  className="stat-value text-6xl lg:text-8xl font-black text-[#b38e5d] tracking-tighter drop-shadow-2xl"
                  data-value={stat.value}
                >
                  0
                </span>
                <span className="text-5xl lg:text-6xl font-black text-[#b38e5d] tracking-tighter ml-1">
                  {stat.suffix}
                </span>
              </div>
              <div className="w-12 h-[2px] bg-[#b38e5d]/30 mb-6" />
              <span className="text-white/80 text-sm lg:text-base font-bold uppercase tracking-[0.3em] leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
