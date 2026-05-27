import React from 'react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { AboutButton } from './AboutButton';

export default function AboutHero() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section ref={ref} className="mx-auto max-w-[440px] px-6 pt-12 md:pt-16 flex flex-col items-center text-center">
      <div 
        className={`font-mondwest text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        Viktor Oddy
      </div>

      <div 
        className={`font-mono text-xs md:text-sm text-[#051A24] mb-2 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        The creative studio of Viktor Oddy
      </div>

      <h1 
        className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap font-neue-montreal ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.3s' }}
      >
        Build the <span className="font-mondwest">next wave,</span><br />
        <span className="font-mondwest">the bold way.</span>
      </h1>

      <div 
        className={`flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6 text-left w-full font-neue-montreal ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.4s' }}
      >
        <p>
          I spent seven years at Apple crafting products used by over a billion people. I founded Vortex Studio to bring that same level of thinking to innovators shaping what comes next.
        </p>
        <p>
          The studio is deliberately small. I guide the creative vision on every project, backed by a veteran design crew that moves fast without cutting corners.
        </p>
        <p>
          Projects start at $5,000 per month.
        </p>
      </div>

      <div 
        className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 w-full ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.5s' }}
      >
        <AboutButton variant="primary" className="w-full sm:w-auto">
          Start a chat
        </AboutButton>
        <AboutButton variant="secondary" className="w-full sm:w-auto">
          View projects
        </AboutButton>
      </div>
    </section>
  );
}
