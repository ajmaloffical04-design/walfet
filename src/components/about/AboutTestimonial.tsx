"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export default function AboutTestimonial() {
  const { ref, isInView } = useInViewAnimation();
  const imageRef = useRef<HTMLImageElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const rect = imageRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the image is from the center of the viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const centerOffset = (rect.top + rect.height / 2) - (viewportHeight / 2);
        // Map the center offset to a parallax value (e.g. max 100px up/down)
        const parallaxValue = (centerOffset / viewportHeight) * 100;
        setOffset(parallaxValue);
      }
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={ref} className="py-12 px-6 mx-auto max-w-2xl flex flex-col items-center text-center">
      <div 
        className={`mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} 
        style={{ animationDelay: '0.1s' }}
      >
        <Quote className="w-6 h-6 text-slate-900 mx-auto" />
      </div>

      <h2 
        className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-8 font-neue-montreal ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        "I left <span className="font-mondwest">Apple</span> to build the studio I always wanted to work with"
      </h2>

      <div 
        className={`text-sm italic text-[#273C46] mb-16 font-neue-montreal ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.3s' }}
      >
        Viktor Oddy
      </div>



      <div 
        className={`w-full max-w-xs relative overflow-hidden rounded-2xl shadow-lg ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.5s' }}
      >
        <img
          ref={imageRef}
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85"
          alt="Chris Halaska"
          className="w-full h-auto object-cover transition-transform duration-75 ease-out scale-110"
          style={{ transform: `translateY(${offset}px) scale(1.1)` }}
        />
      </div>
    </section>
  );
}
