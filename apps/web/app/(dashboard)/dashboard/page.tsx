import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import DashboardStats from "@/features/dashboard/components/DashboardStats";
import RecentJobs from "@/features/dashboard/components/widgets/RecentJobs";
import AIActivity from "@/features/dashboard/components/widgets/AIActivity";
import RecentCandidates from "@/features/dashboard/components/widgets/RecentCandidates";
import DashboardGrid from "@/features/dashboard/components/DashboardGrid";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <DashboardStats />
      <DashboardGrid />
    </div>
  );
}
