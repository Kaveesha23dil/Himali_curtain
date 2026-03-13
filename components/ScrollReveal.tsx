"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "@/lib/gsap";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
}

export default function ScrollReveal({ 
  children, 
  className = "", 
  direction = "up",
  delay = 0 
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const initialProps: gsap.TweenVars = { opacity: 0 };
    const animateProps: gsap.TweenVars = { 
      opacity: 1, 
      duration: 1.2, 
      ease: "power3.out",
      delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
      }
    };

    switch (direction) {
      case "up":
        initialProps.y = 50;
        animateProps.y = 0;
        break;
      case "down":
        initialProps.y = -50;
        animateProps.y = 0;
        break;
      case "left":
        initialProps.x = 50;
        animateProps.x = 0;
        break;
      case "right":
        initialProps.x = -50;
        animateProps.x = 0;
        break;
    }

    gsap.fromTo(containerRef.current, initialProps, animateProps);
  }, [direction, delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
