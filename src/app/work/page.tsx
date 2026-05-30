"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import { Star, Clock, Calendar, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Inter } from "next/font/google";
import WorkProcess from "@/components/work/WorkProcess";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export default function WorkPage() {
  return (
    <div className={`relative min-h-screen flex flex-col bg-black text-white ${inter.className}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        .liquid-glass::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        @keyframes blurFadeUp {
          0% { opacity: 0; filter: blur(20px); transform: translateY(40px); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0); }
        }

        .animate-blur-fade-up {
          animation: blurFadeUp 1s ease-out forwards;
          opacity: 0;
        }

        .blur-mask {
          mask-image: linear-gradient(to top, black 0%, transparent 45%);
          -webkit-mask-image: linear-gradient(to top, black 0%, transparent 45%);
        }
      `}} />

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col overflow-hidden">
        {/* BACKGROUND VIDEO (z-index 0) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4" type="video/mp4" />
        </video>

        {/* BOTTOM BLUR OVERLAY (z-index 1) */}
        <div className="absolute inset-0 z-[1] pointer-events-none backdrop-blur-xl blur-mask"></div>

        {/* NAVBAR (Using the same global nav as requested) */}
        <div className="relative z-50">
          <Header />
        </div>

        {/* HERO CONTENT (z-index 10) */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16 pointer-events-none">
          <div className="flex flex-col md:flex-row items-end gap-8 w-full max-w-7xl mx-auto pointer-events-auto">
            
            {/* Left Side */}
            <div className="flex-1 w-full">
              


              {/* Title */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.04em] mb-4 md:mb-6 animate-blur-fade-up" style={{ animationDelay: '400ms' }}>
                Web <span className="italic">Development</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl animate-blur-fade-up" style={{ animationDelay: '500ms' }}>
                We build high performance websites with AI integration, CRM connectivity, automation, and scalable digital solutions to help businesses grow online.
              </p>



            </div>



          </div>
        </div>
      </section>

      {/* NEW SECTION ADDED AFTER HERO */}
      <WorkProcess />
      
    </div>
  );
}
