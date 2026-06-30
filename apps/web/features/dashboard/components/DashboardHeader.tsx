import { Plus } from "lucide-react";

export default function DashboardHeader() {
  return (
    <section className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Good Morning, Sathish 👋
        </h1>

        <p className="mt-2 text-slate-400">
          Here's a snapshot of your recruitment pipeline today.
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-500">
        <Plus size={18} />
        Post Job
      </button>
    </section>
  );
}
