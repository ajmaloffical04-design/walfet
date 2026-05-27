"use client";

import React from 'react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

const PROJECTS = [
  {
    name: "evr",
    description: "From idea to millions raised for a web3 AI product",
    image: "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif"
  },
  {
    name: "Automation Machines",
    description: "Streamlining industrial automation processes",
    image: "https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif"
  },
  {
    name: "xPortfolio",
    description: "Modern portfolio management platform",
    image: "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif"
  }
];

function ProjectItem({ project }: { project: typeof PROJECTS[0] }) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div ref={ref} className="flex flex-col gap-6">
      <div 
        className={`ml-10 md:ml-28 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <h3 className="font-mondwest text-2xl md:text-3xl font-semibold text-[#051A24] mb-2">
          {project.name}
        </h3>
        <p className="font-neue-montreal text-sm md:text-base text-[#051A24]/70">
          {project.description}
        </p>
      </div>
      <div 
        className={`w-full ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-auto md:h-[600px] object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default function AboutProjects() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {PROJECTS.map((project, idx) => (
          <ProjectItem key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
