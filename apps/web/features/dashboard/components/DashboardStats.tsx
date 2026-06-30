import StatsCard from "./StatsCard";
import { dashboardStats } from "../data/dashboard.mock";

export default function DashboardStats() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <StatsCard key={stat.id} stat={stat} />
      ))}
    </section>
  );
}
