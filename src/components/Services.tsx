"use client";

import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="relative min-h-[80vh] md:min-h-screen w-full overflow-hidden flex items-end pb-20 pt-32 md:pb-32">
      {/* Background Image */}
      <Image
        src="/assets/appdevelopmenthero.png"
        alt="App Development"
        fill
        className="object-cover object-center"
        priority
      />
      
      {/* White gradient overlay for blending into previous section at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/20 to-transparent pointer-events-none" />
      
      {/* Interactive area if needed (empty since image contains content) */}
    </section>
  );
}
