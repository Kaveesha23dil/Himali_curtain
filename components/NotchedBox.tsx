"use client";

import React, { ReactNode } from "react";

interface NotchedBoxProps {
  children: ReactNode;
  className?: string;
  notchSize?: number;
}

export default function NotchedBox({ 
  children, 
  className = "", 
  notchSize = 40 
}: NotchedBoxProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{
        clipPath: `polygon(
          0 0, 
          calc(100% - ${notchSize}px) 0, 
          100% ${notchSize}px, 
          100% 100%, 
          0 100%
        )`,
      }}
    >
      {children}
    </div>
  );
}
