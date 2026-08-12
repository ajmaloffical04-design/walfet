import React from 'react';
import { 
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

const services = [
  { title: "Business Website", icon: <Monitor className="w-[11px] h-[11px] md:w-[14px] md:h-[14px] text-[#0066ff]" /> },
  { title: "Shopify / E-commerce", icon: <ShoppingCart className="w-[11px] h-[11px] md:w-[14px] md:h-[14px] text-[#0066ff]" /> },
  { title: "Custom Dashboard", icon: <LayoutDashboard className="w-[11px] h-[11px] md:w-[14px] md:h-[14px] text-[#0066ff]" /> },
  { title: "CRM", icon: <Users className="w-[11px] h-[11px] md:w-[14px] md:h-[14px] text-[#0066ff]" /> },
  { title: "Booking Platform", icon: <CalendarDays className="w-[11px] h-[11px] md:w-[14px] md:h-[14px] text-[#0066ff]" /> },
  { title: "Event Management SaaS", icon: <Ticket className="w-[11px] h-[11px] md:w-[14px] md:h-[14px] text-[#0066ff]" /> },
  { title: "Multi-Vendor Marketplace", icon: <Store className="w-[11px] h-[11px] md:w-[14px] md:h-[14px] text-[#0066ff]" /> },
  { title: "Full SaaS Platform", icon: <Cloud className="w-[11px] h-[11px] md:w-[14px] md:h-[14px] text-[#0066ff]" /> },
  { title: "Enterprise-Level System", icon: <Shield className="w-[11px] h-[11px] md:w-[14px] md:h-[14px] text-[#0066ff]" /> }
];

export default function StudioIntro() {
  return (
    <section className="bg-[#f4f4f4] py-12 md:py-[120px] px-4 md:px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] font-light text-gray-900 tracking-tight mb-6 md:mb-10 w-full">
          <span className="text-gray-400">Walfet</span> is a design and technology studio. We <br className="hidden lg:block" /> build digital products, from zero to launch.
        </h2>
        
        <div className="flex flex-wrap gap-2 md:gap-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex items-center gap-1.5 md:gap-2.5 bg-white px-3 md:px-5 py-1.5 md:py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default border border-gray-100"
            >
              <span className="text-gray-800 font-medium text-[11px] md:text-[14px]">{service.title}</span>
              {service.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
