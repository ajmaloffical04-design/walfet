"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Briefcase, Cpu, Bitcoin, Palette, PenTool, Code, ShoppingCart, Landmark, Microchip, Megaphone, Presentation, Zap, Users, ArrowUpRight, Building2, ChevronDown, Coffee, Tag } from 'lucide-react';

const CATEGORIES = [
  { id: 'corporate', label: 'Corporate', icon: Building2 },
  { id: 'ai', label: 'AI', icon: Cpu },
  { id: 'hospitality', label: 'Hospitality', icon: Coffee },
  { id: 'branding', label: 'Branding', icon: Tag },
  { id: 'all', label: 'All', icon: Sparkles },
  { id: 'e-commerce', label: 'E-Commerce', icon: ShoppingCart },
  { id: 'agency', label: 'Agency', icon: Briefcase },
  { id: 'crypto', label: 'Crypto', icon: Bitcoin },
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'design-tools', label: 'Design Tools', icon: PenTool },
  { id: 'developer-tools', label: 'Developer Tools', icon: Code },
  { id: 'fintech', label: 'Fintech', icon: Landmark },
  { id: 'hardware', label: 'Hardware', icon: Microchip },
  { id: 'marketing', label: 'Marketing', icon: Megaphone },
  { id: 'portfolios', label: 'Portfolios', icon: Presentation },
  { id: 'productivity', label: 'Productivity', icon: Zap },
  { id: 'social', label: 'Social', icon: Users },
];

const PROJECTS = [
  {
    id: 7,
    categoryId: 'e-commerce',
    title: 'Thahani Organic',
    description: 'Pure Organic Henna Products E-commerce platform.',
    image: '/assets/1stwork.png',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100',
    isLong: true,
  },
  {
    id: 8,
    categoryId: 'e-commerce',
    title: 'Tecno',
    description: 'Modern, well-designed carefully curated products.',
    image: '/assets/2ndwork.png',
    logo: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=100',
    isLong: true,
  },
  {
    id: 9,
    categoryId: 'corporate',
    title: 'Veeserve',
    description: 'Your Visa Fear Ends Here. Global travel made simple.',
    image: '/assets/veeserve.png',
    logo: 'https://images.unsplash.com/photo-1515378960530-7c0da622941f?w=100',
    isLong: true,
  },
  {
    id: 10,
    categoryId: 'hospitality',
    title: 'Rise',
    description: 'Rise Fitness Center. Train smarter, get stronger and become your best self.',
    image: '/assets/rise.png',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100',
    isLong: true,
  },
  {
    id: 1,
    categoryId: 'e-commerce',
    title: 'Nashvogue',
    description: 'Modern, scalable e-commerce platform for fashion and lifestyle.',
    image: '/assets/nashvogue  e-commerce.png',
    logo: 'https://images.unsplash.com/photo-1614680376593-902f74a6cecb?w=100',
    isLong: true,
  },
  {
    id: 2,
    categoryId: 'corporate',
    title: 'Build Co',
    description: 'Build Co construction solutions that shape communities and create lasting impact.',
    image: '/assets/Build co.png',
    logo: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=100',
    isLong: true,
  },
  {
    id: 3,
    categoryId: 'e-commerce',
    title: 'Regal Avenue',
    description: 'Regal Avenue exquisite jewelry and engagement rings.',
    image: '/assets/regalavenue.png',
    logo: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=100',
    isLong: true,
  },
  {
    id: 4,
    categoryId: 'e-commerce',
    title: 'Zerci Wear',
    description: 'Zerci Wear elevated essentials for the modern lifestyle.',
    image: '/assets/zerci.png',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100',
    isLong: true,
  },
  {
    id: 5,
    categoryId: 'corporate',
    title: 'ZTK Tyres',
    description: 'ZTK Tyres high quality automotive products and services.',
    image: '/assets/ztktyers.png',
    logo: 'https://images.unsplash.com/photo-1531297172867-1111166db22c?w=100',
    isLong: true,
  },
  {
    id: 6,
    categoryId: 'crypto',
    title: 'Orbit Web3',
    description: 'The future of decentralized finance.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=1000',
    logo: 'https://images.unsplash.com/photo-1622630998477-20b41cd0e025?w=100',
  }
];

