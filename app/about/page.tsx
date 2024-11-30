"use client";

import { MainNav } from "@/components/navigation/main-nav";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MainNav />
      <div className="container mx-auto px-6 pt-32">
        <h1 className="text-5xl font-bold mb-8">About Us</h1>
        <p className="text-lg text-white/60 mb-8">
          Mr. Tour is your trusted companion in discovering the world's most beautiful destinations. 
          With over 12 years of experience, we've helped thousands of travelers create unforgettable memories.
        </p>
      </div>
    </main>
  );
}