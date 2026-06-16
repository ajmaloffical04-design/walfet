import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import MobileMenuButton from "./MobileMenuButton";

const navLinks = [
  { label: "Services", href: "/service" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Hero() {
  return (
    <section className="flex flex-col bg-[#f0f0ee] text-gray-900 pb-12 md:pb-24">
      {/* Header */}
      <header className="fixed z-50 top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
        <nav className="relative pointer-events-auto flex items-center justify-between md:justify-start w-full md:w-auto bg-gray-200/50 backdrop-blur-xl rounded-sm p-3 md:py-0 md:h-11 md:gap-6">
          <Link href="/" className="pl-1 md:pl-3 hover:opacity-70 transition-opacity">
            <Logo className="h-[20px] md:h-[24px] w-auto text-gray-900" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 pr-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-gray-900 hover:text-gray-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu — client component */}
          <MobileMenuButton />
        </nav>

        <Link
          href="#contact"
          className="hidden md:flex pointer-events-auto bg-gray-900 text-white px-5 h-11 items-center justify-center rounded-sm text-[14px] font-medium hover:bg-gray-800 transition-colors"
        >
          Get in touch
        </Link>
      </header>

      {/* Video Hero */}
      <figure className="w-full mt-24 md:mt-0 aspect-video md:aspect-auto md:h-screen relative mb-10 md:mb-16">
        <div className="w-full h-full rounded-none overflow-hidden relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover scale-[1.05] md:scale-100"
            src="/assets/walfetvideohero.MP4"
          />
        </div>
      </figure>

      {/* Headline Content */}
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-2">
          <h1
            className="col-span-12 xl:col-span-10 text-[24px] md:text-[64px] leading-[1.2] md:leading-[70px] tracking-[-0.03em] font-normal text-[#121212]"
            style={{ textWrap: "balance" }}
          >
            <span className="opacity-50">Walfet</span> is a design and
            technology studio. We build digital products, from zero to launch.
          </h1>
        </div>
      </div>
    </section>
  );
}
