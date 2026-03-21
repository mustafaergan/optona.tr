import type { StatItem } from "@/types/site";

type StatGridProps = {
  stats: StatItem[];
  className?: string;
  cardClassName?: string;
};

export default function StatGrid({
  stats,
  className = "grid grid-cols-2 gap-8 md:grid-cols-4",
  cardClassName = "rounded-2xl bg-blue-50 p-6 text-center",
}: StatGridProps) {
  return (
    <div className={className}>
      {stats.map((stat) => (
        <div key={stat.label} className={cardClassName}>
          <div className="text-4xl font-extrabold text-blue-700">{stat.value}</div>
          <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
