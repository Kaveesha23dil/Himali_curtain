"use client";

import React from "react";

interface TechLabelProps {
  text: string;
  className?: string;
}

export default function TechLabel({ text, className = "" }: TechLabelProps) {
  return (
    <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#b38e5d] font-mono ${className}`}>
      {text}
    </span>
  );
}
