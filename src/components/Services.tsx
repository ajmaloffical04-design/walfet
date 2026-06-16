import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex flex-col justify-end pb-20 pt-32 md:pb-32"
    >
      {/* Background Image — lazy loaded, well below the fold */}
      <Image
        src="/assets/appdevelopment.png"
        alt="App Development"
        fill
        className="object-cover object-[65%_center] md:object-center"
        loading="lazy"
        sizes="100vw"
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mt-auto">
        {/* Left Headline */}
        <div className="flex-1">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-white max-w-2xl leading-[1.05] drop-shadow-sm">
            App Development
          </h2>
        </div>

        {/* Right Content */}
        <div className="md:max-w-sm flex flex-col items-start gap-6 bg-black/10 md:bg-transparent p-4 md:p-0 rounded-2xl backdrop-blur-sm md:backdrop-blur-none border border-white/10 md:border-transparent">
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium drop-shadow-sm">
            Custom mobile applications built for performance, scalability, and
            seamless user experiences.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-ink-strong shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Selected works
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-ink-strong text-white">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
