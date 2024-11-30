"use client";

import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
        alt="Mountain landscape"
        fill
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full -z-10" />
    </div>
  );
}