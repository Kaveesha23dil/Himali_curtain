"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 p-4 sm:p-6 lg:p-8 pointer-events-none`}
    >
      <div className="max-w-[1400px] mx-auto flex items-start justify-between relative">
        {/* Logo Area */}
        <Link href="/" className="pointer-events-auto">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white rounded-2xl p-4 shadow-xl flex flex-col items-center min-w-[120px]"
          >
            <div className="relative w-12 h-12 mb-2">
              <Image
                src="/logo.png"
                alt="Himali Curtain Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <span className="block text-[10px] font-black text-gray-800 uppercase tracking-tight leading-none">Himali Curtain</span>
              <span className="block text-[7px] text-gray-400 italic mt-1 font-medium font-serif italic">Quality you deserve</span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation and Contact Banner */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex-1 max-w-[1100px] ml-4 sm:ml-8 pointer-events-auto hidden md:block"
        >
          <div className={`
            ${isScrolled ? 'bg-[#4d3a2e]/90 backdrop-blur-md' : 'bg-[#4d3a2e]'} 
            rounded-full px-6 py-2.5 flex items-center justify-between shadow-2xl border border-white/10 transition-all duration-500
          `}>
            {/* Contact Info */}
            <div className="flex items-center gap-3">
              <div className="bg-[#b38e5d] p-2 rounded-full text-white shadow-lg">
                <Phone size={14} className="fill-current" />
              </div>
              <span className="text-white text-sm font-semibold tracking-wide">+94 77 666 55 33</span>
            </div>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.path} 
                  className={`text-sm font-bold tracking-wider uppercase transition-all relative
                    ${pathname === link.path 
                      ? "text-[#b38e5d] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#b38e5d]" 
                      : "text-white/90 hover:text-[#b38e5d]"
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="relative hidden md:flex items-center">
              <input
                type="text"
                placeholder="Search ..."
                className="bg-white rounded-full py-2 pl-5 pr-12 text-sm focus:outline-none w-44 lg:w-56 shadow-inner placeholder:text-gray-400 font-medium"
              />
              <button className="absolute right-1 px-3 py-1.5 bg-[#b38e5d] rounded-full text-white hover:bg-[#a07d50] transition-all flex items-center justify-center shadow-md">
                <Search size={14} strokeWidth={3} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile menu toggle */}
        <div className="md:hidden pointer-events-auto">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-[#4d3a2e] p-4 rounded-2xl text-white shadow-xl"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-[#4d3a2e] rounded-3xl p-8 shadow-2xl z-[101] md:hidden pointer-events-auto border border-white/10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-black tracking-wider uppercase transition-all
                    ${pathname === link.path ? "text-[#b38e5d]" : "text-white"}
                  `}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 w-full my-2" />
              <div className="flex items-center gap-4 text-white">
                <div className="bg-[#b38e5d] p-3 rounded-full">
                  <Phone size={20} className="fill-current" />
                </div>
                <span className="text-lg font-bold">+94 77 666 55 33</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
