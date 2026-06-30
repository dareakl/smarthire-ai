"use client";

import { Bell } from "lucide-react";

export default function UserMenu() {
  return (
    <div className="flex items-center gap-4">
      <button className="rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800">
        <Bell size={20} />
      </button>

      <div className="flex items-center gap-3 rounded-xl bg-slate-900 px-3 py-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
          SR
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Sathish Raja</p>

          <p className="text-xs text-slate-400">HR Admin</p>
        </div>
      </div>
    </div>
  );
}
