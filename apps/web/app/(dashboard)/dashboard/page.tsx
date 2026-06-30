import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import DashboardStats from "@/features/dashboard/components/DashboardStats";
import RecentJobs from "@/features/dashboard/components/RecentJobs";
import AIActivity from "@/features/dashboard/components/AIActivity";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <DashboardStats />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentJobs />
        </div>

        <AIActivity />
      </div>
    </div>
  );
}
