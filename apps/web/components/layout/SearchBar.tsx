"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        size={18}
      />

      <input
        type="text"
        placeholder="Search jobs, candidates..."
        className="w-full rounded-xl border border-slate-800 bg-slate-900 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-indigo-500"
      />
    </div>
  );
}
