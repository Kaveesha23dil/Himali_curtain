"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Share2, Facebook, Instagram, MessageSquare } from "lucide-react";

const socialLinks = [
  { icon: <Facebook size={18} />, href: "#", color: "#4267B2" },
  { icon: <Instagram size={18} />, href: "#", color: "#E1306C" },
  { icon: <MessageSquare size={18} />, href: "#", color: "#25D366" }, // WhatsApp
];

export default function ContactInfoCard() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Info Card (Dark) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="w-full lg:w-2/5 bg-[#4d3a2e] rounded-[60px] lg:rounded-[100px] p-12 lg:p-16 text-white relative flex flex-col justify-between shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-[#b38e5d] text-sm font-bold uppercase tracking-[0.3em] mb-10 block">Reach Out</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-12 leading-tight">We're here to <br /><span className="text-[#b38e5d]/60">discuss your project.</span></h2>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="bg-[#b38e5d] p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="block text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Phone & Mobile</span>
                    <span className="block text-xl font-bold">+94 77 666 55 33</span>
                    <span className="block text-xl font-bold">+94 77 185 98 41</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="bg-[#b38e5d] p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="block text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Write to Us</span>
                    <span className="block text-xl font-bold">himalicurtain32@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="bg-[#b38e5d] p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="block text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Our Studio</span>
                    <span className="block text-lg font-bold">gallenawaththa, nahalla, <br />neboda</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Share/Social Button */}
            <div className="mt-16 flex items-center justify-between">
               <div className="flex gap-4">
                 {socialLinks.map((social, i) => (
                   <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="bg-white/10 p-3 rounded-full backdrop-blur-md cursor-pointer hover:bg-[#b38e5d] transition-colors"
                   >
                     {social.icon}
                   </motion.div>
                 ))}
               </div>
               
               <motion.button 
                whileHover={{ rotate: 15 }}
                className="bg-white text-[#4d3a2e] p-4 rounded-2xl shadow-xl flex items-center gap-3 font-bold text-sm"
               >
                 <Share2 size={18} />
                 SHARE
               </motion.button>
            </div>
          </motion.div>

          {/* Right Side: Introduction Text */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center lg:pl-12">
            <div className="w-12 h-1 bg-[#b38e5d] mb-8" />
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#4d3a2e] text-3xl lg:text-4xl font-black mb-8 leading-tight"
            >
              Himali Curtain is committed to delivering <span className="text-[#b38e5d]">excellence and innovation</span> in every interior solution.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-500 text-lg leading-relaxed max-w-2xl"
            >
              Whether you need advice on fabric selection, a custom quote for a large-scale hotel project, or simply want to learn more about our process, our expert team is ready to assist you. 
              <br /><br />
              Visit our studio to experience our materials first-hand and find the perfect match for your home or office.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
