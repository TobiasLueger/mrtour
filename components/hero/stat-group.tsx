"use client";

import { Users, Award, Clock } from "lucide-react";
import { StatCard } from "@/components/stats/stat-card";

export function StatGroup() {
  return (
    <div className="flex gap-6 justify-center">
      <StatCard
        icon={<Users className="h-6 w-6 text-orange-500" />}
        value="725+"
        label="Happy Customer"
        className="bg-white/5"
      />
      <StatCard
        icon={<Award className="h-6 w-6 text-orange-500" />}
        value="29"
        label="Awards Gained"
        className="bg-white/5"
      />
      <StatCard
        icon={<Clock className="h-6 w-6 text-orange-500" />}
        value="12"
        label="Years Experience"
        className="bg-white/5"
      />
    </div>
  );
}