import React, { Suspense } from "react";
import SchemaOrg from "@/components/SchemaOrg";
import Hero from "@/components/Hero";
import WebDevelopment from "@/components/WebDevelopment";
import Services from "@/components/Services";
import WorkProcess from "@/components/work/WorkProcess";
import ProjectsWeDeliver from "@/components/work/ProjectsWeDeliver";
import Capabilities from "@/components/Capabilities";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Lightweight skeleton shown while below-fold sections stream in
function SectionSkeleton() {
  return (
    <div
      className="w-full bg-gray-100 animate-pulse"
      style={{ minHeight: "50vh" }}
      aria-hidden="true"
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col selection:bg-ink-strong selection:text-paper antialiased">
      {/* Structured Data for SEO */}
      <SchemaOrg />

      <main className="flex-grow">
        {/* Above-the-fold — renders immediately, no Suspense */}
        <Hero />


        <Suspense fallback={<SectionSkeleton />}>
          <WebDevelopment />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsWeDeliver />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <WorkProcess />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Capabilities />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Clients />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
