import React from 'react';

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

// Duplicate the array for seamless infinite marquee
const MARQUEE_IMAGES = [...IMAGES, ...IMAGES];

export default function AboutMarquee() {
  return (
    <div className="w-full mt-16 md:mt-20 mb-16 overflow-hidden bg-white py-4" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
      <div className="flex w-max animate-marquee">
        {MARQUEE_IMAGES.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Showcase ${idx}`}
            className="h-[280px] md:h-[500px] w-auto object-cover mx-3 rounded-2xl shadow-lg shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
