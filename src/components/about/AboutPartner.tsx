"use client";

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { AboutButton } from './AboutButton';

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
];

interface SpawnedImage {
  id: number;
  x: number;
  y: number;
  rotation: number;
  src: string;
}

export default function AboutPartner() {
  const { ref, isInView } = useInViewAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [spawnedImages, setSpawnedImages] = useState<SpawnedImage[]>([]);
  const lastSpawnTime = useRef(0);
  const imageCounter = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastSpawnTime.current < 80) return;
    
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotation = Math.random() * 20 - 10; // -10 to +10 deg
    const src = IMAGES[Math.floor(Math.random() * IMAGES.length)];
    const id = imageCounter.current++;

    setSpawnedImages(prev => [...prev, { id, x, y, rotation, src }]);
    lastSpawnTime.current = now;

    setTimeout(() => {
      setSpawnedImages(prev => prev.filter(img => img.id !== id));
    }, 1000);
  }, []);

  return (
    <section ref={ref} className="w-full py-12 px-6">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={`relative mx-auto max-w-7xl py-48 rounded-[40px] shadow-sm overflow-hidden flex flex-col items-center justify-center text-center cursor-crosshair bg-[#fdfdfd] ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        {/* Spawned Images Layer */}
        {spawnedImages.map(img => (
          <img
            key={img.id}
            src={img.src}
            className="absolute w-32 h-32 md:w-48 md:h-48 object-cover rounded-xl pointer-events-none transition-all duration-1000 ease-out"
            style={{
              left: img.x,
              top: img.y,
              opacity: 0,
              animation: 'spawnFade 1s forwards',
              '--rot': `${img.rotation}deg`
            } as any}
            alt=""
          />
        ))}

        {/* Foreground Content */}
        <div className="relative z-10 pointer-events-auto">
          <h2 className="font-mondwest text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] mb-12 select-none">
            Partner with us
          </h2>
          <AboutButton variant="primary" className="!pl-2 gap-3" href="https://halaskastudio.com/book">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" 
              alt="Viktor"
              className="w-10 h-10 rounded-full object-cover"
            />
            Start chat with Viktor
          </AboutButton>
        </div>

        {/* Custom Animation specifically for spawned images */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spawnFade {
            0% { opacity: 1; transform: translate(-50%, -50%) rotate(var(--rot)) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--rot)) scale(0.5); }
          }
        `}} />
      </div>
    </section>
  );
}
