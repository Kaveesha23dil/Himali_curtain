"use client";

import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-24 bg-white px-6 lg:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        className="w-full h-[500px] lg:h-[650px] relative rounded-[60px] lg:rounded-[100px] overflow-hidden shadow-2xl border-8 border-[#f8f3eb]"
      >
        <iframe 
          title="Himali Curtain Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.896792376483!2d79.87038165!3d6.8936997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25969566ba71f%3A0xb3531f82f232467d!2sHimali%20Curtain!5e0!3m2!1sen!2slk!4v1713383500000!5m2!1sen!2slk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-1000"
        ></iframe>
        
        {/* Overlay Info (Optional) */}
        <div className="absolute bottom-12 left-12 bg-[#4d3a2e] text-white p-8 rounded-[40px] shadow-2xl hidden md:block border border-white/10">
           <h4 className="text-xl font-black mb-2">Visit Our Studio</h4>
           <p className="text-white/60 text-sm font-medium">Open Mon - Sat: 9:00 AM - 6:00 PM</p>
        </div>
      </motion.div>
    </section>
  );
}
