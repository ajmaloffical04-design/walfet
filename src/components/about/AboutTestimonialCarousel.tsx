"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

const TESTIMONIALS = [
  {
    quote: "With very little guidance team delivered designs that were consistently spot on...",
    name: "Marcus Anderson",
    role: "CEO, Data.storage",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "Viktor led the creation of our best fundraising deck to date!...",
    name: "alexwu",
    role: "Founder, Nexgate",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "Working with Viktor transformed our product vision...",
    name: "James Mitchell",
    role: "VP Product, LaunchPad",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "The design quality exceeded our expectations...",
    name: "Rachel Foster",
    role: "Co-founder, Nexus Labs",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "Incredible work from start to finish...",
    name: "David Zhang",
    role: "Head of Design, Paradigm Labs",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export default function AboutTestimonialCarousel() {
  const { ref, isInView } = useInViewAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section ref={ref} className="w-full py-20 px-6 font-neue-montreal overflow-hidden">
      <div 
        className={`flex flex-col md:flex-row justify-between items-start md:items-end md:max-w-4xl md:ml-auto mb-10 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-4 md:mb-0">
          What <span className="font-mondwest">builders</span> say
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-black text-black" />
            ))}
          </div>
          <span className="text-[#0D212C] font-medium">Clutch 5/5</span>
        </div>
      </div>

      <div 
        className={`relative ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-800 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TESTIMONIALS.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="min-w-full md:min-w-[427.5px] px-3 shrink-0"
              >
                <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8 h-full flex flex-col justify-between">
                  <div>
                    <svg className="w-8 h-8 mb-6 text-[#0D212C]/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-base text-[#0D212C] leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-sm text-[#0D212C]">{testimonial.name}</div>
                      <div className="text-sm text-[#273C46]">↗ {testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8 md:max-w-4xl md:ml-auto">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#051A24] hover:text-white hover:border-[#051A24] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#051A24] hover:text-white hover:border-[#051A24] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
