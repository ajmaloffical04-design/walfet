"use client";

import React from 'react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { AboutButton } from './AboutButton';

export default function AboutPricing() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section ref={ref} className="w-full py-12 px-6 flex justify-center md:justify-end">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:max-w-4xl">
        
        {/* Card 1 - Dark */}
        <div 
          className={`bg-[#051A24] rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 shadow-inner flex flex-col justify-between font-neue-montreal ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <div>
            <h3 className="text-[22px] font-medium text-[#F6FCFF] mb-4">Monthly Partnership</h3>
            <p className="text-[#E0EBF0] mb-8 leading-relaxed">
              A dedicated creative design team.<br />
              You work directly with Viktor.
            </p>
          </div>
          <div>
            <div className="mb-6">
              <span className="text-2xl font-medium text-[#F6FCFF]">$5,000</span>
              <span className="block text-[#E0EBF0] text-sm mt-1">Monthly</span>
            </div>
            <div className="flex flex-col gap-3">
              <AboutButton variant="secondary" href="https://wa.me/917012535190" className="w-full">
                Start a chat
              </AboutButton>
              <AboutButton variant="tertiary" href="https://halaskastudio.com/book" className="w-full !bg-transparent !text-[#F6FCFF] border border-[#F6FCFF]/20 hover:!bg-white/10 shadow-none">
                How it works
              </AboutButton>
            </div>
          </div>
        </div>

        {/* Card 2 - Light */}
        <div 
          className={`bg-white rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col justify-between font-neue-montreal ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div>
            <h3 className="text-[22px] font-medium text-[#0D212C] mb-4">Custom Project</h3>
            <p className="text-[#273C46] mb-8 leading-relaxed">
              Fixed scope, fixed timeline.<br />
              Same team, same standards.
            </p>
          </div>
          <div>
            <div className="mb-6">
              <span className="text-2xl font-medium text-[#0D212C]">$5,000</span>
              <span className="block text-[#273C46] text-sm mt-1">Minimum</span>
            </div>
            <div className="flex flex-col gap-3">
              <AboutButton variant="tertiary" className="w-full" href="https://wa.me/917012535190">
                Start a chat
              </AboutButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
