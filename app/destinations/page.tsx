"use client";

import { MainNav } from "@/components/navigation/main-nav";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MainNav />
      <div className="container mx-auto px-6 pt-32">
        <h1 className="text-5xl font-bold mb-8">Destinations</h1>
        <p className="text-lg text-white/60 mb-8">
          Explore our carefully curated collection of extraordinary destinations around the globe.
        </p>
      </div>
    </main>
  );
}