export default function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const visibleCategories = CATEGORIES.slice(0, 4);
  const moreCategories = CATEGORIES.slice(4);
  const activeInMore = moreCategories.find(c => c.id === activeCategory);

  return (
    <section className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row">
        
        {/* SIDEBAR */}
        <aside className="w-full md:w-[240px] flex-shrink-0 p-6 md:p-8 md:sticky md:top-20 md:h-[calc(100vh-80px)] overflow-y-auto hidden md:flex flex-col border-r border-gray-100">
          <nav className="flex-grow">
            <ul className="space-y-1">
              {CATEGORIES.map((cat, idx) => {
                const Icon = cat.icon;
                const isActive = cat.id === activeCategory;
                return (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-[14px] rounded-lg transition-colors ${isActive ? 'bg-gray-100 font-medium' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
                    >
                      <Icon className="w-4 h-4 opacity-70" strokeWidth={isActive ? 2.5 : 2} />
                      {cat.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>


        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 px-6 py-6 md:p-12 lg:p-16">
          <div className="max-w-[1200px]">
            
            {/* MOBILE NAV */}
            <div className="md:hidden mb-8 relative flex flex-wrap gap-2 z-20">
              {visibleCategories.map(cat => {
                const isActive = cat.id === activeCategory;
                return (
                  <button 
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setIsMoreOpen(false); }}
                    className={`px-4 py-2 text-[14px] rounded-lg transition-colors border ${isActive ? 'bg-gray-900 text-white border-gray-900 font-medium' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
                  >
                    {cat.label}
                  </button>
                )
              })}

              <div className="relative">
                <button 
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className={`flex items-center gap-2 px-4 py-2 text-[14px] rounded-lg transition-colors border ${activeInMore ? 'bg-gray-900 text-white border-gray-900 font-medium' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
                >
                  {activeInMore ? activeInMore.label : 'More'}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMoreOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col py-1">
                    {moreCategories.map(cat => {
                      const isActive = cat.id === activeCategory;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => { setActiveCategory(cat.id); setIsMoreOpen(false); }}
                          className={`flex items-center gap-3 px-4 py-2.5 text-[14px] text-left transition-colors ${isActive ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                          <cat.icon className="w-4 h-4 opacity-70" strokeWidth={isActive ? 2.5 : 2} />
                          {cat.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Header */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-[40px] md:text-[56px] font-semibold tracking-[-0.03em] leading-[1.1] mb-4 text-[#111]">
                Web & App folio
              </h2>
              <p className="text-[18px] md:text-[22px] text-gray-500 mb-8 font-light">
                our works and designs
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#1c1c1c] text-white px-6 py-2.5 rounded-lg text-[15px] font-semibold hover:bg-black transition-colors shadow-sm">
                  Get Started
                </button>
                <span className="text-[15px] text-gray-500">workfolio loading 86+</span>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {PROJECTS.filter(p => activeCategory === 'all' || p.categoryId === activeCategory).map((project) => (
                <div key={project.id} className="group cursor-pointer">
                  {/* Image Container */}
                  <div className={`relative aspect-[4/3] w-full rounded-xl mb-5 bg-gray-100 border border-gray-100/50 shadow-sm transition-transform duration-300 group-hover:scale-[1.01] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${project.isLong ? 'overflow-y-auto md:overflow-hidden' : 'overflow-hidden'}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`w-full ${project.isLong ? 'h-auto block md:absolute md:inset-0 md:h-full md:object-cover md:object-top md:hover:object-bottom transition-all duration-[6000ms] ease-linear' : 'absolute inset-0 h-full object-cover transition-opacity duration-300 group-hover:opacity-90'}`}
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex items-start justify-between px-1 mt-4">
                    <div>
                      <h3 className="text-[15px] font-semibold text-gray-900 mb-0.5 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[14px] text-gray-500 leading-snug line-clamp-2 pr-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-all duration-300 shadow-sm mt-0.5">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </main>

      </div>
    </section>
  );
}
