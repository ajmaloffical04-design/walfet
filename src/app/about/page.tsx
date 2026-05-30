import React from "react";
import Header from "@/components/Header";
import AboutHero from "@/components/about/AboutHero";
import AboutMarquee from "@/components/about/AboutMarquee";
import AboutPricing from "@/components/about/AboutPricing";
import AboutPartner from "@/components/about/AboutPartner";
import AboutFooter from "@/components/about/AboutFooter";
import AboutCopyright from "@/components/about/AboutCopyright";
import AboutBottomNav from "@/components/about/AboutBottomNav";

export const metadata = {
  title: "About Viktor Oddy — Creative Studio",
  description: "The creative studio of Viktor Oddy. Build the next wave, the bold way.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#051A24] flex flex-col selection:bg-[#051A24] selection:text-white antialiased relative pb-24">
      <Header />
      
      <main className="flex-grow pt-4">
        <AboutHero />
        <AboutMarquee />
        <AboutPricing />
        <AboutPartner />
      </main>

      <AboutFooter />
      <AboutCopyright />
      <AboutBottomNav />
    </div>
  );
}
