"use client";

import React from "react";
import { Code, Smartphone, PenTool, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  isFeatured?: boolean;
}

function ServiceCard({ icon, title, description, tags, isFeatured = false }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`group relative flex flex-col justify-between rounded-md border border-border bg-paper p-6 transition-all duration-300 hover:border-ink-strong hover:-translate-y-0.5 md:p-8 ${
        isFeatured ? "md:col-span-3 md:row-span-2" : "md:col-span-3"
      }`}
    >
      <div className="text-ink-strong transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>
      <div className="mt-8">
        <h3 className="font-display text-xl font-semibold text-ink-strong md:text-2xl">{title}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink">{description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-border bg-surface px-2 py-0.5 text-[11px] text-ink font-medium transition-colors group-hover:border-ink/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const services = [
    {
      icon: <Code className="h-6 w-6 stroke-[1.5]" />,
      title: "Web Development",
      description: "Marketing sites, dashboards, and complex SaaS UIs built with React, TypeScript and modern edge runtimes.",
      tags: ["React", "TypeScript", "Next / TanStack", "Tailwind"],
      isFeatured: true,
    },
    {
      icon: <Smartphone className="h-6 w-6 stroke-[1.5]" />,
      title: "Mobile Apps",
      description: "iOS and Android apps that feel native and ship on a weekly cadence.",
      tags: ["React Native", "Expo", "Swift"],
      isFeatured: false,
    },
    {
      icon: <PenTool className="h-6 w-6 stroke-[1.5]" />,
      title: "Product Design",
      description: "Interfaces with hierarchy, restraint, and a clear point of view.",
      tags: ["UX", "UI", "Design systems"],
      isFeatured: false,
    },
    {
      icon: <Server className="h-6 w-6 stroke-[1.5]" />,
      title: "Backend & APIs",
      description: "Type-safe APIs, auth, payments, and data pipelines that don't wake you at 3am.",
      tags: ["Node", "Postgres", "Stripe", "Edge"],
      isFeatured: false,
    },
    {
      icon: <Wrench className="h-6 w-6 stroke-[1.5]" />,
      title: "Maintenance & Care",
      description: "Quiet, ongoing partnership — bug fixes, performance, and small features each month.",
      tags: ["Retainer", "Monitoring", "DX"],
      isFeatured: false,
    },
  ];

  return (
    <section id="services" className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-ink/60">01 · Services</div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink-strong md:text-5xl">
              A studio sized for focus, scoped for outcomes.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink leading-relaxed md:pb-1">
            One senior team, end-to-end. No handoffs, no second-guessing, no slide decks.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6 md:auto-rows-[14rem]">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tags={service.tags}
              isFeatured={service.isFeatured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
