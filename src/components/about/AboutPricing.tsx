"use client";

import React, { useState } from 'react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export default function AboutPricing() {
  const { ref, isInView } = useInViewAnimation();
  const [selectedPlan, setSelectedPlan] = useState<string>('Basic Package');

  return (
    <section ref={ref} className="w-full py-20 px-5 max-w-7xl mx-auto flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">

        {/* Basic */}
        <div 
          className={`bg-[#021923] text-white rounded-[32px] p-10 transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] min-h-[auto] md:min-h-[620px] flex flex-col justify-between font-sans ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <div>
            <h2 className="text-[28px] md:text-[34px] font-semibold mb-5">Basic</h2>
            <ul className="mt-5 space-y-4">
              <li className="text-[16px] leading-[1.6] text-[#d9d9d9]">• Small Business Website</li>
              <li className="text-[16px] leading-[1.6] text-[#d9d9d9]">• 2–4 Pages</li>
              <li className="text-[16px] leading-[1.6] text-[#d9d9d9]">• Responsive Design</li>
              <li className="text-[16px] leading-[1.6] text-[#d9d9d9]">• AI Chat Integration</li>
              <li className="text-[16px] leading-[1.6] text-[#d9d9d9]">• Contact Form</li>
              <li className="text-[16px] leading-[1.6] text-[#d9d9d9]">• SEO-Friendly Structure</li>
              <li className="text-[16px] leading-[1.6] text-[#d9d9d9]">• 1 Year Maintenance Support</li>
            </ul>
          </div>
          <div>
            <div className="mt-10">
              <h2 className="text-[34px] md:text-[42px] mb-2 font-bold">₹30,000 / $350</h2>
              <span className="text-[17px] text-[#cfcfcf]">Starting Package</span>
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <button 
                onClick={() => {
                  setSelectedPlan('Basic Package');
                  document.getElementById('project-form')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="w-full p-[18px] border-none rounded-[50px] text-[17px] cursor-pointer transition-colors duration-300 bg-white text-black hover:bg-[#e8e8e8] font-medium"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

        {/* Advanced */}
        <div 
          className={`bg-white text-[#111] rounded-[32px] p-10 transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] min-h-[auto] md:min-h-[620px] flex flex-col justify-between font-sans ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div>
            <h2 className="text-[28px] md:text-[34px] font-semibold mb-5">Advanced</h2>
            <ul className="mt-5 space-y-4">
              <li className="text-[16px] leading-[1.6] text-[#444]">• E-Commerce Website</li>
              <li className="text-[16px] leading-[1.6] text-[#444]">• Small-Scale App Development</li>
              <li className="text-[16px] leading-[1.6] text-[#444]">• Payment Gateway Integration</li>
              <li className="text-[16px] leading-[1.6] text-[#444]">• AI Chat Integration</li>
              <li className="text-[16px] leading-[1.6] text-[#444]">• Product Upload (Up to 30 Products)</li>
              <li className="text-[16px] leading-[1.6] text-[#444]">• Admin Panel</li>
              <li className="text-[16px] leading-[1.6] text-[#444]">• 1 Year Maintenance Support</li>
            </ul>
          </div>
          <div>
            <div className="mt-10">
              <h2 className="text-[34px] md:text-[42px] mb-2 font-bold">₹80,000 / $950</h2>
              <span className="text-[17px] text-[#666]">Business Growth Package</span>
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <button 
                onClick={() => {
                  setSelectedPlan('Advanced Package');
                  document.getElementById('project-form')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="w-full p-[18px] border-none rounded-[50px] text-[17px] cursor-pointer transition-colors duration-300 bg-[#f5f5f5] text-[#111] hover:bg-[#e8e8e8] font-medium"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Pro */}
        <div 
          className={`bg-white text-[#111] rounded-[32px] p-10 transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] min-h-[auto] md:min-h-[620px] flex flex-col justify-between font-sans ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          <div>
            <h2 className="text-[28px] md:text-[34px] font-semibold mb-5">Advanced Pro</h2>
            <ul className="mt-5 space-y-4">
              <li className="text-[16px] leading-[1.6] text-[#444]">• Large-Scale E-Commerce Platform</li>
              <li className="text-[16px] leading-[1.6] text-[#444]">• Custom App Development</li>
              <li className="text-[16px] leading-[1.6] text-[#444]">• ERP Implementation</li>
              <li className="text-[16px] leading-[1.6] text-[#444]">• Advanced AI Bot Integration</li>
              <li className="text-[16px] leading-[1.6] text-[#444]">• Custom Dashboard & Automation</li>
              <li className="text-[16px] leading-[1.6] text-[#444]">• Scalable Cloud Architecture</li>
              <li className="text-[16px] leading-[1.6] text-[#444]">• Priority Support & Maintenance</li>
            </ul>
          </div>
          <div>
            <div className="mt-10">
              <h2 className="text-[34px] md:text-[42px] mb-2 font-bold">₹1,50,000 / $1,800</h2>
              <span className="text-[17px] text-[#666]">Enterprise Solution</span>
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <button 
                onClick={() => {
                  setSelectedPlan('Advanced Pro Package');
                  document.getElementById('project-form')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="w-full p-[18px] border-none rounded-[50px] text-[17px] cursor-pointer transition-colors duration-300 bg-[#f5f5f5] text-[#111] hover:bg-[#e8e8e8] font-medium"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Visible Form Section below pricing */}
      <div id="project-form" className={`w-full max-w-3xl bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.06)] font-sans ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
        <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Start Your Project</h3>
        <p className="text-gray-600 mb-8 font-medium text-center">Fill out your details below and we'll be in touch.</p>

        <form action="https://formsubmit.co/ajmaloffical04@gmail.com" method="POST" className="flex flex-col gap-6">
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_subject" value={`New Inquiry from Pricing Page`} />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Selected Plan</label>
            <select 
              name="Plan Selected" 
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#021923] text-gray-900 bg-gray-50 transition-all font-medium appearance-none"
            >
              <option value="Basic Package">Basic Package (₹30,000 / $350)</option>
              <option value="Advanced Package">Advanced Package (₹80,000 / $950)</option>
              <option value="Advanced Pro Package">Advanced Pro Package (₹1,50,000 / $1,800)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Name</label>
              <input type="text" name="Name" required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#021923] text-gray-900 bg-gray-50 transition-all" placeholder="Your Name" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <input type="email" name="Email" required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#021923] text-gray-900 bg-gray-50 transition-all" placeholder="your@email.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Phone Number</label>
              <input type="tel" name="Phone" required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#021923] text-gray-900 bg-gray-50 transition-all" placeholder="+1 (555) 000-0000" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Address</label>
              <input type="text" name="Address" required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#021923] text-gray-900 bg-gray-50 transition-all" placeholder="City, Country" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Project Details</label>
            <textarea name="Message" required rows={4} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#021923] text-gray-900 bg-gray-50 transition-all resize-y" placeholder="Tell us about what you want to build..."></textarea>
          </div>

          <button type="submit" className="mt-2 w-full bg-[#021923] text-white py-4 rounded-[50px] font-semibold text-lg hover:bg-black transition-colors shadow-lg hover:shadow-xl">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
