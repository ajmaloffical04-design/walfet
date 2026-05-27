import React from "react";
import Image from "next/image";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/assets/walfet-logo.png"
      alt="Walfet"
      width={100}
      height={25}
      priority
      className={`object-contain ${className}`}
    />
  );
}
