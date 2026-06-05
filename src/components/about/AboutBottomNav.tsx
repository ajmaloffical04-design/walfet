import React from 'react';
import { AboutButton } from './AboutButton';
import { Logo } from '@/components/Logo';

export default function AboutBottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
      <div className="bg-white rounded-full px-4 md:px-8 py-2 flex items-center gap-4 md:gap-6 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]">
        <Logo className="h-5 md:h-6 w-auto" />
        <AboutButton variant="primary" className="!px-5 md:!px-6 !py-2 text-[13px] md:text-sm whitespace-nowrap" href="https://wa.me/917012535190">
          Start a chat
        </AboutButton>
      </div>
    </div>
  );
}
