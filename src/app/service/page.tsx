import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebDevelopment from "@/components/WebDevelopment";
import Services from "@/components/Services";
import WorkProcess from "@/components/work/WorkProcess";
import ProjectsWeDeliver from "@/components/work/ProjectsWeDeliver";

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

export const metadata = {
  title: "Services — Walfet",
  description: "App Development and Modern Web Development services by Walfet.",
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col selection:bg-ink-strong selection:text-paper antialiased">
      <Header />
      
      <main className="flex-grow">
        {/* We reuse the components that describe our services */}
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
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
