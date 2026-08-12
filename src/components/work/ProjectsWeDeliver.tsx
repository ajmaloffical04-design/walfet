import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  BriefcaseBusiness,
  Monitor, 
  ShoppingCart, 
  LayoutDashboard, 
  Users, 
  CalendarDays, 
  Ticket, 
  Store, 
  Cloud, 
  Shield
} from 'lucide-react';

const projects = [
  {
    icon: <Monitor className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Business Website",
    features: "UI, SEO, CMS"
  },
  {
    icon: <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Shopify / E-commerce",
    features: "Products, payments, orders, integrations"
  },
  {
    icon: <LayoutDashboard className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Custom Dashboard",
    features: "Authentication, CRUD, roles, charts"
  },
  {
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
    title: "CRM",
    features: "Complex database, workflows, permissions"
  },
  {
    icon: <CalendarDays className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Booking Platform",
    features: "Availability, booking logic, payments"
  },
  {
    icon: <Ticket className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Event Management SaaS",
    features: "Events, tickets, users, payments, admin"
  },
  {
    icon: <Store className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Multi-Vendor Marketplace",
    features: "Vendors, commissions, payouts, orders"
  },
  {
    icon: <Cloud className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Full SaaS Platform",
    features: "Multi-tenancy, subscriptions, billing, scaling"
  },
  {
    icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Enterprise-Level System",
    features: "Security, scalability, integrations, DevOps"
  }
];

export default function ProjectsWeDeliver() {
  return (
    <section className="bg-white py-[60px] md:py-[100px] px-5 font-sans">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-900 text-xs md:text-sm font-medium mb-4 md:mb-6 uppercase tracking-wider">
              <BriefcaseBusiness className="w-3 h-3 md:w-4 md:h-4" />
              Projects
            </div>
            <h2 className="text-[32px] md:text-[56px] leading-[1.1] text-gray-900 font-normal tracking-tight">
              Projects We Deliver
            </h2>
          </div>
          <div className="max-w-md lg:pb-4">
            <p className="text-gray-500 text-[15px] md:text-lg leading-relaxed">
              From simple websites to complex platforms, we build solutions that grow your business. Focused on your unique needs, our team delivers scalable software and cutting-edge strategies.
            </p>
          </div>
        </div>

        {/* List Section */}
        <div className="flex flex-col gap-3 md:gap-4">
          {projects.map((project, index) => (
            <Link 
              href="/contact"
              key={index} 
              className="group flex items-center justify-between p-4 md:p-8 rounded-[20px] md:rounded-[30px] bg-[#f8f9fa] hover:bg-[#0066ff] transition-colors duration-300 gap-3 md:gap-6 cursor-pointer"
            >
              <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                <div className="text-[#0066ff] group-hover:text-white transition-colors duration-300 shrink-0">
                  {project.icon}
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center w-full gap-0.5 md:gap-0">
                  <h3 className="text-[16px] md:text-[22px] font-medium text-gray-900 group-hover:text-white transition-colors duration-300 md:w-[45%]">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-white/90 text-[13px] md:text-base leading-snug transition-colors duration-300 md:flex-1">
                    {project.features}
                  </p>
                </div>
              </div>
              
              <div className="w-[36px] h-[36px] md:w-[50px] md:h-[50px] rounded-full bg-[#0066ff] group-hover:bg-white text-white group-hover:text-[#0066ff] flex items-center justify-center shrink-0 transition-colors duration-300">
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
