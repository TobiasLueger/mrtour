"use client";

import { MainNav } from "@/components/navigation/main-nav";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MainNav />
      <div className="container mx-auto px-6 pt-32">
        <h1 className="text-5xl font-bold mb-8">Travel Blog</h1>
        <p className="text-lg text-white/60 mb-8">
          Get inspired with our latest travel stories, tips, and destination guides.
        </p>
      </div>
    </main>
  );
}