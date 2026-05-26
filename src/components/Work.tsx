"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectProps {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  colSpan: string;
  rowSpan?: string;
}

function ProjectCard({ imageSrc, category, title, description, colSpan, rowSpan = "" }: ProjectProps) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={`group relative overflow-hidden rounded-md border border-border bg-paper transition-all duration-500 hover:border-ink-strong ${colSpan} ${rowSpan}`}
    >
      {/* Background Image Container */}
      <div className="relative h-[24rem] w-full overflow-hidden md:h-full">
        <Image
          src={imageSrc}
          alt={`${title} — ${category}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Modern dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-strong/85 via-ink-strong/20 to-transparent transition-opacity duration-300 group-hover:from-ink-strong/90"></div>
      </div>

      {/* Narrative Info Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-7">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/70">
          {category}
        </div>
        <div className="mt-2 font-display text-xl font-semibold text-paper md:text-2xl">
          {title}
        </div>
        <div className="mt-1.5 max-w-sm text-sm text-paper/85 font-medium leading-relaxed">
          {description}
        </div>
      </div>
    </motion.a>
  );
}

export default function Work() {
  const projects = [
    {
      imageSrc: "/assets/work-fintech.png",
      category: "Fintech · Web",
      title: "Northwind Capital",
      description: "Rebuilt the client dashboard; reduced load time by 62%.",
      colSpan: "md:col-span-4 md:row-span-2",
    },
    {
      imageSrc: "/assets/work-travel.png",
      category: "Travel · Mobile",
      title: "Foray",
      description: "Cross-platform app, shipped in 9 weeks.",
      colSpan: "md:col-span-2 md:row-span-2",
    },
    {
      imageSrc: "/assets/work-commerce.png",
      category: "Commerce · Web",
      title: "Brae Goods",
      description: "Headless storefront, +38% conversion.",
      colSpan: "md:col-span-3",
    },
    {
      imageSrc: "/assets/work-saas.png",
      category: "Developer Tools · SaaS",
      title: "Relay API",
      description: "Docs, SDKs, and a billing layer in one quarter.",
      colSpan: "md:col-span-3",
    },
  ];

  return (
    <section id="work" className="border-b border-border/60 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-ink/60">02 · Selected work</div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink-strong md:text-5xl">
              Small body of work, carefully chosen.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6 md:auto-rows-[16rem]">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              imageSrc={project.imageSrc}
              category={project.category}
              title={project.title}
              description={project.description}
              colSpan={project.colSpan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
