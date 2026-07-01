interface Props {
  status: "Hiring" | "Draft" | "Paused" | "Closed";
}

const styles = {
  Hiring: "bg-emerald-500/20 text-emerald-400",
  Draft: "bg-slate-700 text-slate-300",
  Paused: "bg-amber-500/20 text-amber-400",
  Closed: "bg-rose-500/20 text-rose-400",
};

export default function JobStatusBadge({ status }: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
