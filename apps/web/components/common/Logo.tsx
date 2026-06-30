import { BrainCircuit } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-500/30">
        <BrainCircuit className="h-6 w-6 text-white" />
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight text-white">
          SmartHire AI
        </span>

        <span className="text-xs text-slate-400">Intelligent Recruitment</span>
      </div>
    </Link>
  );
}
