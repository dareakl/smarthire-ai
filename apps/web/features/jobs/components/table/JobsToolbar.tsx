import { Search } from "lucide-react";

export default function JobsToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-md">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2 pl-10 pr-4 text-white outline-none focus:border-indigo-500"
        />
      </div>

      <div className="flex gap-3">
        <select className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-white">
          <option>All Status</option>
          <option>Hiring</option>
          <option>Draft</option>
          <option>Paused</option>
          <option>Closed</option>
        </select>

        <select className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-white">
          <option>All Departments</option>
          <option>Engineering</option>
          <option>AI</option>
          <option>Infrastructure</option>
        </select>
      </div>
    </div>
  );
}
