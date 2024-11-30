"use client";

import { MainNav } from "@/components/navigation/main-nav";

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MainNav />
      <div className="container mx-auto px-6 pt-32">
        <h1 className="text-5xl font-bold mb-8">Our Tours</h1>
        <p className="text-lg text-white/60 mb-8">
          Discover our selection of expertly crafted tours designed to provide unforgettable experiences.
        </p>
      </div>
    </main>
  );
}