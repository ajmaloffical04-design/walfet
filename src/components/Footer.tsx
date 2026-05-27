"use client";

import React from "react";
import { Logo } from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-paper border-t border-border/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        {/* Brand identity */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <Logo className="h-8 w-auto md:h-9 text-ink-strong" />
          <span className="hidden sm:inline text-border">|</span>
          <span className="text-sm text-ink/75 font-medium">Web & app development studio</span>
        </div>

        {/* Quick Nav */}
        <nav className="flex flex-wrap gap-6 text-sm font-medium text-ink">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-ink-strong"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright notice */}
        <div className="text-xs text-ink/60 font-medium">
          © {currentYear} Walfet Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
