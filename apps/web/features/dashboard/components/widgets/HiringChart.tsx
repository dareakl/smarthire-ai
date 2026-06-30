"use client";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import { SectionCard } from "@/components/ui";
import { hiringTrend } from "../../data/dashboard.mock";

export default function HiringChart() {
  return (
    <SectionCard title="Hiring Trend" subtitle="Monthly hiring performance">
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={hiringTrend}>
            <XAxis dataKey="month" stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="hired"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}
