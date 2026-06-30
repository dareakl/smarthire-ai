import AIScoreBadge from "./AIScoreBadge";

interface Props {
  name: string;
  role: string;
  score: number;
  stage: string;
}

export default function CandidateCard({ name, role, score, stage }: Props) {
  return (
    <div className="rounded-xl border border-slate-800 p-4 transition hover:border-indigo-500">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-white">{name}</h4>

          <p className="mt-1 text-sm text-slate-400">{role}</p>
        </div>

        <AIScoreBadge score={score} />
      </div>

      <p className="mt-4 text-sm text-slate-500">Current Stage</p>

      <p className="font-medium text-white">{stage}</p>
    </div>
  );
}
