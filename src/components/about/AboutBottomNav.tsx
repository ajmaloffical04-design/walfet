import React from 'react';
import { AboutButton } from './AboutButton';

export default function AboutBottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
      <div className="bg-white rounded-full px-8 py-2 flex items-center gap-6 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]">
        <span className="font-mondwest text-2xl font-semibold text-[#051A24]">V</span>
        <AboutButton variant="primary" className="!px-6 !py-2 text-sm">
          Start a chat
        </AboutButton>
      </div>
    </div>
  );
}
