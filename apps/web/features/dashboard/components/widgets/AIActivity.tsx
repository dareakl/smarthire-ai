import { Bot } from "lucide-react";

import { SectionCard } from "@/components/ui";
import { aiActivity } from "../../data/dashboard.mock";

export default function AIActivity() {
  return (
    <SectionCard title="AI Activity" subtitle="Latest autonomous actions">
      <div className="space-y-4">
        {aiActivity.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="rounded-full bg-indigo-500/20 p-2">
              <Bot size={18} className="text-indigo-400" />
            </div>

            <div>
              <p className="text-sm text-white">{activity.action}</p>

              <p className="text-xs text-slate-500">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
