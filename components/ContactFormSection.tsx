"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import TechLabel from "./TechLabel";

export default function ContactFormSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const mailtoUrl = `mailto:himalicurtain32@gmail.com?subject=New Message from ${formState.name}&body=Name: ${formState.name}%0D%0APhone: ${formState.phone}%0D%0AEmail: ${formState.email}%0D%0A%0D%0AMessage:%0D%0A${formState.message}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="py-24 bg-[#f8f3eb] mx-6 lg:mx-12 rounded-[60px] lg:rounded-[100px] mb-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Header Info */}
          <div className="lg:w-1/3">
            <TechLabel text="SEND A MESSAGE" className="mb-6 text-[#b38e5d] border-[#b38e5d]/20" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#4d3a2e] text-4xl lg:text-6xl font-black mb-8 leading-tight"
            >
              Let's craft your <br /><span className="text-[#b38e5d]">dream interior.</span>
            </motion.h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Our team will get back to you within 24 hours to discuss your requirements and schedule a consultation.
            </p>
            
            <div className="hidden lg:flex items-center gap-4 text-[#b38e5d]">
               <div className="w-12 h-[1px] bg-[#b38e5d]/30" />
               <span className="text-xs font-black uppercase tracking-[0.3em]">Himali Expertise</span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3">
             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[#4d3a2e] text-xs font-black uppercase tracking-widest pl-2">Your Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="bg-white px-8 py-5 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#b38e5d]/20 transition-all text-[#4d3a2e] placeholder:text-[#4d3a2e]/30 font-bold border border-black/5"
                  />
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-[#4d3a2e] text-xs font-black uppercase tracking-widest pl-2">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+94 XX XXX XX XX"
                    className="bg-white px-8 py-5 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#b38e5d]/20 transition-all text-[#4d3a2e] placeholder:text-[#4d3a2e]/30 font-bold border border-black/5"
                  />
                </div>

                <div className="flex flex-col gap-3 md:col-span-2">
                  <label className="text-[#4d3a2e] text-xs font-black uppercase tracking-widest pl-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="example@mail.com"
                    className="bg-white px-8 py-5 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#b38e5d]/20 transition-all text-[#4d3a2e] placeholder:text-[#4d3a2e]/30 font-bold border border-black/5"
                  />
                </div>

                <div className="flex flex-col gap-3 md:col-span-2">
                  <label className="text-[#4d3a2e] text-xs font-black uppercase tracking-widest pl-2">Your Message *</label>
                  <textarea 
                    rows={6}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="bg-white px-8 py-6 rounded-[35px] focus:outline-none focus:ring-2 focus:ring-[#b38e5d]/20 transition-all text-[#4d3a2e] placeholder:text-[#4d3a2e]/30 font-bold border border-black/5 resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2 flex justify-end mt-4">
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-[#4d3a2e] text-white pl-10 pr-6 py-5 rounded-full flex items-center gap-6 shadow-2xl hover:bg-[#b38e5d] transition-all duration-500"
                  >
                    <span className="text-sm font-black uppercase tracking-[0.2em]">Send Message</span>
                    <div className="bg-[#b38e5d] group-hover:bg-white group-hover:text-[#4d3a2e] p-3 rounded-full transition-colors">
                       <ArrowRight size={20} />
                    </div>
                  </motion.button>
                </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}
