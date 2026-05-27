import React from "react";
import Header from "@/components/Header";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Work — Walfet",
  description: "Selected work from Walfet Studio",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col selection:bg-ink-strong selection:text-paper antialiased">
      <Header />
      <main className="flex-grow pt-10 pb-20">
        <Work />
      </main>
      <Footer />
    </div>
  );
}
