"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate server side email API handling
    setTimeout(() => {
      setFormState("success");
      setFormData({
        name: "",
        email: "",
        type: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="border-b border-border/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-32">
        {/* Left Column info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-ink/60">04 · Contact</div>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink-strong md:text-6xl">
              Got something
              <br />
              to build?
            </h2>
            <p className="mt-6 max-w-sm text-sm text-ink leading-relaxed">
              Tell us about the project. We reply within one business day, even if it's just to say it isn't a fit.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <a
              href="mailto:hello@walfet.com"
              className="group inline-flex items-center gap-2 text-lg font-medium text-ink-strong underline-offset-4 hover:underline"
            >
              hello@walfet.com
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Right Column Form */}
        <div className="lg:col-span-7">
          <div className="relative min-h-[400px] rounded-md border border-border bg-paper p-6 md:p-8">
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex min-h-[350px] flex-col items-center justify-center text-center p-6"
                >
                  <CheckCircle2 className="h-14 w-14 text-emerald-500 stroke-[1.5]" />
                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink-strong">
                    Message sent!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-ink leading-relaxed">
                    Thank you for reaching out. We will review your project details and get back to you within one business day.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-8 rounded-md border border-border px-5 py-2 text-xs font-semibold text-ink-strong transition-colors hover:bg-surface"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="grid gap-5"
                >
                  {/* Name and Email */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold uppercase tracking-wider text-ink/65">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={formState === "submitting"}
                        className="mt-2 h-11 w-full rounded-md border border-border bg-transparent px-3 text-sm font-medium text-ink-strong focus:border-ink-strong focus:outline-none focus:ring-1 focus:ring-ink-strong transition-colors"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold uppercase tracking-wider text-ink/65">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={formState === "submitting"}
                        className="mt-2 h-11 w-full rounded-md border border-border bg-transparent px-3 text-sm font-medium text-ink-strong focus:border-ink-strong focus:outline-none focus:ring-1 focus:ring-ink-strong transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink/65">
                      Project type
                    </label>
                    <select
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleChange}
                      disabled={formState === "submitting"}
                      className="mt-2 h-11 w-full rounded-md border border-border bg-paper px-3 text-sm font-medium text-ink-strong focus:border-ink-strong focus:outline-none focus:ring-1 focus:ring-ink-strong transition-colors"
                    >
                      <option value="" disabled>
                        Select one…
                      </option>
                      <option value="Web app">Web app</option>
                      <option value="Mobile app">Mobile app</option>
                      <option value="Marketing site">Marketing site</option>
                      <option value="Backend / API">Backend / API</option>
                      <option value="Something else">Something else</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink/65">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      disabled={formState === "submitting"}
                      placeholder="A sentence or two about what you're building."
                      className="mt-2 w-full rounded-md border border-border bg-transparent p-3 text-sm font-medium text-ink-strong focus:border-ink-strong focus:outline-none focus:ring-1 focus:ring-ink-strong transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="group inline-flex items-center justify-center gap-2 rounded-md bg-ink-strong px-6 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-90 active:scale-[0.98] disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {formState === "submitting" ? "Sending message..." : "Send message"}
                    {formState !== "submitting" && (
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
