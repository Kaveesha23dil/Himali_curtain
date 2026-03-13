"use client";

import React from "react";

export default function BlueprintGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] z-0">
      {/* Horizontal Lines */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_bottom,rgb(0_0_0/1)_1px,transparent_1px)] bg-[size:100%_80px]" />
      {/* Vertical Lines */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgb(0_0_0/1)_1px,transparent_1px)] bg-[size:80px_100%]" />
      
      {/* Intersection Markers (+) */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_center,rgb(0_0_0/0.1)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [background-position:calc(40px_-_0.75px)_calc(40px_-_0.75px)]" />
    </div>
  );
}
