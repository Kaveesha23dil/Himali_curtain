"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TechLabel from "./TechLabel";

const galleryImages = [
  {
    src: "/gallery-1.png",
    title: "Fabric Selection",
    category: "Materials",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/gallery-2.png",
    title: "Expert Craftsmanship",
    category: "Workshop",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery-3.png",
    title: "Modern Installation",
    category: "Process",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/gallery-4.png",
    title: "Luxury Details",
    category: "Finish",
    span: "col-span-1 row-span-1",
  },
];

export default function WorkshopGallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center text-center mb-16">
          <TechLabel text="BEHIND THE SCENES" className="mb-4" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#4d3a2e] text-4xl lg:text-5xl font-black mb-6"
          >
            The Art of <span className="text-[#b38e5d]">Curtain Making</span>
          </motion.h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Every piece we create is a testament to our commitment to quality, 
            combining traditional craftsmanship with modern design precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-[800px]">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`relative overflow-hidden rounded-[60px] group shadow-xl border border-black/5 ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[#b38e5d] text-sm font-bold uppercase tracking-widest mb-2">
                  {image.category}
                </span>
                <h3 className="text-white text-2xl font-bold">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
