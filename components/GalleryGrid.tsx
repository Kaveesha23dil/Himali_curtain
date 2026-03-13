"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TechLabel from "./TechLabel";
import { ArrowUpRight, MapPin, Tag } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luxury Silk Installation",
    client: "Residential Estate",
    location: "Colombo 07",
    category: "Luxury Curtains",
    image: "/projects/project1.png",
    description: "Premium floor-to-ceiling silk curtains with motorized tracks for a grand living space.",
    size: "large"
  },
  {
    id: 2,
    title: "Corporate Smart Blinds",
    client: "Tech Innovations HQ",
    location: "Colombo 03",
    category: "Office Blinds",
    image: "/projects/project2.png",
    description: "Zebra blinds integrated with smart building systems for optimal light control.",
    size: "small"
  },
  {
    id: 3,
    title: "Grand Palace Drapes",
    client: "Heritage Boutique Hotel",
    location: "Kandy",
    category: "Hotel Drapes",
    image: "/projects/project3.png",
    description: "Custom heavy velvet drapes with gold embroidery for a traditional hotel lobby.",
    size: "medium"
  },
  {
    id: 4,
    title: "Minimalist Haven",
    client: "Modern Apartment",
    location: "Rajagiriya",
    category: "Linen Curtains",
    image: "/projects/project4.png",
    description: "Lightweight linen curtains offering privacy while maintaining a bright, airy feel.",
    size: "medium"
  },
  {
    id: 5,
    title: "Grand Stage Curtains",
    client: "National Performing Arts Center",
    location: "Colombo 07",
    category: "Stage Curtains",
    image: "/projects/project5.png",
    description: "Heavy-duty crimson velvet stage curtains with fire-retardant treatment.",
    size: "large"
  }
];

export default function GalleryGrid() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-start mb-16">
          <TechLabel text="LATEST PROJECTS" className="mb-4" />
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#4d3a2e] text-4xl lg:text-5xl font-black max-w-xl"
            >
              Crafting <span className="text-[#b38e5d]">Exceptional</span> Spaces 
            </motion.h2>
            <p className="text-gray-500 text-lg max-w-md leading-relaxed">
              Explore our diverse portfolio of residential and commercial 
              installations across Sri Lanka.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group relative overflow-hidden rounded-[40px] shadow-2xl border border-black/5 
                ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${project.size === 'medium' ? 'md:row-span-2' : ''}
              `}
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-[#b38e5d] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/60">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#b38e5d]" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Tag size={12} className="text-[#b38e5d]" />
                      {project.client}
                    </div>
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 -translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight size={24} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-12 rounded-[60px] bg-[#fdfaf6] border border-[#4d3a2e]/5 flex flex-col items-center text-center"
        >
          <h3 className="text-[#4d3a2e] text-3xl font-bold mb-4">Have a similar project in mind?</h3>
          <p className="text-gray-500 max-w-xl mb-8">
            Our experts are ready to help you bring your vision to life with bespoke 
            curtain solutions tailored to your space.
          </p>
          <a 
            href="/contact" 
            className="group flex items-center gap-3 bg-[#4d3a2e] text-white px-8 py-4 rounded-full hover:bg-[#b38e5d] transition-all duration-500 shadow-xl"
          >
            <span className="font-bold uppercase tracking-wider">Start Your Project</span>
            <div className="bg-white/20 p-1.5 rounded-full group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={18} strokeWidth={3} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
