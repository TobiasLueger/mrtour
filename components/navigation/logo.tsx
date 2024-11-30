"use client";

import { Moon } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Moon className="h-6 w-6 text-orange-500" />
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-white" />
      </div>
      <span className="text-xl font-bold">Mr. Tour</span>
    </div>
  );
}