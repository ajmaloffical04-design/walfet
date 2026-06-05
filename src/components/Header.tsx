"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-paper/80 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="/" className="flex items-center" aria-label="Walfet — home">
          <Logo className="h-8 w-auto md:h-9 text-ink-strong" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink transition-colors hover:text-ink-strong"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="rounded-md bg-ink-strong px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90 active:scale-[0.98]"
          >
            Start a project
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden text-[15px] font-medium text-ink">
          <a href="#contact" className="hover:text-ink-strong transition-colors py-2">
            Get in touch
          </a>
          <div className="h-4 w-[1px] bg-ink/20"></div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hover:text-ink-strong transition-colors py-2 pl-1 pr-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full border-b border-border/60 bg-paper/90 backdrop-blur-xl p-6 shadow-sm md:hidden animate-in slide-in-from-top-2 fade-in duration-200">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[18px] font-medium text-ink py-4 transition-colors hover:text-ink-strong border-b border-border/20 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
