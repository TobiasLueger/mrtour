interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ icon, value, label, className }: StatCardProps) {
  return (
    <div className={`flex items-center gap-4 rounded-xl p-4 backdrop-blur-sm ${className}`}>
      <div className="p-3 bg-white/10 rounded-xl">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-white/60">{label}</div>
      </div>
    </div>
  );
}