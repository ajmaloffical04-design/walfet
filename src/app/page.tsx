import React from "react";
import SchemaOrg from "@/components/SchemaOrg";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WebDevelopment from "@/components/WebDevelopment";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col selection:bg-ink-strong selection:text-paper antialiased">
      {/* Search Engine Schema Structured JSON-LD Data */}
      <SchemaOrg />

      {/* Sticky Header - Commented out as new Hero has its own navbar */}
      {/* <Header /> */}

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Web Development Hero Section */}
        <WebDevelopment />

        {/* Services Section */}
        <Services />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
