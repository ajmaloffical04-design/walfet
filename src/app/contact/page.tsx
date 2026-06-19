"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/ajmaloffical04@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      
      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormState("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] } },
  };

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col selection:bg-ink-strong selection:text-paper antialiased">
      <Header />
      
      <main className="flex-grow flex items-center pt-24 pb-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left side content */}
            <motion.div 
              className="flex flex-col justify-between"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div>
                <motion.h1 
                  variants={itemVariants}
                  className="text-[42px] md:text-[64px] lg:text-[80px] leading-[1.1] font-normal tracking-[-0.03em] text-ink-strong"
                  style={{ textWrap: "balance" }}
                >
                  Let's create something <span className="text-ink/40">extraordinary</span>.
                </motion.h1>
                <motion.p 
                  variants={itemVariants}
                  className="mt-8 text-lg md:text-xl text-ink/70 max-w-md font-medium"
                >
                  Ready to start a project? Fill out the form or reach out directly to our team.
                </motion.p>
              </div>

              <motion.div variants={itemVariants} className="mt-16 lg:mt-32 space-y-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-ink/40 mb-2">Email</p>
                  <a href="mailto:hello@walfet.com" className="text-xl md:text-2xl font-medium hover:text-ink/60 transition-colors">
                    hello@walfet.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-ink/40 mb-2">Location</p>
                  <p className="text-xl md:text-2xl font-medium">
                    Worldwide
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="w-full max-w-xl lg:ml-auto"
            >
              {formState === "success" ? (
                <div className="h-full flex flex-col justify-center items-center text-center py-20 px-8 bg-surface/30 rounded-3xl border border-border/50">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 bg-ink-strong text-paper rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h3 className="text-3xl font-medium text-ink-strong mb-4">Request received</h3>
                  <p className="text-ink/70 text-lg">
                    Thank you for reaching out. Our team will review your details and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-8">
                    <div className="relative group">
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        className="w-full bg-transparent border-b-2 border-ink/20 py-4 text-xl font-medium text-ink-strong placeholder-transparent focus:outline-none focus:border-ink-strong peer transition-colors"
                        placeholder="Your name"
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute left-0 top-4 text-xl font-medium text-ink/40 cursor-text transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-ink-strong peer-valid:-top-6 peer-valid:text-sm"
                      >
                        What's your name?
                      </label>
                    </div>

                    <div className="relative group">
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        className="w-full bg-transparent border-b-2 border-ink/20 py-4 text-xl font-medium text-ink-strong placeholder-transparent focus:outline-none focus:border-ink-strong peer transition-colors"
                        placeholder="Your email"
                      />
                      <label 
                        htmlFor="email" 
                        className="absolute left-0 top-4 text-xl font-medium text-ink/40 cursor-text transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-ink-strong peer-valid:-top-6 peer-valid:text-sm"
                      >
                        Your email address
                      </label>
                    </div>

                    <div className="relative group">
                      <select 
                        id="budget" 
                        name="budget"
                        required
                        className="w-full bg-transparent border-b-2 border-ink/20 py-4 text-xl font-medium text-ink-strong focus:outline-none focus:border-ink-strong transition-colors appearance-none cursor-pointer peer"
                        defaultValue=""
                      >
                        <option value="" disabled className="text-ink/40">Select a budget range</option>
                        <option value="basic" className="text-ink bg-paper py-2">Basic</option>
                        <option value="advance" className="text-ink bg-paper py-2">Advance</option>
                        <option value="advance-pro" className="text-ink bg-paper py-2">Advance Pro</option>
                      </select>
                      <label 
                        htmlFor="budget" 
                        className="absolute left-0 -top-6 text-sm font-medium text-ink/60 transition-all peer-focus:text-ink-strong"
                      >
                        Project budget
                      </label>
                    </div>

                    <div className="relative group pt-4">
                      <textarea 
                        id="details" 
                        name="details"
                        required
                        rows={4}
                        className="w-full bg-transparent border-b-2 border-ink/20 py-4 text-xl font-medium text-ink-strong placeholder-transparent focus:outline-none focus:border-ink-strong peer transition-colors resize-none"
                        placeholder="Project details"
                      />
                      <label 
                        htmlFor="details" 
                        className="absolute left-0 top-8 text-xl font-medium text-ink/40 cursor-text transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-ink-strong peer-valid:top-0 peer-valid:text-sm"
                      >
                        Tell us about your project
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === "submitting"}
                    className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-ink-strong text-paper px-8 py-5 rounded-full text-lg font-medium hover:bg-ink transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
