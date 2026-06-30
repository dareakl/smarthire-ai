import { SectionCard } from "@/components/ui";

import CandidateCard from "../cards/CandidateCard";

import { recentCandidates } from "../../data/dashboard.mock";

export default function RecentCandidates() {
  return (
    <SectionCard title="Recent Candidates" subtitle="AI shortlisted applicants">
      <div className="space-y-4">
        {recentCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} {...candidate} />
        ))}
      </div>
    </SectionCard>
  );
}
