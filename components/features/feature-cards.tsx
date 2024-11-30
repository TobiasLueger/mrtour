"use client";

import { FeatureCard } from "./feature-card";

export function FeatureCards() {
  return (
    <div className="w-full flex flex-nowrap overflow-hidden">
      <FeatureCard
        className="flex-1 bg-blue-600 rounded-none"
        title="Top values for you"
        description="We make quality-driven, ethical and mindful experiences for adventurous souls."
        pattern="dots"
      />
      <FeatureCard
        className="flex-1 bg-orange-500 rounded-none"
        title="Healthy Daily Life"
        description="Experience wellness and vitality through carefully curated travel experiences."
        pattern="lines"
      />
      <FeatureCard
        className="flex-1 bg-purple-500 rounded-none"
        title="Place to Discover"
        description="Uncover hidden gems and extraordinary destinations around the globe."
        pattern="waves"
      />
      <FeatureCard
        className="flex-1 bg-teal-600 rounded-none"
        title="Get Motivated"
        description="Find inspiration and adventure in every journey with our expert guidance."
        pattern="circles"
      />
    </div>
  );
}