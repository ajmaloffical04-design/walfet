"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function MobileMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex md:hidden items-center gap-3 pr-2 text-[14px] font-medium text-gray-900">
        <Link
          href="#contact"
          className="hover:opacity-70 transition-opacity py-2"
        >
          Get in touch
        </Link>
        <span className="text-gray-400 font-light text-[12px]">|</span>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="hover:opacity-70 transition-opacity py-2 pl-1 pr-2"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-gray-200/90 backdrop-blur-xl rounded-sm p-4 shadow-lg md:hidden animate-in slide-in-from-top-2 fade-in duration-200 pointer-events-auto">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-[18px] font-medium text-gray-900 py-4 transition-colors hover:text-gray-500 border-b border-gray-300/30 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
