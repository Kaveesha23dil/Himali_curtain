"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import TechLabel from "./TechLabel";
import BlueprintGrid from "./BlueprintGrid";
import NotchedBox from "./NotchedBox";

const testimonials = [
  {
    id: 1,
    name: "Samantha Wijesinghe",
    role: "Interior Architect",
    company: "S.W. Studios, Colombo",
    text: "The elegance and quality of their curtains completely redefined our interior. From the fabric selection to the final installation, every step was professional and perfect.",
    rating: 5,
    image: "/testimonial-1.png"
  },
  {
    id: 2,
    name: "Arjun Ratnayake",
    role: "Homeowner",
    company: "Pelawatte Residency",
    text: "Amazing attention to detail. The team understood exactly what I wanted for my living room and delivered beyond expectations. The motorized blinds are a game-changer.",
    rating: 5,
    image: "/testimonial-2.png"
  },
  {
    id: 3,
    name: "Dr. Nilani Perera",
    role: "Director",
    company: "Green Hospital",
    text: "We needed heavy-duty, cleanable stage curtains for our auditorium. Himali Curtains provided high-quality medical-grade fabric that looks stunning and meets all safety specs.",
    rating: 5,
    image: "/testimonial-3.png"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative w-full py-24 lg:py-40 bg-white overflow-hidden">
      <BlueprintGrid />
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16 lg:mb-24"
        >
          <TechLabel text="FEEDBACK: CLIENT VERDICT" className="mb-4" />
          <h2 className="text-[#4d3a2e] text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">Trusted by Professionals</h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              {/* Image with Notched Frame */}
              <div className="w-full lg:w-1/3">
                <NotchedBox notchSize={60} className="relative h-[400px] w-full shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={testimonials[current].image || "/experience.png"}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#4d3a2e]/20" />
                </NotchedBox>
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
                <Quote className="w-12 h-12 text-[#b38e5d] mb-8 opacity-20" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#b38e5d] text-[#b38e5d]" />
                  ))}
                </div>

                <p className="text-[#4d3a2e] text-2xl md:text-3xl font-medium leading-[1.4] mb-10 italic">
                  &quot;{testimonials[current].text}&quot;
                </p>

                <div className="flex flex-col border-l-2 border-[#b38e5d] pl-6">
                  <span className="text-xl font-black text-[#4d3a2e]">{testimonials[current].name}</span>
                  <div className="flex items-center gap-3 mt-1">
                    <TechLabel text={testimonials[current].role} />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500 text-sm">{testimonials[current].company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-start items-center gap-4 mt-16 md:mt-20 lg:pl-[calc(33.33%+80px)]">
            <button 
              onClick={prev}
              className="p-4 rounded-full border border-black/10 hover:border-[#b38e5d] hover:bg-[#b38e5d] hover:text-white transition-all group"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="p-4 rounded-full border border-black/10 hover:border-[#b38e5d] hover:bg-[#b38e5d] hover:text-white transition-all group"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="ml-4 flex gap-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 transition-all duration-300 ${current === i ? "w-8 bg-[#b38e5d]" : "w-4 bg-black/10"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
