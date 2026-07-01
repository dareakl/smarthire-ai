import { JobStatus } from "../../types";

interface Props {
  status: JobStatus;
}

const statusStyles: Record<JobStatus, string> = {
  Hiring: "bg-emerald-500/20 text-emerald-400",
  Draft: "bg-slate-500/20 text-slate-300",
  Paused: "bg-amber-500/20 text-amber-400",
  Closed: "bg-rose-500/20 text-rose-400",
};

export default function JobStatusBadge({ status }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
