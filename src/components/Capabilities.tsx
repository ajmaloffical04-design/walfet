import React from "react";
import Image from "next/image";

const capabilities = [
  {
    title: "Strategy",
    description: "We help teams define a clear vision for their products, brand or both.",
    bgColor: "bg-[#fef9df]",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&q=75",
    alt: "Wireframe sketching for product strategy",
  },
  {
    title: "Product",
    description: "We design and shape complex products that users love and businesses depend on.",
    bgColor: "bg-[#f6f6f6]",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=75",
    alt: "Mobile product design mockup",
  },
  {
    title: "Development",
    description:
      "From interface to infrastructure, we build complex products rooted in technical craft and AI expertise.",
    bgColor: "bg-[#f6f6f6]",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=75",
    alt: "Code editor showing software development",
  },
  {
    title: "Brand + Comms",
    description: "We translate complex products and technologies into narratives that resonate.",
    bgColor: "bg-[#f6f6f6]",
    image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=400&q=75",
    alt: "Color palette and brand design materials",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16 max-w-3xl">
          <h2 className="text-[28px] md:text-[48px] leading-[1.15] tracking-[-0.02em] font-normal text-[#121212]">
            <span className="text-gray-400">Capabilities.</span> Strategy,
            design, and code—all under one roof.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 place-items-center lg:place-items-start">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`flex flex-row items-center rounded-xl overflow-hidden w-full max-w-[545px] h-auto md:h-[190px] ${cap.bgColor}`}
            >
              {/* Image — Next.js Image for automatic WebP + lazy loading */}
              <div className="w-[40%] sm:w-[35%] h-full flex items-center justify-center p-4 sm:p-5">
                <div className="relative w-full max-h-[150px] aspect-square">
                  <Image
                    src={cap.image}
                    alt={cap.alt}
                    fill
                    loading="lazy"
                    className="object-cover rounded-xl shadow-sm"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 35vw, 190px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-[60%] sm:w-[65%] p-4 sm:p-6 pl-0 flex flex-col justify-center h-full">
                <h3 className="text-[20px] sm:text-[24px] md:text-[26px] font-medium text-[#121212] mb-1.5 md:mb-2">
                  {cap.title}
                </h3>
                {cap.description && (
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#121212] max-w-sm leading-relaxed opacity-80 line-clamp-3">
                    {cap.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
