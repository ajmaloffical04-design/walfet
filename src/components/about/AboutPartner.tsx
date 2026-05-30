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
          <AboutButton variant="primary" className="!pl-2 pr-6 gap-3" href="https://wa.me/917012535190">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
            Start chat with our team
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
