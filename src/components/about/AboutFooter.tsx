import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AboutButton } from './AboutButton';

export default function AboutFooter() {
  return (
    <footer className="w-full mx-auto max-w-[1200px] py-12 px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 font-neue-montreal">
      {/* Left side */}
      <div>
        <AboutButton variant="primary">
          Start a chat
        </AboutButton>
      </div>

      {/* Right side */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <ArrowUpRight className="w-8 h-8 text-[#051A24] hidden md:block" />
        
        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <a href="/#services" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">Services</a>
            <a href="/work" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">Work</a>
            <a href="/about" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">About</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">x.com</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
