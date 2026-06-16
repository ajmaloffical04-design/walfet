import React from "react";
import Image from "next/image";

const clients = [
  {
    src: "/assets/edc.png",
    alt: "Economic Development Council",
    width: 140,
    height: 60,
  },
  {
    src: "/assets/thahani (1).png",
    alt: "Thahani Organic",
    width: 120,
    height: 60,
  },
  {
    src: "/assets/uventerlogo.png",
    alt: "Uventer",
    width: 140,
    height: 60,
  },
];

export default function Clients() {
  return (
    <section className="bg-white py-14 md:py-20 border-t border-gray-100">
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-[1200px] mx-auto">
        {/* Label */}
        <p className="text-[13px] uppercase tracking-[0.15em] text-gray-400 font-medium mb-10 md:mb-12">
          Trusted by
        </p>

        {/* Logo row */}
        <div className="flex flex-wrap items-center gap-10 md:gap-16">
          {clients.map((client) => (
            <div
              key={client.alt}
              className="relative flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{ height: client.height, minWidth: client.width }}
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={client.width}
                height={client.height}
                className="object-contain w-auto"
                style={{ maxHeight: client.height }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
