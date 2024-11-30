"use client";

import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
  pattern?: "dots" | "lines" | "waves" | "circles";
}

export function FeatureCard({ title, description, className, pattern = "dots" }: FeatureCardProps) {
  return (
    <div className={cn(
      "p-12 relative overflow-hidden group transition-all duration-300 hover:scale-[1.02]",
      className
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
        <Pattern type={pattern} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <div className="w-12 h-1 bg-white/20 rounded-full mb-6" />
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  );
}

function Pattern({ type }: { type: "dots" | "lines" | "waves" | "circles" }) {
  switch (type) {
    case "dots":
      return (
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
        </svg>
      );
    case "lines":
      return (
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="20" y2="20" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#lines)" />
        </svg>
      );
    case "waves":
      return (
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="waves" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10 Q10 0, 20 10 T40 10" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#waves)" />
        </svg>
      );
    case "circles":
      return (
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circles)" />
        </svg>
      );
  }
}