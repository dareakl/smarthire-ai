"use client";

import { MoreHorizontal } from "lucide-react";

interface JobActionsPage {
  onClick?: () => void;
}

export default function JobActions({ onClick }: JobActionsPage) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg p-2 transition-colors hover:bg-slate-700"
      aria-label="Job actions"
    >
      <MoreHorizontal className="h-5 w-5 text-slate-400" />
    </button>
  );
}
