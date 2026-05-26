import React from "react";
import Image from "next/image";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/assets/walfet-logo.png"
      alt="Walfet"
      width={160}
      height={40}
      priority
      style={{ height: "auto" }}
      className={`object-contain ${className}`}
    />
  );
}
