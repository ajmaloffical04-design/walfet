"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const statItems = [
    { value: "5", label: "Years shipping" },
    { value: "60+", label: "Projects delivered" },
    { value: "24", label: "Active clients" },
    { value: "12", label: "Core technologies" },
  ];

  return (
    <section id="about" className="border-b border-border/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-32">
        {/* Left Column Heading */}
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] text-ink/60">03 · About</div>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink-strong md:text-5xl">
            A studio, not an agency.
          </h2>
        </div>

        {/* Right Column Narrative */}
        <div className="space-y-6 text-ink lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed"
          >
            We are five people who happen to be very good at shipping software. We embed with founders and product teams, take ownership of the work, and stay long enough to see it actually live in front of users.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="leading-relaxed"
          >
            No layers of project managers, no quarterly reorganizations, no boilerplate playbook. Just a small group of senior engineers and designers who take the craft personally.
          </motion.p>

          {/* Stats Cards Grid */}
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 pt-4">
            {statItems.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-md border border-border bg-paper p-5 transition-colors duration-300 hover:border-ink-strong"
              >
                <div className="font-display text-3xl font-semibold text-ink-strong md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs uppercase tracking-wider text-ink/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
