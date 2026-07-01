import { ArrowRight } from "lucide-react";

import { SectionCard, Badge } from "@/components/ui";
import { recentJobs } from "../../data/dashboard.mock";

export default function RecentJobs() {
  return (
    <SectionCard
      title="Recent Jobs"
      subtitle="Latest openings in your organization"
    >
      <div className="space-y-5">
        {recentJobs.map((job) => (
          <div
            key={job.id}
            className="flex items-center justify-between rounded-xl border border-slate-800 p-4 transition hover:border-indigo-500"
          >
            <div>
              <h4 className="font-semibold tracking-tight text-white">
                {job.title}
              </h4>

              <p className="mt-1 text-sm text-slate-400">{job.department}</p>
            </div>

            <div className="text-right">
              <Badge variant={job.status === "Hiring" ? "success" : "default"}>
                {job.status}
              </Badge>

              <p className="mt-2 text-sm text-slate-400">
                {job.applicants} Applicants
              </p>

              <button className="mt-2 flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300">
                View Pipeline
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
