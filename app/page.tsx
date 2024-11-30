"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { HeroBackground } from "@/components/hero/hero-background";
import { StatGroup } from "@/components/hero/stat-group";
import { FeatureCards } from "@/components/features/feature-cards";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <HeroBackground />
        
        <div className="relative z-10 pt-32 pb-24">
          <div className="container max-w-3xl mx-auto text-center mb-24">
            <h1 className="text-7xl font-bold tracking-tight mb-8">
              Discover{" "}
              <span className="text-white inline-block">the</span>
              <br />
              <span className="text-white">Best Lovely Places!</span>
            </h1>
            
            <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto">
              Plan and book your perfect trip with expert advice, travel tips,
              destination information and inspiration from us.
            </p>

            <StatGroup />
          </div>

          {/* Features Section - Full width */}
          <FeatureCards />
        </div>
      </section>
    </main>
  );
}