import { Briefcase, Calendar, Sparkles } from "lucide-react";

import { SectionCard, Button } from "@/components/ui";

export default function QuickActions() {
  return (
    <SectionCard
      title="Quick Actions"
      subtitle="Frequently used recruiter actions"
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Button className="flex items-center justify-center gap-2">
          <Briefcase size={18} />
          Post Job
        </Button>

        <Button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500">
          <Sparkles size={18} />
          AI Screening
        </Button>

        <Button className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500">
          <Calendar size={18} />
          Schedule Interviews
        </Button>
      </div>
    </SectionCard>
  );
}
