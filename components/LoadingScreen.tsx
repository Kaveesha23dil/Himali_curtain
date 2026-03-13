"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechLabel from "./TechLabel";
import BlueprintGrid from "./BlueprintGrid";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "INITIALIZING CORE ASSETS...",
    "MAPPING PRECISION GRIDS...",
    "LOADING FABRIC TEXTURES...",
    "CALIBRATING OPTICS...",
    "SYSTEM READY"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setComplete(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6 overflow-hidden"
        >
          <BlueprintGrid />
          
          <div className="relative w-full max-w-md">
            {/* Header */}
            <div className="flex justify-between items-end mb-12">
              <div className="flex flex-col">
                <TechLabel text="SYSTEM BOOT SEQUENCE" className="text-[#b38e5d] mb-2" />
                <h1 className="text-3xl font-black text-[#4d3a2e] leading-none">HIMALI <br /> CURTAIN</h1>
              </div>
              <div className="text-right">
                <span className="text-4xl font-mono font-black text-[#4d3a2e]">
                  {progress.toString().padStart(3, '0')}%
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-[2px] w-full bg-[#4d3a2e]/10 mb-8 overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#b38e5d]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Steps Console */}
            <div className="space-y-2">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: activeStep >= index ? 1 : 0, 
                    x: activeStep >= index ? 0 : -10 
                  }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${activeStep > index ? 'bg-[#b38e5d]' : activeStep === index ? 'bg-[#b38e5d] animate-pulse' : 'bg-gray-200'}`} />
                  <span className={`text-[10px] font-mono tracking-widest ${activeStep === index ? 'text-[#4d3a2e] font-bold' : 'text-gray-400'}`}>
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom ID */}
            <div className="absolute -bottom-32 left-0 flex justify-between w-full opacity-30">
              <TechLabel text="VER: 2026.03.OS" />
              <TechLabel text="REF: INT-PRC-LO01" />
            </div>
          </div>

          {/* Decorative Corner Marks */}
          <div className="absolute top-10 left-10 w-4 h-4 border-t-2 border-l-2 border-[#b38e5d]/30" />
          <div className="absolute top-10 right-10 w-4 h-4 border-t-2 border-r-2 border-[#b38e5d]/30" />
          <div className="absolute bottom-10 left-10 w-4 h-4 border-b-2 border-l-2 border-[#b38e5d]/30" />
          <div className="absolute bottom-10 right-10 w-4 h-4 border-b-2 border-r-2 border-[#b38e5d]/30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
