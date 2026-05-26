"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.2, 1] as const,
      },
    },
  };

  const statItems = [
    { label: "Est.", value: "2021" },
    { label: "Studio", value: "Distributed" },
    { label: "Projects", value: "60+ shipped" },
    { label: "Stack", value: "TypeScript-first" },
  ];

  return (
    <section id="top" className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Booking Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink/75"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            Booking projects for Q3 · Remote, worldwide
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="mt-8 max-w-5xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink-strong sm:text-6xl md:text-7xl lg:text-8xl"
          >
            We build web and apps
            <br />
            that earn their keep.
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ink"
          >
            Walfet is a small studio of engineers and designers shipping fast, durable software for ambitious teams — from first prototype to product at scale.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-ink-strong px-6 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-strong underline-offset-4 hover:underline"
            >
              See selected work <span className="transition-transform duration-300 hover:translate-x-1">→</span>
            </a>
          </motion.div>

          {/* Core Metrics */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 gap-y-6 border-t border-border/60 pt-8 text-sm text-ink sm:grid-cols-4"
          >
            {statItems.map((stat, idx) => (
              <div key={idx}>
                <div className="text-xs uppercase tracking-wider text-ink/60">{stat.label}</div>
                <div className="mt-1 font-display text-base font-medium text-ink-strong">
                  {stat.value}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
