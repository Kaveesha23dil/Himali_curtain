"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import TechLabel from "./TechLabel";
import BlueprintGrid from "./BlueprintGrid";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-20 lg:py-32 bg-white border-t border-black/5 overflow-hidden">
      <BlueprintGrid />
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20"
        >
          {/* Brand Info */}
          <div className="lg:col-span-1 border-r border-black/5 pr-12">
            <h2 className="text-3xl font-black text-[#4d3a2e] mb-6">Himali <br /> Curtain</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Precision window treatments and luxury fabric solutions for modern homes and commercial spaces. Elevating interiors since 2011.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-3 rounded-xl border border-black/5 hover:border-[#b38e5d] transition-colors">
                <Instagram className="w-5 h-5 text-[#4d3a2e]" />
              </Link>
              <Link href="#" className="p-3 rounded-xl border border-black/5 hover:border-[#b38e5d] transition-colors">
                <Facebook className="w-5 h-5 text-[#4d3a2e]" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-r border-black/5 pr-12">
            <TechLabel text="SYSTEM: NAVIGATION" className="mb-8" />
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group flex items-center justify-between text-[#4d3a2e] font-bold hover:text-[#b38e5d] transition-colors">
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="border-r border-black/5 pr-12">
            <TechLabel text="INFO: CONTACT US" className="mb-8" />
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#b38e5d] shrink-0" />
                <span className="text-gray-600 text-sm">gallenawaththa, nahalla, <br />neboda</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#b38e5d] shrink-0" />
                <span className="text-gray-600 text-sm">+94 77 666 55 33</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#b38e5d] shrink-0" />
                <span className="text-gray-600 text-sm">himalicurtain32@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <TechLabel text="SUBSCRIBE: UPDATES" className="mb-8" />
            <p className="text-gray-500 text-sm mb-6">Stay informed about our latest fabric collections and motorized solutions.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL@ADDRESS.COM" 
                className="w-full py-4 px-6 bg-transparent border border-black/10 rounded-xl focus:border-[#4d3a2e] outline-none text-xs font-mono tracking-widest"
              />
              <button className="absolute right-2 top-2 p-2 bg-[#4d3a2e] text-white rounded-lg hover:bg-[#b38e5d] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <TechLabel text={`© ${currentYear} HIMALI CURTAIN`} className="text-gray-400" />
            <TechLabel text="REF: CORE-V2.0" className="text-gray-400" />
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#4d3a2e]">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#4d3a2e]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
