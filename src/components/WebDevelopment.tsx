import React from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

export default function WebDevelopment() {
  return (
    <section id="web-development" className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2 overflow-hidden text-white font-sans bg-black">
      {/* Top white gradient to blend into previous section */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-paper via-paper/50 to-transparent pointer-events-none z-10" />

      {/* LEFT SIDE */}
      <div className="relative flex items-center justify-center min-h-[50vh] lg:min-h-screen bg-[#2da6ff]">
        <Image
          src="/assets/laptop_sky_hero2.jpg"
          alt="Laptop Preview"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* RIGHT SIDE */}
      <div 
        className="relative flex items-center p-10 lg:p-20"
        style={{
          background: "radial-gradient(circle at bottom, #1b4f9a 0%, #06111f 45%, #000 100%)"
        }}
      >
        <div className="max-w-[620px] w-full">
          
          {/* Top Badge */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex">
              <Image src="https://i.pravatar.cc/100?img=1" alt="Avatar 1" width={42} height={42} className="rounded-full border-2 border-black object-cover" />
              <Image src="https://i.pravatar.cc/100?img=2" alt="Avatar 2" width={42} height={42} className="rounded-full border-2 border-black object-cover -ml-2.5" />
            </div>
            <span className="text-[14px] font-semibold tracking-[0.5px] text-[#d9d9d9]">
              200K+ CLIENTS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-[78px] leading-[0.95] font-light tracking-[-2px] lg:tracking-[-3px] mb-7">
            Modern <span className="text-[#7ea8d9]">web development</span><br className="hidden lg:block" /> starts here
          </h1>

          {/* Paragraph */}
          <p className="text-lg lg:text-[20px] leading-[1.7] text-[#c7d2e0] max-w-[580px] mb-11 font-light">
            We build fast, scalable, and visually stunning websites for brands, startups, and businesses focused on performance, user experience, and modern digital growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 lg:gap-[18px]">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-white text-black px-6 py-4 rounded-xl text-[17px] font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center w-6 h-6 bg-black rounded-md text-white">
                <ArrowUpRight className="w-4 h-4" />
              </span>
              Start a Project
            </a>
            <a 
              href="/work" 
              className="inline-flex items-center gap-3 bg-[#1677ff] text-white px-6 py-4 rounded-xl text-[17px] font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center w-6 h-6 bg-white rounded-md text-[#1677ff]">
                <Play className="w-3.5 h-3.5 fill-current" />
              </span>
              Selected Works
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
