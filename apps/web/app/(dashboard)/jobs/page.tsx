import JobHeader from "@/features/jobs/components/JobHeader";
import JobsToolbar from "@/features/jobs/components/table/JobsToolbar";
import JobsTable from "@/features/jobs/components/table/JobsTable";

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <div>
        <JobHeader />
        <JobsToolbar />
        <JobsTable />
      </div>
    </div>
  );
}
