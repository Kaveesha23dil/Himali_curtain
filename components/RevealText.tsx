"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlight?: string;
  highlightClassName?: string;
}

export default function RevealText({ 
  text, 
  className = "", 
  delay = 0,
  highlight = "",
  highlightClassName = "text-[#b38e5d]"
}: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".word-inner");
    
    gsap.fromTo(
      words,
      { y: "105%", skewY: 7 },
      {
        y: "0%",
        skewY: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.1,
        delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay, text]); // Added text to dependencies to re-run on text change

  return (
    <div ref={containerRef} className={`overflow-hidden py-1 ${className}`}>
      <div className="flex flex-wrap">
        {text.split(" ").map((word, i) => {
          const isHighlighted = highlight && word.toLowerCase().includes(highlight.toLowerCase());
          return (
            <span key={i} className="relative inline-block overflow-hidden mr-[0.2em] pb-[0.1em]">
              <span className={`word-inner inline-block translate-y-[105%] ${isHighlighted ? highlightClassName : ""}`}>
                {word}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
