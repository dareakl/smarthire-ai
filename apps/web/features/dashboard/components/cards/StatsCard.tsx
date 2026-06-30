import Card from "@/components/ui/Card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { DashboardStat } from "../../types";

interface StatsCardProps {
  stat: DashboardStat;
}

export default function StatsCard({ stat }: StatsCardProps) {
  const isPositive = stat.trend === "up";

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{stat.title}</p>

          <h2 className="mt-3 text-4xl font-bold text-white">{stat.value}</h2>

          <div className="mt-4 flex items-center gap-2">
            {isPositive ? (
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            ) : (
              <TrendingDown className="h-4 w-4 text-rose-400" />
            )}

            <span
              className={
                isPositive
                  ? "text-sm text-emerald-400"
                  : "text-sm text-rose-400"
              }
            >
              {stat.change}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
