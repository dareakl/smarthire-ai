import RecentJobs from "./widgets/RecentJobs";
import AIActivity from "./widgets/AIActivity";
import RecentCandidates from "./widgets/RecentCandidates";
import HiringChart from "./widgets/HiringChart";
import QuickActions from "./widgets/QuickActions";

export default function DashboardGrid() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentJobs />
        </div>

        <AIActivity />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RecentCandidates />
        <HiringChart />
      </div>

      <QuickActions />
    </div>
  );
}
